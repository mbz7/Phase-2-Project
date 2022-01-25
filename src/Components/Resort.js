import React from "react";
import { Button, Card, Container, Row, Col, Navbar, Nav } from "react-bootstrap";

function Resort({ name, website, image, likes }) {
  return (
    <>
      <Container>
        <Card className="mt-5" style={{ width: "90%"}}>
          <Card.Img variant="top" src={image} alt={name} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button className="px-5" onClick={likes}>👍 Votes:</Button>
            <Button className="px-5 ml-1" onClick={likes}>👎 Votes:</Button>
            {/* <Button className="ml-5" variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      </Container>

      {/* <Container>
        <Row>
          <Col>
            <div className="resort-card">
              <a href={website}>{name}</a>
              <img src={image} alt={name} />
            </div>
          </Col>
          <Col>
            <button onClick={likes}>👍 Votes:</button>
            <button onClick={likes}>👎 Votes:</button>
          </Col>
        </Row>
      </Container> */}
    </>
  );
}

export default Resort;
