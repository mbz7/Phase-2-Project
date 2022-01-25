import React from "react";
import Search from "./Search";
import { Button, Container, Jumbotron } from "react-bootstrap";

function Header({  search, setter }) {
  return (
    <header>
      
      <>
        <Container fluid className="jumbotron">
          <Container>
            
            <h1>Fluid jumbotron !</h1>
            <p>
              This is a modified fluid jumbotron which stretches the whole
              horizontal space.
            </p>
            <Button variant="primary">Primary Button</Button>
            <Search search={search} setter={setter} />
          </Container>
        </Container>
      </>
    </header>
  );
}

export default Header;
