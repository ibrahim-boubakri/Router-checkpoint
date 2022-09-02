import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const LinkStyle = {
  color: "white",
  textDecoration: "none",
  marginLeft: "50px",
};

function NavbarCustom() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <h2>
            <Link to="/home" style={LinkStyle}>
              Home
            </Link>
          </h2>
          <h2>
          <Link to="/products" style={LinkStyle}>
            Products
          </Link>
          </h2>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarCustom;