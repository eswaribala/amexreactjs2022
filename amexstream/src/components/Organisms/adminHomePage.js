import React, {Component} from "react";
import Header from "../Molecules/header";
import {AdminMenu} from "../Molecules/adminMenu";

export const AdminHomePage=(props)=>(
    <div>
        <Header pick={props.pick}/>
        <AdminMenu/>
    </div>
)
