// import React from "react";
// import './createid.css'
// import { Link } from "react-router-dom";

// export const Createid = () => {
//     return (
//         <div className="createid">
//             <div className="main">
//                 <input className="name" placeholder="Name"></input><br></br>
//                 <input className="ida" placeholder="Email"></input><br></br>
//                 <input className="passa" placeholder="Password"></input><br></br>
//                 <Link to="/"><button>Sign up</button></Link><br></br>
//                 <Link to="/login"><h2 className="createidtxt1">Log in</h2></Link>
//             </div>
//         </div>
//     );
// };



import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './createid.css';

export default function Createid() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [register, setRegister] = useState(false);
    const [emailExists, setEmailExists] = useState(false);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setEmailExists(false); // Reset emailExists state when email changes
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const configuration = {
            method: 'post',
            url: 'http://localhost:3000/register',
            data: {
                name,
                email,
                password,
            },
        };

        axios(configuration)
            .then((result) => {
                console.log(result);
                setRegister(true);
            })
            .catch((error) => {
                console.log(error);

                if (error.response && error.response.status === 409) {
                    setEmailExists(true);
                }
            });
    };

    return (
        <div className="createid">
            <div className="main">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input
                        className="name"
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        placeholder="Enter name"
                        onChange={handleNameChange}
                        required
                    />
                    <br></br>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        placeholder="Enter email"
                        onChange={handleEmailChange}
                        required
                    />
                    <br></br>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        onChange={handlePasswordChange}
                        required
                    />
                    <br></br>
                    <button type="submit">Register</button>
                </form>

                <Link to="/login">
                    <h1 className="createidtxt1">Log in</h1>
                </Link>

                {emailExists && (
                    <p className="text-danger">Email already exists. Please use a different email.</p>
                )}
                {/* {register ? (
                    <p className="text-success">You Are Registered Successfully</p>
                ) : (
                    <p className="text-danger">You Are Not Registered</p>
                )} */}
            </div>
        </div>
    );
}
