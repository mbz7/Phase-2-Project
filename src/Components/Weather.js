import React, { useState, useEffect } from "react";
import { Button, Card, Container, Image } from "react-bootstrap";
import ResortList from "./ResortList";
function Weather({ weather }) {
  console.log(weather)

  // icon={weather.weather[0].icon}
  // clouds={weather.clouds}
  // temperature={weather.main.temp}
  // feelsLike={w.main.feels_like}
  // sunset={w.sys.sunset}
if (weather === null) {
  return <h2>...Loading</h2>
}

  return (
    <Container className={"d-flex align-items-center justify-content-center"}>
      <Card className="mt-5" style={{ width: "75%" }}>
        <Card.Body>
          <Card.Title>
            {/* <h3 className="text-uppercase mt-2">{weather.clouds.all}</h3> */}
          </Card.Title>
          <Card.Text>
            <div>
              <p>Current Temp: {weather.main.temp} ℉</p>
              <p>Cloud Cover: {weather.clouds.all}%</p>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Weather;
