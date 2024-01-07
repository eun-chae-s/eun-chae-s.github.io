import React from "react";
import wink from "../images/wink.png";
import "../css/Footer.css";
import { MdEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Typography } from "@mui/material";

export default function Footer() {
  return (
    <footer className="footer">
      <Typography className="sns">
        <a href="https://www.linkedin.com/in/eunchae-seong/">
          <FaLinkedin />
        </a>
      </Typography>
      <Typography className="sns">
        <a href="https://github.com/eun-chae-s">
          <FaGithub />
        </a>
      </Typography>
      <div className="footer-icon">
        <a href="https://velog.io/@eun-chae-s/posts">
          <img src={wink} alt="Avatar with Smile"></img>
        </a>
      </div>
      <Typography className="sns">
        <a href="mailto:sungeunchae@gmail.com">
          <MdEmail />
        </a>
      </Typography>
      <Typography className="sns">
        <a href="https://leetcode.com/Eunchae/">
          <SiLeetcode />
        </a>
      </Typography>
    </footer>
  );
}
