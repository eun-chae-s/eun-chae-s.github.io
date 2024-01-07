import React from "react";
import computer from "../images/computer.png";
import "../css/Homepage.css";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

function Homepage() {
  return (
    <div className="homepage">
      {/* Multiple text animation, resource: https://www.youtube.com/watch?v=nxoHR9lltK0 */}
      <div className="home-slide">
        <TypeAnimation
          className="home-introduce"
          sequence={[
            "Hi, I'm Rachel🤗",
            1000,
            "안녕하세요, 레이첼입니다🤗",
            1000,
            "你好，我是Rachel🤗",
            1000,
            "je m'appelle Rachel🤗",
            1000,
          ]}
          speed={150}
          repeat={Infinity}
        ></TypeAnimation>
      </div>
      <Link to={`about`}>
        <img
          className="home-img"
          src={computer}
          alt="Avatar with Computer"
        ></img>
      </Link>

      <Link to={`about`}>
        <text className="home-text">Click the icon to continue!</text>
      </Link>
    </div>
  );
}

export default Homepage;
