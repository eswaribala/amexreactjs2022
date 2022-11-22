import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

import BackgroundImage from '../../assets/images/amexlogo.png'
import Logo from "../Atoms/logo";
import Banner from "../Atoms/banner";

export default function LandingPage() {
    return (
        <div>
            <header className="App-header">
                <Logo/>
                <h1 className="multicolortext">Amex Streaming</h1>
                <Banner/>

            </header>
        <article className="header">
            <h1>Login / Register</h1>

            <div className="buttons text-center">
                <Link to="/login">
                    <button className="primary-button">Login</button>
                </Link>
                <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>Register </span></button>
                </Link>
            </div>
        </article>
        </div>
    )
}


