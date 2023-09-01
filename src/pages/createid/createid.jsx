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
            url: 'http://localhost:3000/register',
            data: {
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
            });
    };

    return (
        <div className="createid">
            <div className="main">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    {/* email */}
                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Enter email"
                            onChange={handleEmailChange}
                        />
                    </div>

                    {/* password */}
                    <div>
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            placeholder="Password"
                            onChange={handlePasswordChange}
                        />
                    </div>

                    {/* submit button */}
                    <button type="submit">
                        Register
                    </button>
                </form>

                <Link to="/login">
                    <h1 className="createidtxt1">Log in</h1>
                </Link>

                {register ? (
                    <p style={{ color: 'green' }}>You Are Registered Successfully</p>
                ) : (
                    <p style={{ color: 'red' }}>You Are Not Registered</p>
                )}
            </div>
        </div>
    );
}
