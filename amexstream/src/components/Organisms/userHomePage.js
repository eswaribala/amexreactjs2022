import React, {Component} from "react";
import Header from "../Molecules/header";
import {UserMenu} from "../Molecules/userMenu";

export const UserHomePage=(props)=>(
    <div>
        <Header pick={props.pick}/>
        <UserMenu/>
    </div>
)
