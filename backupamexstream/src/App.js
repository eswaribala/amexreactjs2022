import logo from './logo.svg';
import './App.css';
import {Component} from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Routes} from "react-router";

import LandingPage from './components/Organisms/LandingPage'
import LoginPage from './components/Organisms/LoginPage'
import RegisterPage from './components/Organisms/RegisterPage'
import ForgetPasswordPage from './components/Organisms/ForgetPasswordPage'
import HomePage from './components/Organisms/HomePage'



export default function App() {
    return (
        <Router>
        <Routes>
            <Route exact path="/" element={<LoginPage/>}/>
           <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/forget-password" element={<ForgetPasswordPage/>}/>
            <Route path="/home" element={<HomePage/>}/>


        </Routes>
        </Router>
    )
}



