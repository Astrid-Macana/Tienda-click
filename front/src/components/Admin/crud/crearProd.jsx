import { useState,useRef } from "react";
import { saveProductos } from "../service";


import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";


function CrearProductos() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [categoria, setCategoria] = useState("");
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const inputFileRef = useRef();

    const handleSubmit = (productosData) => {
      saveProductos(productosData= {
          title:title,
          price:price,
          Categoria:categoria,
          descripcion:descripcion,
          image: inputFileRef.current.files[0],
        })
       .then((response) => {
        handleClose();
        window.location.reload();
      });
    };
     return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Button className=' shadow m-3' variant="success" type="submit" value="Enviar" onClick={handleShow}>Crear Producto</Button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Crear un producto</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="idioma">
                                <Form.Label> Producto</Form.Label>
                                <Form.Control placeholder="Nombre del Producto" name='title' onChange={(event) => { setTitle(event.target.value) }} />
                            </Form.Group>
                        </Row>

                        <Form.Group controlId="image" className="mb-3">
                            <Form.Label>Seleccionar Producto</Form.Label>
                            <Form.Control type="file" ref={inputFileRef} />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="price">
                                <Form.Label>Valor del Producto</Form.Label>
                                <Form.Control placeholder="precio" name='price' onChange={(event) => { setPrice(event.target.value) }} />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="descripcion">
                            <Form.Label>Descripcion</Form.Label>
                            <Form.Control placeholder="descripcion" name='descripcion' onChange={(event) => { setDescripcion(event.target.value) }} />
                        </Form.Group>
                        

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="categoria">
                                <Form.Select className='mb-3' name='categoria' onChange={(event) => { setCategoria(event.target.value) }}>
                                    <option>Seleccioná una categoria</option>
                                    <option value="ropa para mujer">Ropa para mujer</option>
                                     <option value="ropa para hombre">Ropa para hompre</option>
                                    
                                </Form.Select>
                            </Form.Group>
                        </Row>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="success" type="submit" onClick={handleSubmit}>Agregar Producto</Button>
                    <Button variant="danger" onClick={handleClose}>Cancelar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default CrearProductos;
