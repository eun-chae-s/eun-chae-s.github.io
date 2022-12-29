import React from "react";
import computer from "../images/computer.png";
import "../css/Homepage.css";

function Homepage() {
  const textload = () => {
    setTimeout(() => {
      "Hi, I'm Rachel🤗";
      "안녕하세요, 레이첼입니다🤗";
      "你好，我是Rachel🤗";
      "Salut, je suis Rachel🤗";
    });
  };

  return (
    <div className="homepage">
      {/* Multiple text animation, resource: https://www.youtube.com/watch?v=nxoHR9lltK0 */}
      <div className="home-slide">
        <span className="home-introduce">"Hi, I'm Rachel🤗"</span>
      </div>
      <img
        className="home-img"
        src={computer}
        height="15%"
        width="15%"
        alt="Avatar with Computer"
      ></img>
      <text className="home-text">Click the icon to continue!</text>
    </div>
  );
}

export default Homepage;
