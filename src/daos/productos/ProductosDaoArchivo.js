const ContendorArchivo = require('../../contenedores/contenedorArchivo');

class ProductoDaoArchivo extends ContendorArchivo {
    constructor() {
        super('./DB/productos.txt');
    }
}

module.exports = ProductoDaoArchivo