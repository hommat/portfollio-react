import React from "react";

import SkillsetConfident from "./SkillsetConfident";
import SkillsetFine from "./SkillsetFine";
import SkillsetBasics from "./SkillsetBasics";
import { SSkills, SGrid } from "./Skills.style";

const Skills = () => {
  return (
    <SSkills className="section container" id="skills">
      <h3 className="section__heading">My skills</h3>
      <SGrid>
        <SkillsetConfident />
        <SkillsetFine />
        <SkillsetBasics />
      </SGrid>
    </SSkills>
  );
};

export default Skills;
