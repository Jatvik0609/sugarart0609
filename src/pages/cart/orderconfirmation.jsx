import React from 'react'
import "./orderconfirmation.css";
import { useNavigate } from "react-router-dom";
import { InstagramLogo } from "phosphor-react";
import { FacebookLogo } from "phosphor-react";
import { YoutubeLogo } from "phosphor-react";
import { CheckCircle } from 'phosphor-react';

export default function Orderconfimation() {
    const navigate = useNavigate();
    return (
        <div className='order-main'>
            <div className='tq'>
                <div><CheckCircle size={32} color="#5fe4ce" weight="bold" /></div>
                <h1>Thank you for your purchase!</h1>
                <h5>The instructions and your access code will be emailed to you shortly.</h5>
            </div>
            <div className='innn'>
                <h6>You can access your account through this link, and you'll also be able to see
                    all the subscriptions and downloads linked to your accoun.</h6>
                <h6>in the meantime, we invite you to connect With us through social media!</h6>
                <div className='icons'>
                    <div><FacebookLogo size={24}></FacebookLogo></div>
                    <div><InstagramLogo size={24}></InstagramLogo></div>
                    <div><YoutubeLogo size={24}></YoutubeLogo></div>
                </div>
            </div>
            <div>
                <button onClick={() => navigate("/")}>Back to Home</button>
            </div>
        </div>
    )
}
