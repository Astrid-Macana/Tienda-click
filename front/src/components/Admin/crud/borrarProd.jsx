import React, { useState, useEffect } from "react";
import { getProductos, deleteProductos } from "../service";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function BorrarProductos(){
    const [productos, setProductos] = useState([]);
    const [productoSel, setProductoSel] = useState({});

    useEffect(() =>{
        async function cargaProductos() {
            const response = await getProductos();

            if (response.status === 200) {
                setProductos(response.data.productos)
            }
        }
        cargaProductos()
    }, [])

    const handleSelCurso = (event) => {
        setProductoSel(event.target.value)
        console.log(productoSel)
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = () => {
      const confirmDelete = window.confirm(
        `¿Estas seguro que querés eliminar el  Producto?`
      );

      if (confirmDelete) {
        deleteProductos(productoSel)
          .then((response) => {
            handleClose();
            window.location.reload();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };
    return (
      <div>
        <Button
          className=" shadow m-3"
          variant="primary"
          type="submit"
          value="Enviar"
          onClick={handleShow}
        >
          Borrar Producto
        </Button>

        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header>
            <Modal.Title>Borrar Producto</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group controlId="title">
                <Form.Select value={productoSel} onChange={handleSelCurso}>
                  <option>Seleccionar Producto</option>
                  {productos.map((producto) => (
                    <option key={producto._id} value={producto._id}>
                      {producto.Categoria} - {producto.title} - {producto.price} -{" "}
                      {producto.descripcion}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="success" type="submit" onClick={handleDelete}>
              Borrar Producto
            </Button>
            <Button variant="danger" onClick={handleClose}>
              Cancelar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );

}

export default BorrarProductos;