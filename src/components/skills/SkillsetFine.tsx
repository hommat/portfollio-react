import React from "react";

import Skillset from "./Skillset";
import Skill from "./Skill";

import { ReactComponent as TypescriptSVG } from "../../assets/svg/ts.svg";
import { ReactComponent as ReduxSVG } from "../../assets/svg/redux.svg";
import { ReactComponent as SassSVG } from "../../assets/svg/sass.svg";
import { ReactComponent as MaterialUiSVG } from "../../assets/svg/mui.svg";

const SkillsetFine = () => {
  return (
    <Skillset heading="I feel fine in">
      <Skill name="Typescript" Svg={TypescriptSVG} />
      <Skill name="Redux" Svg={ReduxSVG} />
      <Skill name="Sass" Svg={SassSVG} />
      <Skill name="Material UI" Svg={MaterialUiSVG} />
    </Skillset>
  );
};

export default SkillsetFine;
