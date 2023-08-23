import React from "react";
import './createid.css'
import { Link } from "react-router-dom";

export const Createid = () => {
    return (
        <div className="createid">
            <div className="main">
                <input className="name" placeholder="Name"></input><br></br>
                <input className="ida" placeholder="Email"></input><br></br>
                <input className="passa" placeholder="Password"></input><br></br>
                <Link to="/"><button>Sign up</button></Link><br></br>
                <Link to="/login"><h2 className="createidtxt1">Log in</h2></Link>
            </div>
        </div>
    );
};