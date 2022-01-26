import React from "react";
import LoginForm from "./LoginForm";
import Home from "./Home";
import { Button, Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";

function NavB({ title }) {
  return (
    <div>
      <h1>⛷ SkiBum® ⛷ </h1>
      <Navbar className="me-auto" bg="dark" variant="dark">
        <Container>
          <NavLink to="/Home" exact>
            Home
            {/* ⛷ {title} ⛷ */}
          </NavLink>
          <NavLink to="/resorts" exact>
            Resorts
          </NavLink>
          <NavLink to="/forum" exact>
            Backcountry Forum
          </NavLink>
          <br />
          <NavLink to="/table" exact>
            About
          </NavLink>
          <br />
          <NavLink to="/login" exact>
            👤
          </NavLink>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavB;
