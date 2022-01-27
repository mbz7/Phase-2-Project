import React, {useState, useEffect} from "react";
import {
  Button,
  Card,
  Container,
  Image
} from "react-bootstrap";
function Weather({  weathers,
    weatherObj,
    setWeatherObj,
    icon,
    clouds,
    temp,
    feelTemp,
    pressure,
    humidity,
    sunset }) {
  
    return (
   <Container className={"d-flex align-items-center justify-content-center"}>
        <Card className="mt-5" style={{ width: "75%" }}>
          <Image source={require(`./src/img2/${icon}.png`)}/>
          <Card.Body>
            <Card.Title>
              <h3 className="text-uppercase mt-2">Current weather conditions</h3>
            </Card.Title>
            <Card.Text>
              <div>
                <p>{clouds}</p>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    )
}
 

  
export default Weather;
