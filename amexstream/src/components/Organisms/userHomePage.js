import React, {Component} from "react";
import Header from "../Molecules/header";
import {UserMenu} from "../Molecules/userMenu";
import {VideoUpload} from "../Molecules/videoupload";

export const UserHomePage=(props)=>{
  const upload=window.sessionStorage.getItem("upload");
    return(
    <div>
        <Header pick={props.pick}/>
        <UserMenu/>
        {upload=="yes"? (
            <>
                <VideoUpload/>
            </>
        ):""}

    </div>
)}
