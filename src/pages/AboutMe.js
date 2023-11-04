import React from "react";
import smile from "../images/smile.png";
import Header from "../components/Header";
import "../css/AboutMe.css";
import { TiArrowDownThick } from "react-icons/ti";
import LinearProgress from "@mui/material/LinearProgress";
import { createTheme, ThemeProvider } from "@mui/material";
import * as stats from "../data/stats.json";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00b182",
      light: "#EDEDED",
    },
  },
});

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
        <div className="stats">
          {stats.entities.map((stat) => (
            <div className="stat-item">
              <ThemeProvider theme={theme}>
                <text>{stat.lang}</text>
                <LinearProgress
                  variant="determinate"
                  value={stat.value}
                  color="primary"
                  sx={{ height: "30px", width: "80%", borderRadius: 5 }}
                ></LinearProgress>
              </ThemeProvider>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
