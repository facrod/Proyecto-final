import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Nav.css";
import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';

const Style = {
  color: "yellow",
};

const ConditionalCSS = ({ isActive }) => {
  return isActive ? Style : {"color": "white"};
};

function NavComp({children}) {
  return (
    <Navbar expand="md" className="NavBar">
      <Container className='Container'>
        <NavLink className="nav-link" to="/" style={ConditionalCSS}>Inicio</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav >
            <NavLink className="nav-link" to="/Productos" style={ConditionalCSS}>Productos</NavLink>
            <NavLink className="nav-link" to="/Destacados" style={ConditionalCSS}>Destacados</NavLink>
            <NavLink className="nav-link" to="/Ayuda" style={ConditionalCSS}>Ayuda</NavLink>
            <NavLink className="nav-link" to="/Carrito" style={ConditionalCSS}>Carrito</NavLink>
            <Navbar.Brand>
              <Icon icon="material-symbols:shopping-cart-outline" />
            </Navbar.Brand>
            <NavLink className="nav-link" to="/Favoritos" style={ConditionalCSS}>Favoritos</NavLink>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Salud, higiene y estetica</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Alimentos balanceados</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Accesorios</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand>
          <Icon icon="ic:baseline-login"/>
        </Navbar.Brand>
        {children}
        <NavLink className="nav-link admin" to="/Administrar" style={ConditionalCSS}>Administrar</NavLink>
      </Container>
    </Navbar>
  );
}

export default NavComp;