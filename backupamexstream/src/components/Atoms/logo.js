import React from "react";

import LogoPath from '../../assets/images/amexlogo.png'
import './logo.css'

//stateless component
const Logo=()=>(
    <img src={LogoPath} className="logoStyle" />
)

export default Logo;
