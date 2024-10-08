import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './login.css';
import { ShopContext } from "../../context/shopcontext";

export default function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('/signin', {
        email,
        password
      });

      if (res.status === 200) {
        window.alert("Login Successful!");
        console.log(res)
        localStorage.setItem('token', res.data.token)
        navigate("/");
      } else {
        window.alert("Invalid Email & Password!");
      }
    } catch (error) {
      console.error("Error:", error);
      window.alert("An error occurred during login.");
    }
  }


  return (
    <div className='login'>
      <div className='loginmain'>
        <h2>Login</h2>
        <form method="POST" onSubmit={loginUser}>
          <div className='emailll'>
            <label>Email</label>
            <input
              className='aaa'
              type="email"
              name="email"
              value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>

          <div className='passss'>
            <label>Password</label>
            <input
              className='bbb'
              type="password"
              name="password"
              value={password} onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>

          <button type="submit">
            Login
          </button>
        </form>

        <Link to="/register">
          <h1 className='logintxt1'>Create Account</h1>
        </Link>
      </div>
    </div>
  );
}
