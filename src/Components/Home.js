import React from "react";
import { Button, Container, Figure, Row, Col, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="bg-light">
      <Container
        fluid
        className="jumbotron home-jumbotron d-flex align-items-center justify-content-center"
      >
        <Container className="home-jumbotron-img d-flex align-items-center justify-content-center text-center">
          <Row>
            <Col className="col-lg-12 text-light jumbotron-text">
              <h1>Welcome To SkiBum®</h1>
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

      <div className="text-center pt-5">
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
        <Container className="mt-3 mb-3">
          <Row>
            <Col>
              <Figure>
                <Figure.Image
                  width={125}
                  height={125}
                  alt="skier-image"
                  src="/skier 1.png"
                  className="mb-3"
                />
              </Figure>
              <h2 className="mb-3">Where would you like to go?</h2>
              <hr className="w-80 mx-auto" />
            </Col>
          </Row>
        </Container>
        <Container className="d-flex align-items-center justify-content-center pt-2 pb-2 bg-light">
          <Row className="gap-5 pt-3">
            <Col>
              <Card border="primary" className="shadow-lg" style={{ width: "25rem" }}>
                <Card.Img
                  variant="top"
                  src="/skibum_home_resort-link_thumbnail.png"
                  alt="Card image"
                />
                <Card.Body>
                  <Card.Title>
                    <h3>Ski Resorts</h3>
                  </Card.Title>
                  <hr className="w-25 mx-auto" />
                  <Card.Text>
                    View a detailed list of ski resorts that includes snow
                    conditions, amount of runs, and the number of lifts on the
                    mountain.
                  </Card.Text>
                  <NavLink className="button-link" to="/resorts">
                    <Button variant="primary">Go to Resorts</Button>
                  </NavLink>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card border="warning" className="shadow-lg" style={{ width: "25rem" }}>
                <Card.Img
                  variant="top"
                  src="/skibum_home_backcountry-link_thumbnail.png"
                  alt="Card image"
                />
                <Card.Body>
                  <Card.Title>
                    <h3>Backcountry Forum</h3>
                  </Card.Title>
                  <hr className="w-25 mx-auto" />
                  <Card.Text>
                    A forum dedicated to those who enjoy going off the trail and
                    into the woods in remote and sometimes hidden locations.
                  </Card.Text>
                  <NavLink className="button-link" to="/forum">
                    <Button variant="primary">Go to Forum</Button>
                  </NavLink>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="d-flex align-items-center justify-content-center jumbotron mx-auto bg-info text-dark text-center pt-5 pb-5 mt-5" style={{ height: "20rem" }}>
        <div>
        <h4>Are you not entertained?</h4>
        <br></br>
        <Button className="btn btn-dark text-light">Contact Us</Button>
        </div>
        </div>

      <div className="jumbotron bg-white text-dark text-center pt-5 pb-5 mb-5 mt-5">
        <h3 className="mb-3 pb-3">OUR PARTNERS</h3>
        <hr className="w-25 mx-auto" />
        <br />
        <Container>
          <Row className="d-flex align-items-center justify-content-center mt-3 gap-3">
            <Col className="col-lg-2"><img
                src="/logosArtboard 1_1.jpg"
                className="img"
                alt="..."
                style={{ maxWidth: "10rem" }}
            /></Col>
            <Col className="col-lg-2"><img
                src="/logosArtboard 1_2.jpg"
                className="img"
                alt="..."
                style={{ maxWidth: "10rem" }}
            /></Col>
            <Col className="col-lg-2"><img
                src="/logosArtboard 1_3.jpg"
                className="img"
                alt="..."
                style={{ maxWidth: "10rem" }}
            /></Col>
            <Col className="col-lg-2"><img
                src="/logosArtboard 1_4.jpg"
                className="img"
                alt="..."
                style={{ maxWidth: "10rem" }}
            /></Col>
            <Col className="col-lg-2"><img
                src="/logosArtboard 1_5.jpg"
                className="img"
                alt="..."
                style={{ maxWidth: "10rem" }}
              /></Col>
            
            </Row>
        </Container>
      </div>
    </div>
  );
}

export default Home;
