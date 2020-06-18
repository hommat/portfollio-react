import React from "react";

import { Project as ProjectProps } from "../../projects";
import { SProject, SDescription, SActions, SAction } from "./Project.style";

const Project: React.FC<ProjectProps> = ({
  image,
  liveHref,
  codeHref,
  description,
}) => {
  return (
    <SProject image={image}>
      <SDescription href={liveHref}>
        <p>{description}</p>
      </SDescription>
      <SActions>
        <SAction href={liveHref}>Live</SAction>
        <SAction href={codeHref}>Code</SAction>
      </SActions>
    </SProject>
  );
};

export default Project;
