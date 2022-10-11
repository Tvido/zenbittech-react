import React from 'react'
import { NavLink } from 'react-router-dom';
import smile from "../../assets/smile_2.png"

export const NavBar = () => {
  return (
    <header className="AppBar">
      <nav>
        <NavLink
          exact="true"
          to="/"
        >
          <img src={smile} className="App-logo " alt="logo" />
        </NavLink>

        <NavLink to="/" >
          Main
        </NavLink>

        <NavLink to="/feedback" >
          Feedback
        </NavLink>
      </nav>
    </header>)
}
