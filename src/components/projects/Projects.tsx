import React from "react";

import Project from "./Project";
import { SProjects, SGrid } from "./Projects.style";
import { projects } from "../../projects";

const Projects = () => {
  return (
    <div className="container">
      <SProjects className="section" id="projects">
        <h3 className="section__heading">Some of my projects</h3>
        <SGrid>
          {Object.keys(projects).map((key) => (
            <Project key={key} {...projects[key]} />
          ))}
        </SGrid>
      </SProjects>
    </div>
  );
};

export default Projects;
