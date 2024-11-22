import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
const NavbarPage = () => {
 
const total = 25000;
const token = false 
 return (
    <>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container fluid>
        <Navbar.Brand href="#home" >Pizzería Mamma Mia!</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            <Button variant="dark">🍕Home</Button>
            <Button variant="dark">🔒Login</Button>
            <Button variant="dark">🔑Register</Button>
            </Nav>

              <Button variant="outline-info">🛒Total: ${total}</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarPage;
