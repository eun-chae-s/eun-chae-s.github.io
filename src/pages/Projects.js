import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectItem from "../components/ProjectItem";
import FadeIn from "react-fade-in";
import "../css/Projects.css";
import * as projects from "../data/projects.json";

export default function Projects() {
  return (
    <div>
      <Header></Header>
      <div className="projects">
        <h2>My Learning</h2>
        <FadeIn className="projects-content">
          {projects.entities.map((project) => (
            <ProjectItem project={project}></ProjectItem>
          ))}
        </FadeIn>
      </div>
      <Footer></Footer>
    </div>
  );
}
