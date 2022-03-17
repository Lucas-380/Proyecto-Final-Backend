const express = require('express')
const Daos = require("../src/daos/configDb");

const  router  = express.Router();

let CartMethods = Daos.carritos
const ProductMethods = Daos.productos;


//Timestamp
function fecha() {
  const time = new Date();
  let fecha = time.getDate() + '/' + (time.getMonth()+1) + ' - ' + time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
  return fecha;
}
//-------------ROUTERS-------------
//Crea un carrito vacio
router.post('/', async (req, res) => {
  let newCart = {
    timestamp: fecha(),
    productos: []
  };
  try {
    let cart = await CartMethods.save(newCart)
    res.send({id: cart.id});
  } catch (err) {
    throw Error(`Error al guardar el carrito: ${err}`);
  }
});

//Agrega un producto a un carrito
router.post('/:idCart/producto/:idProd', async (req, res) => {
  const { idCart, idProd } = req.params;
  try {
      //validación de existencia del prod
      let prod = await ProductMethods.getById(idProd);
      if (Object.keys(prod).length != 0){
        //validación de existencia del cart
        let cart = await CartMethods.getById(idCart);
        if (cart) {
          cart.productos.push(prod);
          CartMethods.update(cart);
          res.send({cart});
        }else{ res.send({error : 'Carrito no encontrado'}) }
      }else{ res.send({error : 'Producto no encontrado'}) }
  } catch (err) {
    throw Error(`Error al agregar el producto ${idProd} al Carrito ${idCart}`)
  }
});

//Elimina un carrito por su id
router.delete('/:id?', async (req, res) => {
  const { id } = req.params;
  try {
    const cart = await CartMethods.getById(id);
    if (Object.keys(cart).length != 0) {
      await CartMethods.deleteById(id);
      res.send(await CartMethods.getAll());
    } else { res.send({error: `El carrito ${id} no existe`}) }
  } catch (err) {
    throw Error(`Error al borrar el carrito: ${err}`)
  }
});

//vista de los carritos guardados
router.get('/', async (req, res) => {
  const cart = await CartMethods.getAll();
  res.json(cart);
});

//vista de un carrito según su id
router.get('/:id?', async (req, res) => {
  const { id } = req.params;
  const cart = await CartMethods.getById(id);
  cart
      ? res.json(cart)
      : res.status(404).json(`No se encontro ningún carrito con el id ${id}`);
})

//eliminar determinado producto de un carrito asignado
router.delete('/:idCart/producto/:idProd', async (req, res) => {
  const { idCart, idProd } = req.params;
  try {
    //validación de existencia del carrito
    let cart = await CartMethods.getById(idCart);
    if (Object.keys(cart).length != 0) {
      //Si existe, se busca al producto a eliminar
      let prodsCart = cart.productos;
      let prod = prodsCart.findIndex(i => i.id == idProd);
        if(prod >= 0) {
          cart.productos.splice(prod, 1);
          CartMethods.update(cart);
          res.send(cart);
        } else { res.send({error: `El producto ${idProd} no existe en el Carrito ${idCart}`}) }
    } else { res.send({error: `El Carrito ${idCart} no existe`}) }
  } catch (err) {
    throw Error(`Error al borrar el producto del carrito: ${err}`)
  }
})

//EXPORT MODULO ROUTER
module.exports = router;
