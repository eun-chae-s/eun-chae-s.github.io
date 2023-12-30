import React from "react";
import Header from "../components/Header";
import FadeIn from "react-fade-in/lib/FadeIn";
import "../css/Experience.css";
import ExperienceItem from "../components/ExperienceItem";
import * as experience from "../data/experience.json";
import Footer from "../components/Footer";

export default function Experience() {
  return (
    <div>
      <Header></Header>
      <div className="experience">
        <h2>My Journey</h2>
        <FadeIn className="experience-content">
          <div className="experience-left">
            {experience.entities.map((item, index) => {
              return index % 2 === 0 ? (
                <div className="left-box">
                  <ExperienceItem item={item} direction="left" />
                  <hr className="line"></hr>
                </div>
              ) : (
                <></>
              );
            })}
          </div>
          <div className="timeline"></div>
          <div className="experience-right">
            {experience.entities.map((item, index) => {
              return index % 2 !== 0 ? (
                <div className="right-box">
                  <hr className="line"></hr>
                  <ExperienceItem item={item} direction="right" />
                </div>
              ) : (
                <></>
              );
            })}
          </div>
        </FadeIn>
      </div>
      <Footer></Footer>
    </div>
  );
}
