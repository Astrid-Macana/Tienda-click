import React, { useState, useEffect } from "react";
import { getProductos } from "./service";

import CrearProductos from "./crud/crearProd";
import ActProductos from "./crud/actProducto";
import BorrarProductos from "./crud/borrarProd";

import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";


export const AdmProductos = () =>{
    const [productos, setProductos] = useState([]);

    useEffect(() =>{
        async function cargaProductos() {
            const response = await getProductos();

            if (response.status === 200) {
                setProductos(response.data.productos)
            }
        }
        cargaProductos()
    }, [])
    return (
      <>
        <Container>
          <CrearProductos />
          <ActProductos />
          <BorrarProductos />
        </Container>

        <Container>
          {productos.map(({ _id, Categoria, title, price, image, descripcion }) => (
            <ListGroup key={_id}>
              <ListGroup.Item>
                <div>
                  <div>Categoria</div>
                  <h3> {Categoria} </h3>
                </div>
              </ListGroup.Item>

              <ListGroup.Item>
                <div>
                
                  <Image
                    src={"../image/" + image}
                    alt=""
                    style={{ maxWidth: "50px", maxHeight: "50px" }}
                  />
                </div>
              </ListGroup.Item>

              <ListGroup.Item>
                <div>
                  <div>Nombre del Producto</div>
                  <h3> {title} </h3>
                </div>
              </ListGroup.Item>

              <ListGroup.Item>
                <div>
                  <div>Precio</div>
                  <h3> {price} </h3>
                </div>
              </ListGroup.Item>

              <ListGroup.Item>
                <div>
                  <div>Descripcion del producto</div>
                  <h3> {descripcion} </h3>
                </div>
              </ListGroup.Item>
            </ListGroup>
          ))}
        </Container>
      </>
    );
}
export default AdmProductos;