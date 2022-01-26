import React from "react";
import LoginForm from "./LoginForm";
import Home from "./Home";
import { Button, Container, Row, Col, Navbar } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Header from "./Header";

function NavB({ title, isDarkMode, onDarkModeClick }) {
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
            // href="#home"
          >
            <NavLink className={"nav-link"} to="/">
              <h4>⛷ SkiBum® ⛷ </h4>
            </NavLink>
          </Navbar.Brand>
          <Container>
            <Navbar
              className={
                "me-auto light gap-2 nav-links nav col-12 col-md-auto mb-2 mr-5 justify-content-end mb-md-0"
              }
            >
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
              <NavLink className={"nav-link"} to="/login">
                <Button to="/login" exact>
                  Login
                </Button>
              </NavLink>
              <Button variant="outline-dark" onClick={onDarkModeClick}>
                {isDarkMode ? "🌙" : "☀️"}
              </Button>
            </Navbar>
          </Container>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavB;
