const { Mongoose } = require('mongoose');
const ContenedorMongoDB = require('../../contenedores/contenedorMongoDb');

class ProductosDaoMongoDb extends ContenedorMongoDB {
    constructor() {
        super('productos', {
            timestamp: {type: String, required: true},
            title: {type: String, required: true},
            thumbnail: {type: String, required: false},
            description: {type: String, required: false},
            price: {type:  Number, required: true},
            codigo: {type: Number, required: true},
            stock: {type: Number, required: true}
        })
    }
}

module.exports = ProductosDaoMongoDb