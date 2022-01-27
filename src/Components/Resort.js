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
  weathers,
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
        <Card className="mt-5" style={{ width: "75%" }}>
          <Card.Img
            className={"resort-img ratio ratio-1x1"}
            variant="top"
            src={image}
            alt={name}
          />
          <Card.Body>
            <Card.Title>
              <h3 className="text-uppercase mt-2">{name}</h3>
            </Card.Title>
            <hr></hr>
            <b>{city}, CO</b>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
              <div>
                <b>Machine Groomed: </b>
                {groomed}"
              </div>
              <div>
                <b>Runs Open: </b>
                {runs}
              </div>
              <div>
                <b>Lifts Open: </b>
                {lifts}
              </div>
              <a href={website}>Link to Website</a>
            </Card.Text>
          </Card.Body>
          <Button
            onClick={() => {
              setShowWeather(!showWeather);
              getWeather();
            }}
          >
            Show Weather
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
