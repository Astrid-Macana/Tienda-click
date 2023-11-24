import React,{useState,useEffect} from "react";
import { getProductos } from "./service";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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
    const productosPorCategoria = productos.reduce((acc,producto)=>{
        if (!acc[producto.Categoria]){
            acc[producto.Categoria]=[];
        }
        acc[producto.Categoria].push(producto);
        return acc;
    },{});
    return (
      <Container className="backGround d-flex">
        {Object.entries(productosPorCategoria).map(([Categoria, productos]) => (
           
           
           <Tabs 
           activekey={key} 
           onSelect={(k) => setkey(k)} 
           key={Categoria}>
            
              <Tab 
              eventkey={Categoria} title={Categoria} className="mb-3">
                {productos.map((producto) => (
                  <Container className="w-100">
                    <Card className="text-center m-3">
                      <Card.Img
                        variant="top"
                        src={producto.image}
                        style={{ height: "10rem" }}
                      />
                      <Card.Body>
                        <Card.Title className="m-2">
                          {producto.Categoria}
                        </Card.Title>
                        <Card.Text>
                          {producto.descripcion} - {producto.price}
                        </Card.Text>
                        <Button variant="primary" href=".\reserva">
                          ver Producto
                        </Button>
                      </Card.Body>
                      <Card.Footer className="text-muted">
                        {Categoria}
                      </Card.Footer>
                    </Card>
                  </Container>
                ))}
              </Tab>
            </Tabs>
          )
        )}
      </Container>
    );

}
export default  Productos
