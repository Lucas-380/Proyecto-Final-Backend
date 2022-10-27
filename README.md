# Proyecto Final 2daEntrega - Backend 👨‍💻
_Metodos verificados mediante POSTMAN._

### Antes de iniciar el sevidor, elegir la base de datos en el archivo .env :
```
DB = txt
DB = firebase
DB = mongodb
```

## Productos: 

_Para ver todos los productos usar:_
### GET
```
http://localhost:8080/api/productos
```
##  
_Para ver un producto especifico usar:_
### GET
```
http://localhost:8080/api/productos/ID Producto
```
##  
_Para agregar un producto usar:_
### POST
```
http://localhost:8080/api/productos
```
##  
_Para actualizar un producto usar:_
### PUT
```
http://localhost:8080/api/productos/ID Producto
```
##  
_Para eliminar un producto especifico usar:_
### DELETE
```
http://localhost:8080/api/productos/ID Producto
```
##  

## Carrito:

_Para ver todos los carritos usar:_
### GET
```
http://localhost:8080/api/carrito
```
##  
_Para ver un carrito especifico usar:_
### GET
```
http://localhost:8080/api/carrito/ID Carrito
```
##  
_Para crear un carrito vacio usar:_
### POST
```
http://localhost:8080/api/carrito
```
##  
_Para agregar un producto a un carrito usar:_
### POST
```
http://localhost:8080/api/carrito/ID Carrito/producto/ID Producto
```
##  
_Para eliminar un carrito usar:_
### DELETE      
```
http://localhost:8080/api/carrito/ID Carrito
```
##  
_Para eliminar un producto de un carrito usar:_
### DELETE
```
http://localhost:8080/api/carrito/ID Carrito/producto/ID Producto
```
