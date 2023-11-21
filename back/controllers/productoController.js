const Producto = require('../models/Productos');

async function addProducto(req, res) {
    try{
        const {title,price,category,descripcion}=req.body;
        
        const producto = Producto(
            {
                title,
                price,
                category,
                descripcion
            });
           const productos = await producto.save();
           res.status(201).send({productos}) 
    }
    catch (e){
      res.status(500).send({message:e.message})
    }
}
async function getProducto(req,res) {
   try{
    const productos = await Producto.find();
    res.status(200).send({productos});
   }catch (e){
      res.status(500).send({message:e.message})
    } 
}
//traemos productos por id

async function idProductos (req,res) {
    try {
      const productos = Producto.findById(req.params.id);
      res.status(200).send({ productos });
    } catch (e) {
      res.status(500).send({ message: e.message });
    } 
}

async function updateProductos(req,res) {
    try {
      const productos = await Producto.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true
        }
      );
      res.status(200).send({ productos });
    } catch (e) {
      res.status(500).send({ message: e.message });
    } 
}

async function deleteProducto(req,res) {
    try {
        const producto =await Producto.findByIdAndDelete(req,params.id);
        if (!producto) {
            return res.status(404).send({message:'se encontro el producto'})
           }
           res.status(200).send({message:'producto eliminado exitosamente'})
    } catch (e) {
      res.status(500).send({ message: e.message });
    } 
    
}

module.exports={addProducto,getProducto,idProductos,updateProductos,deleteProducto};