import React from "react";
import { Button, Container, Row, Col, Navbar, Nav } from "react-bootstrap";

function NavB({isDarkMode}) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">SkiBum®</Navbar.Brand>
        <Navbar className="me-auto">
          <Nav.Link href="#resorts">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <button onClick={isDarkMode}>
            {isDarkMode ? "App Light" : "App Dark"}
          </button>
        </Navbar>
      </Container>
    </Navbar>
  );
}

export default NavB;
