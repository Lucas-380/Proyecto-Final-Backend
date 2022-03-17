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
                await this.write(newProd, 'Primera data guardada');
            }else{
                prod.id = parseInt(datos[datos.length - 1].id) + 1;
                prod.id = `${prod.id}`
                newProd = prod;
                datos.push(newProd);
                await this.write(datos, 'Data agregada')
            }
            return newProd
        } catch (err) {
            throw Error(`Error al guardar la data ${err}`)
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
            await this.write(data, 'Archivos eliminados')
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
                datos.splice(i, 1);
                await this.write(datos, `El archivo con el id ${id} fue eliminado`)
                return datos
            }else{
                console.log(`El archivo con el id ${id} no existe`);
            }
        } catch (err) {
            throw Error(`Error ${err}`);
        }
    }
    async update(prod) {
        let prodMod = await this.getById(prod.id);
        if (Object.keys(prodMod).length != 0) {
            let prods = await this.read();
            prods = (JSON.parse(prods, null, 2));
            let id = prod.id - 1;
            prods.splice(id, 1, prod);
            await this.write(prods, "Archivo modificado correctamente");
            return prods;
        }
    }
}

module.exports = ContenedorArchivo;