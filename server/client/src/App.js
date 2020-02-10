import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom'

import PrivateRoute from './App/Components/PrivateRoute'

import {
  Dashboard,
  Home,
  Login,
  Register
} from './App/Pages'

export default function App() {

  const [redirect, setRedirect] = useState(null)

  const redirectFunc = val => {
    setRedirect(val)
  }

  const logOut = () => {
    localStorage.removeItem('authToken')
    setRedirect('/login')
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Redirector redirect={redirect} setRedirect={redirectFunc} />
        <nav>
          <ul>
            <li><Link to='/' >Home</Link></li>
            <li><Link to='/dashboard' >Dashboard</Link></li>
            <li><Link to='/login' >Login</Link></li>
            <li><Link to='/register' >Register</Link></li>
            <li><button onClick={logOut} >Log Out</button></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <PrivateRoute redirect={redirectFunc} path='/dashboard'>
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute redirect={redirectFunc} reverse path='/login'>
            <Login redirect={redirectFunc}  />
          </PrivateRoute>
          <PrivateRoute redirect={redirectFunc} reverse path='/register'>
            <Register redirect={redirectFunc}  />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

function Redirector(props) {

  if(props.redirect){
    let redirect = props.redirect
    props.setRedirect(null)
    return (
      <Redirect to={redirect} />
    )
  } else {
    return (
      <></>
    )
  }
}
