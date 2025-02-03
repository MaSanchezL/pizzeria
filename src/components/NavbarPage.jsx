import React from "react";
import { Navbar, Nav, Container, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { useCartContext } from "../context/CartContext";

const NavbarPage = () => {
  const { token, logout } = useUserContext(); 
  const { cart } = useCartContext();
  
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Pizzería Mamma Mia
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!token ? (
              <>
                <Nav.Link as={Link} to="/login">🔐 Login</Nav.Link>
                <Nav.Link as={Link} to="/register">🔐 Registro</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/profile">👤 Profile</Nav.Link>
                <Nav.Link as={Button} onClick={logout}>🔑 Logout</Nav.Link>
              </>
            )}
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/cart">
              🛒 {totalItems > 0 ? `Carrito: $${totalAmount.toFixed(2)}` : 'Carrito vacío'}
              {totalItems > 0 && (
                <Badge bg="secondary" pill>
                  {totalItems}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarPage;
