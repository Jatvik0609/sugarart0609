import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './createid.css';

export default function Createid() {
    const history = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: ""
    });

    const handleInputs = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const PostData = async (e) => {
        e.preventDefault();

        const { name, email, password, cpassword } = user;

        if (!name || !email || !password || !cpassword) {
            window.alert("Fields required!");
            return;
        }
        else {

            const res = await fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, password, cpassword
                })
            });

            const data = await res.json();

            if (data.error) {
                // window.alert("Invalid Registration!");
                console.log("Invalid Registration!");
                window.alert(data.error);
            }
            else {
                window.alert("Registration Successful!");
                console.log("Registration Successful!");
                history("/login");
            }
        }
    }

    return (
        <div className="createid">
            <div className="main">
                <h2>Register</h2>
                <form method='POST'>
                    <label htmlFor="name" className='snameee'>Name</label>
                    <input
                        className="name"
                        type="text"
                        id="name"
                        name="name"
                        // value={name}
                        value={user.name} onChange={handleInputs}
                        placeholder="Enter name"
                        // onChange={handleNameChange}
                        required
                    />
                    <br></br>
                    <label htmlFor="email" className='semailll'>Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        // value={email}
                        value={user.email} onChange={handleInputs}
                        placeholder="Enter email"
                        // onChange={handleEmailChange}
                        required
                    />
                    <br></br>
                    <label htmlFor="password" className='spassssword'>Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        // value={password}
                        value={user.password} onChange={handleInputs}
                        placeholder="Password"
                        // onChange={handlePasswordChange}
                        required
                    />
                    <br></br>
                    <label htmlFor="password" className='spassssword'>cPassword</label>
                    <input
                        type="password"
                        id="cpassword"
                        name="cpassword"
                        // value={password}
                        value={user.cpassword} onChange={handleInputs}
                        placeholder="cPassword"
                        // onChange={handlePasswordChange}
                        required
                    />
                    <br></br>
                    {/* <button type="submit">Register</button> */}
                    <input type='submit' name='signup' value="register" onClick={PostData}></input>
                </form>

                <Link to="/login">
                    <h1 className="createidtxt1">Log in</h1>
                </Link>

                {/* {emailExists && (
                    <p className="text-danger">Email already exists. Please use a different email.</p>
                )}
                {register ? (
                    <p className="text-success">You Are Registered Successfully</p>
                ) : (
                    <p className="text-danger">You Are Not Registered</p>
                )} */}
            </div>
        </div>
    );
}
