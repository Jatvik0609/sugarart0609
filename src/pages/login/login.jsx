// import React from "react";
// import './login.css'
// import { Link } from "react-router-dom";

// export const Login = () => {
//   return (
//     <div className="login">
//       <div className="main">
//         <input className="id" placeholder="Email"></input><br></br>
//         <input className="pass" placeholder="Password"></input><br></br>
//         <Link to="/"><button>Log in</button></Link><br></br>
//         <Link to="/createid"><h2 className="logintxt1">Create account</h2></Link>
//       </div>
//     </div >
//   );
// };



import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './login.css';

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
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        setLoginError(true); // Set login error on failed login
      });
  };

  return (
    <div className='login'>
      <div className='loginmain'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          {/* email */}
          <div className='emailll'>
            <label>Email</label>
            <input
              className='aaa'
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={handleEmailChange}
            />
          </div>

          {/* password */}
          <div className='passss'>
            <label>Password</label>
            <input
              className='bbb'
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={handlePasswordChange}
            />
          </div>

          {/* submit button */}
          <button type="submit">
            Login
          </button>
        </form>

        <Link to="/register">
          <h1 className='logintxt1'>Create Account</h1>
        </Link>

        {/* display login error */}
        {loginError && (
          <div>
            <p style={{ color: 'red' }}>Login Failed: Incorrect email or password</p>
          </div>
        )}

        {/* display success message */}
        {login && !loginError ? (
          <div>
            <p style={{ color: 'green' }}>You Are Logged in Successfully</p>
          </div>
        ) : (
          <p style={{ color: 'red' }}>You Are Not Logged in</p>
        )}
      </div>
    </div>
  );
}
