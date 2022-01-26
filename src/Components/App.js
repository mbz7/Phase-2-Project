import React, { useState, useEffect } from "react";
// instead of writing out switch statement, you can use a switch component
import { Switch, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import Header from "./Header";
import ResortList from "./ResortList";
import NavB from "./NavB"
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
    <Container fluid className="bg-light">

      <NavB />
  
      <div className={isDarkMode ? "App Light" : "App Dark"}></div>
      <Header
        isDarkMode={handleToggleLightMode}
        search={search}
        setter={setSearch}
      />

      <ResortList
        resorts={resorts}
        search={search}
        likesPlus={handleLikesIncrement}
        likesMinus={handleLikesDecrement}
      />
    </Container>
  );
}

export default App;
