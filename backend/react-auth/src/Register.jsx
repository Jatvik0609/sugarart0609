import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [register, setRegister] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const configuration = {
      method: 'post',
      url: 'http://localhost:3000/register', // Remove the extra 'http://' from the URL
      data: {
        email,
        password,
      },
    };

    // make the API call
    axios(configuration)
      .then((result) => {
        console.log(result);
        setRegister(true);
      })
      .catch((error) => {
        console.log(error);
        error = new Error();
      });
  };

  return (
    <>
      <h2>Register</h2>
      <Form onSubmit={handleSubmit}>
        {/* email */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            placeholder="Enter email"
            onChange={handleEmailChange} // Add this line
          />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handlePasswordChange} // Add this line
          />
        </Form.Group>

        {/* submit button */}
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>

      <Link to="/login">
        <h1>Log in</h1>
      </Link>

      {register ? (
        <p className="text-success">You Are Registered Successfully</p>
      ) : (
        <p className="text-danger">You Are Not Registered</p>
      )}
    </>
  );
}
