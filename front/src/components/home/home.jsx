import Carousel from "react-bootstrap/Carousel";

function Home() {
  return (
    
    <Carousel className=" contenedor" data-bs-theme="dark">
      <Carousel.Item className="item">
        <img
          className="d-block w-100"
          src="../image/Presentación.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>seccion de tecnologia</h5>
          <p>oferta limitada por unidad </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../image/Presentación1.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>seccion de ojoyas</h5>
          <p>Escoge tu mejor Acecesorio</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../image/Presentación2.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5> seccion ropa para hombre</h5>
          <p>Que tu comodidad sea tu mejor estilo.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default Home;
