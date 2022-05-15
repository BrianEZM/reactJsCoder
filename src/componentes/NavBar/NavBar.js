import { CartWidget } from "../ItemListContainer/CartWidget";
import { Link, NavLink } from 'react-router-dom';
import "./NavBar.css";
import { Navbar, Container, Nav } from 'react-bootstrap';

export const NavB = () => {

  return (
        <>

          <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              <Navbar.Brand href="#home">
                <Link to="/" className="navLinks">
                  <h1 className="navLinks">Tatuajes Nahuel</h1>
                </Link>
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">

              <Nav.Link href="#home">
                <NavLink className="navText" id="1" to="category/grandes">Tatuajes Grandes</NavLink>
              </Nav.Link>

              <Nav.Link href="#home">
                <NavLink className="navText" id="2" to="category/medianos">Tatuajes Medianos</NavLink>
              </Nav.Link>

              <Nav.Link href="#home">
                <NavLink className="navText" id="3" to="category/pequeños">Tatuajes Pequeños</NavLink>
              </Nav.Link>

            <Nav.Link href="#link">
            <NavLink className="navCart" to="/cart"> 
                <CartWidget /> 
           </NavLink>
        </Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
      </>
    );
};