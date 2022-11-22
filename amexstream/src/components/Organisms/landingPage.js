//stateless component

import React from "react";
import Header from "../Molecules/header";
import {RegistrationForm} from "../Molecules/registrationForm";
import {LoginForm} from "../Molecules/loginForm";

const LandingPage=(props)=>(

    <div>
       <Header pick={props.pick}/>
       <LoginForm/>
    </div>
)

export default LandingPage;
