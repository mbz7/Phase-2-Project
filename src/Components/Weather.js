import React, {useState, useEffect} from "react";
import {
  Button,
  Card,
  Container,
  Image
} from "react-bootstrap";
import ResortList from "./ResortList";
function Weather({ weathers,
    weatherObj,
    setWeatherObj,
 }) {
      console.log({weathers})

    // icon={w.weather[0].icon}
    // clouds={w.clouds}
    // temp={w.main.temp}
    // feelTemp={w.main.feels_like}
    // pressure={w.main.pressure}
    // humidity={w.main.humidity}
    // sunset={w.sys.sunset}
    return (
   <Container className={"d-flex align-items-center justify-content-center"}>
        <Card className="mt-5" style={{ width: "75%" }}>
          <Card.Body>
            <Card.Title>
              <h3 className="text-uppercase mt-2">Current weather conditions{weatherObj}</h3>
            </Card.Title>
            <Card.Text>
              <div>
                <p></p>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    )
}
 


export default Weather;
