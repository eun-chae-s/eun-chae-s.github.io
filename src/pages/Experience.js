import React from "react";
import Header from "../components/Header";
import "../css/Experience.css";
import ExperienceItem from "../components/ExperienceItem";
import * as experience from "../data/experience.json";

export default function Experience() {
  return (
    <div>
      <Header></Header>
      <div className="experience">
        <h2>My Journey</h2>
        <div className="experience-content">
          <div className="experience-left">
            {experience.entities.map((item, index) => {
              return index % 2 === 0 ? <ExperienceItem /> : <></>;
            })}
          </div>
          <hr className="timeline"></hr>
          <div className="experience-right">
            {experience.entities.map((item, index) => {
              return index % 2 !== 0 ? <ExperienceItem /> : <></>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
