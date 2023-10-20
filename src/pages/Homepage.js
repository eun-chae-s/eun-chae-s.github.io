import React, { useEffect, useState } from "react";
import computer from "../images/computer.png";
import "../css/Homepage.css";
import { Link } from "react-router-dom";

function Homepage() {
  const greetings = [
    "Hi, I'm Rachel🤗",
    "안녕하세요, 레이첼입니다🤗",
    "你好，我是Rachel🤗",
    "je m'appelle Rachel🤗",
  ];

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => (index === 3 ? 0 : index + 1)),
      3000
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="homepage">
      {/* Multiple text animation, resource: https://www.youtube.com/watch?v=nxoHR9lltK0 */}
      <div className="home-slide">
        <span className="home-introduce">{greetings[index]}</span>
      </div>
      <img
        className="home-img"
        src={computer}
        alt="Avatar with Computer"
        onClick={() => {}}
      ></img>
      <Link to={`about`}>
        <text className="home-text">Click the icon to continue!</text>
      </Link>
    </div>
  );
}

export default Homepage;
