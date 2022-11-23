import React, {Component} from "react";

import { TabMenu } from 'primereact/tabmenu';
import {adminMenuItems} from "../../assets/data/adminMenuData";


export const AdminMenu=()=>(
    <TabMenu model={adminMenuItems} />
)
