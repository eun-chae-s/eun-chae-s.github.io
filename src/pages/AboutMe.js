import React from "react";
import smile from "../images/smile.png";
import Header from "../components/Header";
import "../css/AboutMe.css";
import { TiArrowDownThick } from "react-icons/ti";

function AboutMe() {
  return (
    <div>
      <Header></Header>
      <div className="about-me">
        {/* fix the icon's position */}
        <img className="about-icon" src={smile} alt="Avatar with Smile"></img>
        <div className="about-text">
          A software engineer who wants to <b>contribute</b> to a society for{" "}
          <b>future generations</b>
        </div>
        <div className="scroll">
          <TiArrowDownThick color="#7cfcda" size={75}></TiArrowDownThick>
        </div>
        <div className="stats"></div>
      </div>
    </div>
  );
}

export default AboutMe;
