import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./nav.css";

function Barra() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="container">
        <Navbar.Brand className="nadvar">
          <Link className="nombrelogo" to="/">
            Tienda-Click
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link className="link" to="/admin">
                Administrdor
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link" to="/productos">
                Productos
              </Link>
            </Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">
                Ropa para Mujer
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Ropa para Hombre
              </NavDropdown.Item>
             
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Barra;
