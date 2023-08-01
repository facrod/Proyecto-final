import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Nav.css";
import fuzlogo from "../../assets/img/fuzlogo.jpg";
import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';

const Style = {
  color: "red",
};

const ConditionalCSS = ({ isActive }) => {
  return isActive ? Style : undefined;
};

function NavComp() {
  return (
    <Navbar expand="md" className="NavBar">
      <Container className='Container'>
      <Navbar.Brand className= "fuzlogo" href="#">
        <img src={fuzlogo} alt="Logo" width="50" height="50" style={{borderRadius: '100%'}}/>
      </Navbar.Brand>
      <NavLink className="nav-link" to="/" style={ConditionalCSS}>Inicio</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="Nav">
            <NavLink className="nav-link" to="/Productos" style={ConditionalCSS}>Product</NavLink>
            <NavLink className="nav-link" to="/Contacto" style={ConditionalCSS}>Contacto</NavLink>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Salud, higiene y estetica</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Alimentos balanceados
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Accesorios</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand>
        <Icon icon="material-symbols:shopping-cart-outline" />
      </Navbar.Brand>
      <Navbar.Brand>
      <Icon icon="ic:sharp-search" />
      </Navbar.Brand>
      <Navbar.Brand>
      <Icon icon="ic:baseline-login" />
      </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavComp;