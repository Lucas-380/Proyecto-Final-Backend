const ContenedorFirebase = require ('../../contenedores/contenedorFirebase');

class CarritoDaoFirebase extends ContenedorFirebase {
    constructor() {
        super('carritos');
    }
}

module.exports = CarritoDaoFirebase