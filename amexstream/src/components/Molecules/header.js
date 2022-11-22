//stateless component

import React from "react";
import Logo from "../Atoms/logo";
import Banner from "../Atoms/banner";
import './header.css'
const Header=()=>(
    <div className="App-header">
        <Logo/>
        <h1 className="multicolortext">Video Streaming</h1>
        <Banner/>
    </div>
)

export default Header;
