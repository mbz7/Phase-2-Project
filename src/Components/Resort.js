import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  Navbar,
  Nav,
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
  latitude,
  longitude,
  weathers,
}) {
  const [weather, setWeather] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&appid=1bf6a58ea4dd5073cf1ea98128e22991`
  //   )
  //     .then((response) => response.json())
  //     .then((weather) => setWeather(weather));
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
              <Card.Title><h3 className="text-uppercase mt-2">{name}</h3></Card.Title>
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
            <Weather weathers={weather} />
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Resort;
