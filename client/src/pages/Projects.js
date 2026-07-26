import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectItem from "../components/ProjectItem";
import FadeIn from "react-fade-in";
import "../css/Projects.css";
import * as projects from "../data/projects.json";
import * as competition from "../data/competition.json";
import * as research from "../data/research.json";

export default function Projects() {
  return (
    <div>
      <Header></Header>
      <div className="projects">
        <h2>Group & Individual</h2>
        <FadeIn className="projects-content">
          {projects.entities.map((project) => (
            <ProjectItem project={project}></ProjectItem>
          ))}
        </FadeIn>
        <h2>Competition</h2>
        <FadeIn className="projects-content">
          {competition.entities.map((project) => (
            <ProjectItem project={project}></ProjectItem>
          ))}
        </FadeIn>
        <h2>Research</h2>
        <FadeIn className="projects-content">
          {research.entities.map((project) => (
            <ProjectItem project={project}></ProjectItem>
          ))}
        </FadeIn>
      </div>
      <Footer></Footer>
    </div>
  );
}
