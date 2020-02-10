import React from "react";
import { Route } from "react-router-dom"
import JWT from 'jsonwebtoken'

export default function PrivateRoute(props) {

  const verifyToken = () => {
    let authToken = localStorage.getItem("authToken")
    if (authToken) {
        authToken = authToken.substr(7)
        let decoded = JWT.decode(authToken)
        if (decoded && decoded.id) {
            return true
        } else {
            localStorage.removeItem("authToken")
            return false
        }
    } else {
        return false
    }
}

    if(verifyToken() && props.reverse) {
        props.redirect("/dashboard")
    } else if (!verifyToken() && !props.reverse) {
        props.redirect("/login")
    } else {
        return <Route {...props} >{props.children}</Route>
    }

  return (
    <>
    </>
  )
}