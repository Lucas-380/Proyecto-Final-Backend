
const { v4:uuid4 } = require('uuid')


var admin = require("firebase-admin");


const db = admin.firestore()

class ContenedorFirebase{
    constructor(name) {
        this.collection = db.collection(name)
    }
    async save(newData) {
        try {
            let doc = this.collection.doc(`${uuid4()}`)
            await doc.create(newData);
            return { ...newData, id: doc.id }
        } catch (err) {
            throw Error(`Error ${err}`)
        }
    }
    async getAll() { 
        try {
            const resp = []
            const data = await this.collection.get();
            data.forEach(doc => {
                resp.push({id:doc.id, ...doc.data()})
            })
            return resp
        } catch (err) {
            throw Error(`Error ${err}`)
        }
    }
    async getById(id) {
        try {
            let doc = await this.collection.doc(id);
            let prod = (await doc.get()).data()
            if (prod) {
                prod.id = id
                return prod
            }else return false
        } catch (err) {
            throw Error(`Error ${err}`)
        }
    }
    async deleteById(id) {
        try {
            const data = await this.collection.doc(id).delete();
            return data
        } catch (err) {
            throw Error(`Error ${err}`)
        }
    }
    async deleteAll() {
        try {
            const allData = await this.getAll()
            const ids = allData.map(id=> this.deleteById(id))
            ids.map(id => this.deleteById(id))
            return {msg: 'Data deleted'}
        } catch (err) {
            throw Error(`Error ${err}`)
        }
    }
    async update(data) {
        try {
            const update = await this.collection.doc(data.id).set(data)
            return update
        } catch (err) {
            throw Error(`Error ${err}`)
        }
    }
}

module.exports = ContenedorFirebase;