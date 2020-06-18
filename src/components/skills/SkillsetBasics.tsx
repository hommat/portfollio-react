import React from "react";

import Skillset from "./Skillset";
import Skill from "./Skill";

import { ReactComponent as WebpackSVG } from "../../assets/svg/webpack.svg";
import { ReactComponent as GitSVG } from "../../assets/svg/git.svg";
import { ReactComponent as NodeSVG } from "../../assets/svg/node.svg";

const SkillsetBasics = () => {
  return (
    <Skillset heading="I know basics of">
      <Skill name="Webpack" Svg={WebpackSVG} />
      <Skill name="Git" Svg={GitSVG} />
      <Skill name="Node" Svg={NodeSVG} />
    </Skillset>
  );
};

export default SkillsetBasics;
