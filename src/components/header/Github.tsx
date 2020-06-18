import React from "react";
import styled from "styled-components";

import { ReactComponent as GithubSVG } from "../../assets/svg/github.svg";

const SRoot = styled.a``;

const Github = () => {
  return (
    <SRoot title="Github" href="https://github.com/hommat">
      <GithubSVG />
    </SRoot>
  );
};

export default Github;
