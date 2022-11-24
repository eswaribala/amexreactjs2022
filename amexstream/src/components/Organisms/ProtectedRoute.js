import React from "react"
import { Navigate } from "react-router-dom";

export default function ProtectedRoute ({children}){
    const status = window.localStorage.getItem("loggedIn")
    if (status === "false") {
        return <Navigate to="/"/>
    }

    return children;

}
