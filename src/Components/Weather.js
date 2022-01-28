import React, { useState, useEffect } from "react";
import { Button, Card, Container, Image } from "react-bootstrap";
import ResortList from "./ResortList";

function Weather({ weather }) {
  // clouds={weather.clouds}
  // temperature={weather.main.temp}
  // feelsLike={w.main.feels_like}
  // sunset={w.sys.sunset}
  if (weather === null) {
    return <h2>...Loading</h2>;
  }

  
  return (
    <Container >
      <Card className="mt-5" style={{ width: "75%" }}>
        <Card.Body className={'justify-content-center'}>
          <Card.Title>
            {/* <h3 className="tenpm run server
            xt-uppercase mt-2">{weather.clouds.all}</h3> */}
          </Card.Title>
          <Card.Text>
           
              <div className= 'd-flex justify-content-evenly'>
                <p >
                  <b>Current Temp:</b> {weather.main.temp} ℉
                </p>
                <p>
                  <b>Feels Like:</b> {weather.main.feels_like} ℉
                </p>
              </div>
              <div className="d-flex justify-content-center max-height max-width">
                <img src={`../weather-icons/${weather.weather[0].icon}.png`}></img>
              </div>
              <p className="d-flex justify-content-center ">
                {weather.weather[0].description.toUpperCase()}<br/>
                 </p>
                <p className="d-flex justify-content-center">
                Cloud Cover:{weather.clouds.all}%
                </p>
             
           
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Weather;
