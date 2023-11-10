import React from "react";
import "../css/Header.css";
import computer from "../images/computer.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <NavLink to="/">
        <img
          className="home-icon"
          src={computer}
          alt="Avatar with Computer"
        ></img>
      </NavLink>

      <nav className="nav-bar">
        <ul>
          <NavLink to="/about">About Me</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/experience">Experience</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
