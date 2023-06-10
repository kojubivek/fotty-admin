import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginStart, loginSuccess, loginFailure } from "../../redux/userSlice";
import "./login.css";
import { Button, Card, Form } from "react-bootstrap";
import { login } from "../../redux/apiCall";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    dispatch(login({ username, password })) && navigate("/home");
  };

  return (
    <div className="loginpage d-flex flex-grow-1  align-item-center">
      <div className="container ">
        <Card className="shadow " style={{ width: "50rem" }}>
          <Card.Header className="fs-2">Admin Login</Card.Header>
          <Card.Body>
            <Form onSubmit={handleOnSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <Form.Group className="mb-3 d-flex">
                <Button className="flex-grow-1" variant="dark" type="submit">
                  {" "}
                  Submit
                </Button>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Login;
