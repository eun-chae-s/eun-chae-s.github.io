import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import "../css/ProjectItem.css";

export default function ProjectItem({ project }) {
  return (
    <Card
      className="card"
      sx={{ minWidth: 350, minHeight: 350, borderRadius: 10 }}
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
  );
}
