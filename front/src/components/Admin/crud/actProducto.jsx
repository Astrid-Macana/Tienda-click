import React, { useState, useEffect, useRef } from "react";

import { getProductos, updateProductos } from "../service";


import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ActProductos(){
    const [productos, setProductos] = useState([]);
    const [productosSel, setProductosSel] = useState("");
    const [datosProductos, setDatosProductos] = useState({});

    useEffect(() =>{
        async function cargaProductos() {
            const response = await getProductos();

            if (response.status === 200) {
                setProductos(response.data.productos)
            }
        }
        cargaProductos()
    }, [])

    const handleSelProducto = (event) => {
      const selectedProduto = productos.find((producto) => producto._id === event.target.value
      );
      setProductosSel(event.target.value);
      setDatosProductos(selectedProduto);
    };

     const [show, setShow] = useState(false);
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
     const inputFileRef = useRef();

    const handleSubmit = () => {
        const newCategoria = datosProductos.Catergoria;
        const newtitle= datosProductos.title;
        const newPrice = datosProductos.price;
        const newDescripcion = datosProductos.descripcion;
        const newImage = inputFileRef.current?.file[0]

     const datosNuevos={
          title:newtitle,
          price:newPrice,
          Categoria:newCategoria,
          descripcion:newDescripcion,
          image: newImage
     } 
     const confirmActualizar = window.confirm(`¿Estas seguro que querés actualizar el producto?`);
        
        if(confirmActualizar){
            updateProductos(productosSel, datosNuevos)
            .then((response) => {
                handleClose()
                window.location.reload()
            } )
        }
    };
     return(
        <div>
             <Button className=' shadow m-3' variant="primary" type="submit" value="Enviar" onClick={handleShow}>Actualizar Producto</Button>
                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header>
                        <Modal.Title>Actualizar Producto</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                        <Form.Group controlId="producto">
                                <Form.Label>Seleccionar Producto</Form.Label>
                                <Form.Select value={productosSel} onChange={handleSelProducto}>
                                    <option>Seleccionar curso</option>
                                    {productos.map((producto) =>(
                                        <option key={producto._id} value={producto._id}>
                                            {producto.Categoria} - {producto.title} - {producto.price} - {producto.descripcion}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                    {productosSel && (
                        <div>
                            <Form.Group controlId="nombre">
                            <Form.Label>Nombre del producto</Form.Label>
                            <Form.Control defaultValue={datosProductos.title} name="titulo" onChange={(event) => {setDatosProductos({...datosProductos, title: event.target.value})}}></Form.Control>
                            </Form.Group>
                        </div>
                    )}
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                    <Button variant="success" type="submit" onClick={handleSubmit}>Actualizar producto</Button>
                    <Button variant="danger" onClick={handleClose}>Cancelar</Button>
                </Modal.Footer>

                </Modal>
        </div>
    )

}
 export default ActProductos ;