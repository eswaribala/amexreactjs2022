//stateless component

import React from "react";
import Logo from "../Atoms/logo";
import Banner from "../Atoms/banner";
import './header.css'
const Header=(props)=>(

    <div className="App-header">
        <Logo/>
        <h1 className="multicolortext">Video Streaming</h1>
        <h2>{props.pick.toLocaleTimeString()}</h2>
        <Banner/>
    </div>
)

export default Header;
