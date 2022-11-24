//stateless component
import React from "react";
import Header from "../Molecules/header";
import {LoginForm} from "../Molecules/loginForm";
import CryptoJS from 'crypto-js'
const LandingPage=(props)=>{
    window.localStorage.setItem("loggedIn","false");
    window.localStorage.setItem("adminLoggedIn","false")
   /* var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123').toString();
    console.log(ciphertext);
    // Decrypt
    var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
    var originalText = bytes.toString(CryptoJS.enc.Utf8);

    console.log(originalText); // 'my message'
*/
    return(
        <div>
            <Header pick={props.pick}/>
            <LoginForm/>
        </div>
    )
}

export default LandingPage;
