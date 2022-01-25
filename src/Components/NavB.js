import React from "react";
import LoginForm from "./LoginForm";
import Home from "./Home";
import { Button, Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { NavLink, BrowserRouter, Route, Switch } from "react-router-dom";

function NavB({ title }) {
  return (
    <div>
      <Navbar classname="me-auto" bg="light" variant="light">
        <Container>
          <NavLink to="/" exact>
            {title}
          </NavLink>
          <NavLink to="/forum" exact>
            Backcountry Forum
          </NavLink>
          <br />
          <NavLink to="/about" exact>
            About
          </NavLink>
          <br />
          <NavLink to="/login" exact>
            Login
          </NavLink>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavB;
