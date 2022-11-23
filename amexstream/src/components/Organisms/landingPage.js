//stateless component

import React from "react";
import Header from "../Molecules/header";
import {LoginForm} from "../Molecules/loginForm";
window.sessionStorage.setItem("loggedIn","false");
const LandingPage=(props)=>(

    <div>
       <Header pick={props.pick}/>
       <LoginForm/>
    </div>
)

export default LandingPage;
