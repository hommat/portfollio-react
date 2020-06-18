import React from "react";
import styled from "styled-components";

import Project from "./Project";
import { projects } from "../../projects";

const SProjects = styled.section``;

const SHeading = styled.h3``;

const SGrid = styled.div``;

const Projects = () => {
  return (
    <div className="container">
      <SProjects id="projects">
        <SHeading>Some of my projects</SHeading>
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
