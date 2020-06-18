import React from "react";

import { ReactComponent as GithubSVG } from "../../assets/svg/github.svg";
import { SGithub } from "./Github.style";

const Github = () => {
  return (
    <SGithub title="Github" href="https://github.com/hommat">
      <GithubSVG />
    </SGithub>
  );
};

export default Github;
