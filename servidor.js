const express = require('express');
const config = require('./src/config')
require('dotenv').config()

const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Routes
const routerProds = require ('./routes/productos');
app.use('/api/productos', routerProds);

const routerCarrito = require ('./routes/carrito');
app.use('/api/carrito', routerCarrito);

//errores
app.use((err, req, res, next) => { 
    console.log(err.message);
    return res.status(500).send('Error del servidor...')
})

// PORT = process.env.PORT || 8080
const server = app.listen(config.PORT, () =>{
    console.log(`Example app listening at ${server.address().port}`)
})
server.on('error', error => console.log(`Error al conectar el servidor ${error}`));
