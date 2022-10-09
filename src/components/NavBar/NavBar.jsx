import React from 'react'
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <header className="AppBar">
<nav>
      <NavLink
        exact="true"
        to="/"
      >
        <img src="" className="App-logo" alt="logo" />
      </NavLink>

      <NavLink to="/main" >
        Main
      </NavLink>

      <NavLink to="/feedback" >
        Feedback
      </NavLink>
    </nav>    </header>)
}
