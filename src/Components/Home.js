import React from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";

function Home() {
  return (
    <div className="bg-light">
      <Container
        fluid
        className="jumbotron home-jumbotron d-flex align-items-center justify-content-center"
      >
        <Container className="home-jumbotron-img d-flex align-items-center justify-content-center text-center">
          <Row>
            <Col className="col-12 text-light jumbotron-text">
              <h1>Welcome To SkiBum</h1>
              <h3>
                We want to help you find the best location to enjoy your skiing
                or snowboarding!
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

      <div className=" text-center pt-5 ">
        {/* <Row>
            <Col>
              <Card className="bg-dark text-white col-6 text-center">
              <Card.Img className={ "home-card-image img img-fluid"} src="https://images.pexels.com/photos/352093/pexels-photo-352093.jpeg?cs=srgb&dl=pexels-daniel-frank-352093.jpg&fm=jpg" alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
            </Row> */}
        <Container>
          <Row>
            <Col>
              <h3>Where would you like to go?</h3>
              <hr />
            </Col>
          </Row>
        </Container>
        <Container
          fluid
          className="d-flex align-items-center justify-content-center pt-2 pb-2"
        >
          <Row className="gap-5 pt-3">
            <Col>
              <Card border="primary" style={{ width: "25rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.pexels.com/photos/352093/pexels-photo-352093.jpeg?cs=srgb&dl=pexels-daniel-frank-352093.jpg&fm=jpg"
                  alt="Card image"
                />
                <Card.Body>
                  <Card.Title>Resorts</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card border="warning" style={{ width: "25rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.pexels.com/photos/352093/pexels-photo-352093.jpeg?cs=srgb&dl=pexels-daniel-frank-352093.jpg&fm=jpg"
                  alt="Card image"
                />
                <Card.Body>
                  <Card.Title>Backcountry Forum</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="jumbotron bg-dark text-light text-center pt-5 pb-5 mt-5">
        <h4>Do you still need more information?</h4>
        <br ></br>
        {/* <h5>Reach Out To Us</h5> */}
        <Button>Contact Us</Button>
      </div>
    </div>
  );
}

export default Home;
