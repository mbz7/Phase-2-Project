import React, { useState, useEffect } from "react";
import Table from "./TableList";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import { Auth } from "aws-amplify";

function Login() {
  const [time, setTime] = useState(new Date());
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  // displays current time; kills it when you're not in the component
  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  }, []);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <h5>{time.toString()} </h5>
      <div className="pt-5 mt-5 pb-5 mb-5 w-50 mx-auto">
        <Form
          className="mb-3"
          controlId="formBasicEmail"
          onSubmit={handleSubmit}
        >
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}
// }

export default Login;
