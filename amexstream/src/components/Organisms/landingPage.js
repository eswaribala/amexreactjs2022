//stateless component

import React from "react";
import Header from "../Molecules/header";
import {LoginForm} from "../Molecules/loginForm";

const LandingPage=(props)=>{
    window.sessionStorage.setItem("loggedIn","false");
    window.localStorage.setItem("adminLoggedIn","false")

    return(
        <div>
            <Header pick={props.pick}/>
            <LoginForm/>
        </div>
    )
}

export default LandingPage;
