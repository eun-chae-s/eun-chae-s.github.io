import React from "react";
import Header from "../components/Header";
import "../css/Projects.css";
import * as projects from "../data/projects.json";
import { Card, CardContent, Typography } from "@mui/material";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

export default function Projects() {
  return (
    <div>
      <Header></Header>
      <div className="projects">
        {projects.entities.map((project) => (
          <Card
            className="card"
            sx={{ minWidth: 400, minHeight: 400, borderRadius: 10 }}
          >
            <CardContent className="card-content" sx={{ gap: 3 }}>
              <Typography variant="h6" component="div">
                {project.title}
              </Typography>
              <Typography variant="body3" fontWeight={"bold"}>
                {project.tech}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
              <Typography className="links">
                <a href={project.github}>
                  <AiFillGithub size={40}></AiFillGithub>
                </a>
                {project.website && (
                  <a href={project.website}>
                    <AiOutlineLink size={40}></AiOutlineLink>
                  </a>
                )}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
