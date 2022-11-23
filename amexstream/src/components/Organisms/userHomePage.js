import React, {Component} from "react";
import Header from "../Molecules/header";
import {UserMenu} from "../Molecules/userMenu";
import {VideoUpload} from "../Molecules/videoupload";
import './userHomePage.css'
export const UserHomePage=(props)=>{
  const upload=window.sessionStorage.getItem("upload");
    return(
    <div>
        <Header pick={props.pick}/>
        <div className="videoStyle">
        <UserMenu/>
        {upload=="yes"? (
                <div className="uploadStyle">
                <VideoUpload />
                </div>

        ):""}
        </div>
    </div>
)}
