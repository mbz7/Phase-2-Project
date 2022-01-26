import React from "react";
import LoginForm from "./LoginForm";
import Home from "./Home";
import { Button, Container, Row, Col, Navbar } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";

function NavB({ title, isDarkMode }) {
  return (
    <div>
      <Navbar className={""} bg="dark" variant="dark">
        <Container
          className={
            "nav-container d-flex align-items-center justify-content-center justify-content-md-between"
          }
        >
          <Navbar.Brand
            className={"d-flex align-items-center justify-content-between"}
            href="#home"
          >
            <h4>⛷ SkiBum® ⛷ </h4>
          </Navbar.Brand>
          <Container>
            <Navbar className={"me-auto light gap-2 nav-links nav col-12 col-md-auto mb-2 mr-5 justify-content-end mb-md-0"}>
              <NavLink className={"nav-link"} to="/home">
                Home
              </NavLink>
              <NavLink className={"nav-link"} to="/resorts">
                Resorts
              </NavLink>
              <NavLink className={"nav-link"} to="/forum">
                Backcountry Forum
              </NavLink>
              <NavLink className={"nav-link"} to="/about">
                About Us
              </NavLink>
              <Button variant="outline-light" onClick={isDarkMode}>
                {isDarkMode ? "App Light Mode" : "App Dark Mode"}
              </Button>
              <hr />
              <Button to="/login" exact>
                Login
              </Button>
            </Navbar>
          </Container>

        </Container>
      </Navbar>
    </div>
  );
}

export default NavB;
