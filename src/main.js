import express from 'express'
import { inProductManager } from './managers/ProductManager.js'


 const app = express()

app.use(express.json())  //esto es para recibir json en el cuerpo de la peticion
app.use(express.urlencoded({extended : true})) // esto es para recibir datos desde un formulario, porq los envia por url

     app.get('/api/products', (req, res) => {
     const productos = inProductManager.arraydeproductos
     res.json(productos)
 })

 app.get('/api/products:pid', (req, res) => {
     const idBuscado = req.params.id
     const producto = inProductManager.recuperarUnoSegunIdentificador({campo : 'producto id' , valor: pidBuscado})
     res.json(producto)
 })

 app.post('/api/productos' , (req, res) => {
     const datosProducto = req.body
     const producto = new Producto(datosProducto)
     const productoGuardado = inMemoryManager.guardar(producto)
     res.status(201).json(productoGuardado)
 })

 const puerto = 8081
 app.listen (puerto, () => {
     console.log(`conectado a ${puerto}`)
 }) 