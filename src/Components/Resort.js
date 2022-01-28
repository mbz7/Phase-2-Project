import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Accordion,
} from "react-bootstrap";
import Weather from "./Weather";

function Resort({
  name,
  city,
  website,
  image,
  groomed,
  runs,
  lifts,
 
  resortCity,
}) {
  const [weather, setWeather] = useState(null);
  const [showWeather, setShowWeather] = useState(false);
  // useEffect(() => {
  function getWeather() {
    if (weather === null) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${resortCity}&units=imperial&appid=aac56d8ba335e529dfa836fcfbfb5d1d`
      )
        .then((response) => response.json())
        .then((weather) => setWeather(weather));
    }
  }
  // }, []);
  return (
    <div>
      <Container className={"d-flex align-items-center justify-content-center"}>
        <Card
          className="mt-5 shadow-lg p-3 mb-5 bg-body rounded"
          style={{ width: "75%" }}
        >
          <Card.Img
            className={"resort-img ratio ratio-1x1"}
            variant="top"
            src={image}
            alt={name}
          />
          <Card.Body>
            <Row>
              <Card.Title>
                <h3 className="text-uppercase mt-2">{name}</h3>
              </Card.Title>
              <hr></hr>
              <Card.Text>
                <div className="col-4">
                  <b>{city}, CO</b>
                  <div>
                    <b>Machine Groomed: </b>
                    {groomed}"
                    <img src={`../resort-icons/machine-groomed.png`}></img>
                  </div>
                  <div>
                    <b>Runs Open: </b>
                    {runs}
                    <img src={`../resort-icons/runs.png`}></img>
                  </div>
                </div>
                <div className="col-4">
                  <div>
                    <b>Lifts Open: </b>
                    {lifts}
                    <img src={`../resort-icons/lifts.png`}></img>
                  </div>
                  <a href={website}>Link to Website</a>
                </div>
              </Card.Text>
            </Row>
          </Card.Body>
          <Button
            className="text-light weather-button "
            onClick={() => {
              setShowWeather(!showWeather);
              getWeather();
            }}
          >
            🌨 Click To Show Weather 🌨
          </Button>
          {showWeather ? <Weather weather={weather} /> : null}
          {/* <div onClick={() => getWeather}>
            <Accordion defaultActiveKey="false">
              <Accordion.Item eventKey="1">
                <Accordion.Header>Weather</Accordion.Header>
                <Accordion.Body>
                  <Weather weather={weather} />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div> */}
        </Card>
      </Container>
    </div>
  );
}

export default Resort;
