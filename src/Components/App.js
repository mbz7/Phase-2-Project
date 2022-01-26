import React, { useState, useEffect } from "react";
// instead of writing out switch statement, you can use a switch component
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import ResortList from "./ResortList";
import NavB from "./NavB";
import Login from "./LoginForm";
import About from "./TableList";
import Home from "./Home";
import Forum from "./Forum";
import { Container } from "react-bootstrap";

function App() {
  // sets dark mode on page render
  const [resorts, setResorts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/resorts")
      .then((response) => response.json())
      .then((resorts) => setResorts(resorts));
  }, []);

  return (
    <div>
      <Container fluid>
        <NavB title="SkiBum®" />
        <Switch>
          <Route path="/forum">
            <Forum resorts={resorts} />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/resorts">
            {/* <Header search={search} setter={setSearch} /> */}
            <ResortList resorts={resorts} search={search} />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
