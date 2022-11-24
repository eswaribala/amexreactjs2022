import React, {Component} from "react";
import Header from "../Molecules/header";
import {UserMenu} from "../Molecules/userMenu";
import {VideoUpload} from "../Molecules/videoupload";
import './userHomePage.css'
export const UserHomePage=(props)=>{
    window.localStorage.setItem("loggedIn","true");

    const loggedIn=window.localStorage.getItem("loggedIn");
    return(
    <div>


    </div>
)}
