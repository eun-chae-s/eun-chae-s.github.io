import React from "react";
import Header from "../components/Header";
import * as projects from "../data/projects.json";
import { Card, CardContent, Typography } from "@mui/material";

export default function Projects() {
  return (
    <div>
      <Header></Header>
      <div className="projects">
        {projects.entities.map((project) => (
          <Card>
            <CardContent>
              <Typography variant="h4" component="div">
                {project.title}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
