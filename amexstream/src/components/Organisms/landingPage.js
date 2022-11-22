//stateless component

import React from "react";
import Header from "../Molecules/header";
import {RegistrationForm} from "../Molecules/registrationForm";

const LandingPage=(props)=>(

    <div>
       <Header pick={props.pick}/>
        <RegistrationForm/>
    </div>
)

export default LandingPage;
