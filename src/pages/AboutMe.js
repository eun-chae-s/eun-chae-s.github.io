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
          A software engineer who wants to <b>contribute</b> to a society for{" "}
          <b>future generations</b>
        </div>
        <div className="scroll"></div>
      </div>
    </div>
  );
}

export default AboutMe;
