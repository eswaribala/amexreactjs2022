import React, {Component} from "react";
import Header from "../Molecules/header";

export const HomePage=(props)=>(
    <div>
        <Header pick={props.pick}/>
        <h1>Hi</h1>
    </div>
)
