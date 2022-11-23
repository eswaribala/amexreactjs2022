import React, {Component} from "react";
import { TieredMenu } from 'primereact/tieredmenu';
import {items} from '../../assets/data/userMenuData'



export const UserMenu=()=>(
    <TieredMenu model={items} />
)
