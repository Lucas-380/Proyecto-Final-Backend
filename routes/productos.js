const express = require('express');
const router = express.Router();

const Daos = require('../src/daos/configDb');


const ProductMethods = Daos.productos;

//Función de administrador
function admin (req, res, next){
    const admin = true //Por defecto esta en true
    if ( admin !== true){
        res.status(401).send({
            error: -1,
            descripción: `ruta ${req.originalUrl}, metodo ${req.method} no autorizada`
        })
    }else{
        next();
    }
}

//timestamp
function fecha() {
    const time = new Date();
    let fecha = time.getDate() + '/' + (time.getMonth()+1) + ' - ' + time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
    return fecha;
  }

//-----------------------------------ROUTES-----------------------------------
//Devuelve todos los productos
router.get('/', async (req, res) => {
    const prods = await ProductMethods.getAll();
    res.json(prods)
})


//Devuelve un producto según su id
router.get('/:id?', async (req,res)=>{
    const { id } = req.params;
    let respuesta = await ProductMethods.getById(id);
    respuesta ? res.json(respuesta) : res.status(404).json(`No se encontró ningún producto con el id ${id}`);
})

//Recibe y agrega un producto, y lo devuelve con su id asignado
router.post('/', admin, async (req, res)=>{
    let {title, description, codigo, thumbnail, price, stock} = req.body;
    let newProd = {
        timestamp: fecha(),
        title,
        description,
        codigo,
        thumbnail,
        price,
        stock
    }
    const producto = await ProductMethods.save(newProd)
    producto
        ? res.json(producto)
        : res.status(404).send('Faltan campos en el producto');
})

//Recibe y actualiza un producto según su id
router.put('/:id', admin, async (req, res) => {
    let { title, description, codigo, thumbnail, price, stock} = req.body;
    let prodUpdate = {
        id : req.params.id,
        timestamp: fecha(),
        title,
        description,
        codigo,
        thumbnail,
        price,
        stock
    };
    //validacion de existencia
    let exists = await ProductMethods.getById(req.params.id);
    if (Object.keys(exists).length != 0 ) {
        const prod = await ProductMethods.update(prodUpdate)
        res.json(prod)
    } else {
        res.send({ Error : 'Producto no encontrado' });
    }
})

//Elimina un producto según su id
router.delete('/:id', admin, async (req, res) => {
    const { id } = req.params;
    let respuesta = await ProductMethods.deleteById(id)
        ? { success: 'producto eliminado' } 
        : { error: 'El producto no se pudo eliminar' }
    res.json(respuesta)
})


module.exports = router;