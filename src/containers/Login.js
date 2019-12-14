import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css";
import { Auth } from "aws-amplify";

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await Auth.signIn(email, password);
      props.hasLoggedIn(true);
      props.setLoggedEmail(email);
      props.history.push("/");
    } catch (error) {
      alert(error);
    }
  }

  const verifyFields = () => {
    return email.length > 0 && password.length > 0;
  };
  return (
    <div>
      <Form className="login-holder">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={e => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
            autoFocus
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button
          onClick={handleSubmit}
          disabled={!verifyFields()}
          variant="primary"
          type="submit"
        >
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
