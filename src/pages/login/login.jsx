import React from "react";
import './login.css'
import { Link } from "react-router-dom";

export const Login = () => {
    return (
        <div className="login">
            <div className="main">
                <input className="id" placeholder="Email"></input><br></br>
                <input className="pass" placeholder="Password"></input><br></br>
                <Link to="/"><button>Log in</button></Link><br></br>
                <Link to="/createid"><h2 className="logintxt1">Create account</h2></Link>
            </div>
        </div >
    );
};