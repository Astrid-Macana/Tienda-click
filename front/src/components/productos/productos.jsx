import React,{useState,useEffect} from "react";
 import { getProductos } from "./service";
// import Tab from "react-bootstrap/Tab";
// import Tabs from "react-bootstrap/Tabs";
// import Container from "react-bootstrap/Container";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";

 import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";

export const Productos = ()=>{
    const[key, setkey] = useState('Categoria');
    const[productos,setProductos]= useState([]);

    useEffect(() =>{
        async function traerProducto() {
            const response = await getProductos();
            if (response.status === 200) {
                setProductos(response.data.productos)  
            }
        }
        traerProducto();
    },[]);
   
     if (!productos.length) {
       return <div className="text-center">Cargando ...</div>;
     }
    
    return (
      <Container>
        {productos.map(
          ({ _id, Categoria, title, price, image, descripcion }) => (
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
                    style={{ maxWidth: "90px", maxHeight: "90px" }}
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
          )
        )}
      </Container>
    );

}
export default  Productos
