const fs = require('fs');

class ContenedorArchivo {
    constructor(name) {
        this.name = name;
    }
    async read() {
        try {
            let data = await fs.promises.readFile(this.name, 'utf8');
            return data
        } catch (err) {
            throw Error(`Error al LEER el archivo ${err}`)
        }
    }
    async write(datos, msg) {
        try {
            await fs.promises.writeFile(this.name, JSON.stringify(datos, null, 2));
            console.log(msg);
        } catch (err) {
            throw Error(`Error al ESCRIBIR el archivo ${err}`)
        }
    }
    async save(prod) {
        try {
            let newID = 1
            let newProd = null;

            let data = await this.read();
            let datos = JSON.parse(data);
            if (data === '[]'){
                prod.id = newID
                newProd = [prod];
                await this.write(newProd, 'Primer productos agregado');
            }else{
                prod.id = parseInt(datos[datos.length - 1].id) + 1;
                prod.id = `${prod.id}`
                newProd = prod;
                datos.push(newProd);
                await this.write(datos, 'Producto agregado')
            }
            return newProd
        } catch (err) {
            throw Error(`Error al guardar el producto ${err}`)
        }
    }
    async getAll() {
        try {
            let data = await this.read();
            let datos = JSON.parse(data);
            return datos
        } catch (err) {
            throw Error(`Error ${err}`);
        }
    }
    async getById(id) {
        try {
            let data = await this.read();
            let datos = JSON.parse(data);
            let resp = datos.filter(p=>p.id == id);
            if(resp.length != 0) {
                return resp[0]
            }else{ return false }
        } catch (err) {
            throw Error(`Error ${err}`);
        }
    }
    async deleteAll() {
        try {
            let data = []
            await this.write(data, 'Productos eliminados')
        } catch (err) {
            throw Error(`Error ${err}`);
        }
    }
    async deleteById(id) {
        try {
            let data = await this.read();
            let datos = JSON.parse(data);
            let prod = datos.find(p=>p.id == id);
            if(prod) {
                let i = datos.indexOf(prod);
                datos.splice(index, 1);
                await this.write(datos, `El producto con el id ${id} fue eliminado`)
            }else{
                console.log(`El producto con el id ${id} no existe`);
            }
        } catch (err) {
            throw Error(`Error ${err}`);
        }
    }
    async update(prod) {
        let prodUpdate = await this.getById(prod.id);
        let allProds = await this.read();
        if (prodUpdate){
            const producto = allProds.findIndex(p => p.id == prod.id);
            Object.assign(allProds[producto], prod);
            await this.write(allProds, `El producto con el id ${prod.id} fue modificado correctamente`)
        }else return
    }
}

module.exports = ContenedorArchivo;