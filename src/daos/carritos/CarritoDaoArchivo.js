const ContenedorArchivo = require ('../../contenedores/contenedorArchivo');

class CarritoDaoArchivo extends ContenedorArchivo {
    constructor() {
        super('./DB/carritos.txt')
    }
}

module.exports = CarritoDaoArchivo