import React, {Component} from "react";
import { TieredMenu } from 'primereact/tieredmenu';
import {items} from '../../assets/data/userMenuData'
import './userMenu.css'


export const UserMenu=()=>(
    <div className="menu" >
    <TieredMenu model={items} />
    </div>
)
