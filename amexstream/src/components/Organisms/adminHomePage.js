import React, {Component} from "react";
import Header from "../Molecules/header";

export const AdminHomePage=(props)=>(
    <div>
        <Header pick={props.pick}/>
        <h1>Hi Admin!!</h1>
    </div>
)
