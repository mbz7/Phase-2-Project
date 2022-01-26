import React from "react";
import Search from "./Search";
import { Button, Container, Row, Col } from "react-bootstrap";

function Header({ search, setter }) {
  return (
    <header>
      <>
        <Container
          fluid
          className="jumbotron resort-jumbotron d-flex align-items-center justify-content-center"
        >
          <Container className="resort-jumbotron-img d-flex align-items-center justify-content-center text-center">
            <Row>
              <Col className="col-12 text-light jumbotron-text">
                <h1>Resorts</h1>
                <h3>
                  Search our list below to find the best resort
                </h3>
                <Button
                  variant="primary"
                  className={"header-button mt-4 btn-primary btn-lg"}
                >
                  Get Started
                </Button>
              </Col>
            </Row>
          </Container>
        </Container>
      </>
    </header>
  );
}

export default Header;
