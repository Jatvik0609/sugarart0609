import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);
  const [loginError, setLoginError] = useState(false); // New state for login error
  const navigate = useNavigate();

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
      url: 'http://localhost:3000/login',
      data: {
        email,
        password,
      },
    };

    axios(configuration)
      .then((result) => {
        console.log(result);
        setLogin(true);
        setLoginError(false); // Clear login error on successful login
        navigate('/home');
      })
      .catch((error) => {
        console.log(error);
        setLoginError(true); // Set login error on failed login
      });
  };

  // Redirect to "/home" if login is true
  // if (login) {
  //   window.location.href = '/home';
  // }

  return (
    <>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        {/* email */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            placeholder="Enter email"
            onChange={handleEmailChange}
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
            onChange={handlePasswordChange}
          />
        </Form.Group>


        {/* submit button */}
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>

      <Link to="/register">
        <h1>create account</h1>
      </Link>

      {/* display login error */}
      {loginError && (
        <div>
          <p className="text-danger">Login Failed: Incorrect email or password</p>
        </div>
      )}

      {/* display success message */}
      {login && !loginError ? (
        <div>
          <p className="text-success">You Are Logged in Successfully</p>
        </div>
      ) : (
        <p className="text-danger">You Are Not Logged in</p>
      )}
    </>
  );
}
