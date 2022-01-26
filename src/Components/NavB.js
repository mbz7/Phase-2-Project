import React from "react";
import { Button, Container, Row, Col, Navbar, Nav } from "react-bootstrap";

function NavB({ isDarkMode }) {
  return (
    <Navbar
      className={
        ""
      }
      bg="dark"
      variant="dark"
    >
      <Container className={"nav-container d-flex align-items-center justify-content-center justify-content-md-between"}>
        <Navbar.Brand
          className={"d-flex align-items-center justify-content-between"}
          href="#home"
        >
          SkiBum®
        </Navbar.Brand>
        <Container>
        <Navbar className="me-auto light gap-1 nav-links nav col-12 col-md-auto mb-2 mr-5 justify-content-end mb-md-0">
            <Nav.Link href="#resorts">Home</Nav.Link>
            <Nav.Link href="#resorts">Resorts</Nav.Link>
          <Nav.Link href="#pricing">Backcountry Forum</Nav.Link>
          <Button variant="outline-light" onClick={isDarkMode}>
            {isDarkMode ? "App Light Mode" : "App Dark Mode"}
          </Button>
          </Navbar>
          </Container>
      </Container>
    </Navbar>
  );
}

export default NavB;
