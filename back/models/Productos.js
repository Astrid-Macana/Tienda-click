const mongoose = require('mongoose');
const { appConfig } = require('../config');

const productoSchema = new mongoose.Schema(
    {
        title: String,
        price: Number,
        descripcion: String,
        image: String,
        Categoria: String
    },
    {
        timestamps: true
    }
   
);

/*cursoSchema.methods.setImagen = function setImagen(filename){
   const { host, port } = appConfig;
    this.imagen = `${host}:${port}/public/${filename}`
}*/

const Producto = mongoose.model('producto', productoSchema);

module.exports = Producto;
