import React from "react";
import "../css/Header.css";
import computer from "../images/computer.png";
import { Link } from "react-router-dom";

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
          <Link to={`about`}>
            <li>About Me</li>
          </Link>
          <li>Projects</li>
          <li>Experience</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
