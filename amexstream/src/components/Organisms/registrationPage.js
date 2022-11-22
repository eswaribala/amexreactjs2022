//stateless component

import React from "react";
import Header from "../Molecules/header";
import {LoginForm} from "../Molecules/loginForm";
import {RegistrationForm} from "../Molecules/registrationForm";

const RegistrationPage=(props)=>(

    <div>
       <Header pick={props.pick}/>
      <RegistrationForm/>
    </div>
)

export default RegistrationPage;
