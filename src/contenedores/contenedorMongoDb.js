const mongoose = require('mongoose')
const config = require('../config')

const main =()=>{
    mongoose.connect(config.mongoRemote.path)
    mongoose.connection.on('open', () => {
        console.log('Base de datos conectada correctamente');
    })
    mongoose.connection.on('error', () => {
        console.log('Error al conectar Base de datos');
    })
}
main();

const asPOJO = obj => JSON.parse(JSON.stringify(obj))

const rename = (data, from, to) => {
    data[to] = data[from]
    delete data[from]
    return data;
}
const remove = (data, archivo) => {
    const value = data[archivo]
    delete data[archivo]
    return value;
}

class ContenedorMongoDB {
    constructor(name, schema){
        this.collection = mongoose.model(name, schema);
    }
    async save(newData) {
        try {
            let doc = await this.collection.create(newData);
            doc = asPOJO(doc)
            rename(doc, '_id', 'id')
            remove(doc, '__v')
            return doc
        } catch (err) {
            throw Error(`Error ${err}`)
        }
    }
    async getAll() {
        try {
            let data = await this.collection.find({}, {__v:0}).lean()
            data = data.map(asPOJO);
            data = data.map(d => rename(d, '_id', 'id'));
            return data
        } catch (err) {
            throw Error(`Error ${err}`)
        }
    }
    async getById(id) {
        try {
            let docs = false;
            docs = await this.collection.findOne({'_id': id}, { _v:0 });
            if (docs) {
                const res = rename(asPOJO(docs), '_id', 'id');
                return res;
            }else return false;
        } catch (err) {
            throw Error(`Error ${err}`)
        }
    }
    async deleteAll() {
        try {
            await this.collection.deleteMany({})
            return{msg:'data deleted'}
        } catch (err) {
            throw Error(`Error ${err}`)
        }
    }
    async deleteById(id){
        try {
            const item = await this.collection.findOneAndDelete({_id:id})
            if(item){
                return item
            }else return {error:'id no encontrado'}
        } catch (err) {
            throw Error(`Error ${err}`)
        }
    }
    async update(nuevoElem){
        try {
            rename(nuevoElem, 'id', '_id')
            const { n, nModified } = await this.collection.replaceOne({ '_id': nuevoElem._id }, nuevoElem)
            if (n == 0 || nModified == 0) {
                throw new Error('Error al actualizar: no encontrado')
            } else {
                rename(nuevoElem, '_id', 'id')
                remove(nuevoElem, '__v')
                return asPOJO(nuevoElem)
            }
        } catch (error) {
            throw new Error(`Error al actualizar: ${error}`)
        }
    }
}

module.exports = ContenedorMongoDB;