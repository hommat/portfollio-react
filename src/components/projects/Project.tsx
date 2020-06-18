import React from "react";
import styled from "styled-components";

import { Project as ProjectProps } from "../../projects";

const SRoot = styled.div<{ image: string }>`
  background-image: ${(props) => `url(${props.image})`};
`;

const SDescription = styled.a``;

const SActions = styled.div``;

const SAction = styled.a``;

const Project: React.FC<ProjectProps> = ({
  image,
  liveHref,
  codeHref,
  description,
}) => {
  return (
    <SRoot image={image}>
      <SDescription href={liveHref}>
        <p>{description}</p>
      </SDescription>
      <SActions>
        <SAction href={liveHref}>Live</SAction>
        <SAction href={codeHref}>Code</SAction>
      </SActions>
    </SRoot>
  );
};

export default Project;
