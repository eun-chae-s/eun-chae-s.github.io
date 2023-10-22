import React from "react";
import smile from "../images/smile.png";
import Header from "../components/Header";
import "../css/AboutMe.css";

function AboutMe() {
  return (
    <div>
      <Header></Header>
      <div className="about-me">
        <img className="about-icon" src={smile} alt="Avatar with Smile"></img>
        <div className="about-text">
          Someone who wants to make a better society
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
