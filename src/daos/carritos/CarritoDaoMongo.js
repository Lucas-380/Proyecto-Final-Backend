const ContenedorMongoDB = require ('../../contenedores/contenedorMongoDb');

class CarritoDaoMongoDb extends ContenedorMongoDB {
    constructor() {
        super('carritos',{
            timestamp: {type: String, required: true},
            productos: {type: Array, required : true}
        })
    }
}

module.exports = CarritoDaoMongoDb
