import React from "react";

import Skillset from "./Skillset";
import Skill from "./Skill";

import { ReactComponent as ReactSVG } from "../../assets/svg/react.svg";
import { ReactComponent as JavascriptSVG } from "../../assets/svg/js.svg";
import { ReactComponent as CssSVG } from "../../assets/svg/css.svg";
import { ReactComponent as HtmlSVG } from "../../assets/svg/html.svg";

const SkillsetConfident = () => {
  return (
    <Skillset heading="I feel confident in">
      <Skill name="React" Svg={ReactSVG} />
      <Skill name="Javascript" Svg={JavascriptSVG} />
      <Skill name="CSS" Svg={CssSVG} />
      <Skill name="HTML" Svg={HtmlSVG} />
    </Skillset>
  );
};

export default SkillsetConfident;
