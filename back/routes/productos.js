const express = require('express');
const api = express.Router();
const upload = require('../libs/storage');

const{addProducto,getProducto,idProductos,updateProductos,deleteProducto}=require('../controllers/productoController')

api.get('/productos',getProducto);
api.post('/productos',addProducto);
api.get('/productos/:id',idProductos);
api.put('/productos/:id',updateProductos);
api.delete('/productos/:id',deleteProducto);

module.exports = api;