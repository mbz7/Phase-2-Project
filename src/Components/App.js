import React, { useState, useEffect } from "react";
// instead of writing out switch statement, you can use a switch component
import { Switch, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import Header from "./Header";
import ContainerList from "./ContainerList";
import { Button, Container, Row, Col, Navbar, Nav } from "react-bootstrap";

function App() {
  // sets dark mode on page render
  const [resorts, setResorts] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [search, setSearch] = useState("");
  // initial vote count is set at 0
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/resorts")
      .then((response) => response.json())
      .then((resorts) => setResorts(resorts));
  }, []);

  // handles dark mode switch
  function handleToggleLightMode() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  // handles like increment
  function handleLikesIncrement() {
    setLikes((likes) => likes + 1);
  }

  // handles like decrement
  function handleLikesDecrement() {
    setLikes((likes) => likes - 1);
  }

  return (
    <Container>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home">SkiBum®</Navbar.Brand>
          <Navbar className="me-auto">
            <Nav.Link href="#resorts">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Navbar>
        </Container>
      </Navbar>
      {/* <div className={isDarkMode ? "App Light" : "App Dark"}> */}
      <LoginForm />
      <Header
        isDarkMode={handleToggleLightMode}
        search={search}
        setter={setSearch}
      />

      <ContainerList
        resorts={resorts}
        search={search}
        likesPlus={handleLikesIncrement}
        likesMinus={handleLikesDecrement}
      />
      <Button>Test Button</Button>
      {/* </div> */}
    </Container>
  );
}

export default App;
