import React from "react";
import LoginForm from "./LoginForm";
import { Button, Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";

function NavB({ isDarkMode }) {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">SkiBum®</Navbar.Brand>
          <Navbar className="me-auto">
            <Nav.Link href="#forum">Backcountry Forum</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#resorts">Login</Nav.Link>
            <LoginForm />
          </Navbar>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavB;
