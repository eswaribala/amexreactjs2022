import React, {Component} from "react";
import Header from "../Molecules/header";

export const UserHomePage=(props)=>(
    <div>
        <Header pick={props.pick}/>
        <h1>Hi User!!</h1>
    </div>
)
