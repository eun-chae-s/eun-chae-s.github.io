import React from "react";
import "../css/Header.css";
import computer from "../images/computer.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <img
        className="home-icon"
        src={computer}
        alt="Avatar with Computer"
        onClick={() => {}}
      ></img>
      <nav className="nav-bar">
        <ul>
          <NavLink to="/about">
            <li>About Me</li>
          </NavLink>
          <li>Projects</li>
          <li>Experience</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
