import React from "react";
import styled from "styled-components";

import SkillsetConfident from "./SkillsetConfident";
import SkillsetFine from "./SkillsetFine";
import SkillsetBasics from "./SkillsetBasics";

const SRoot = styled.section``;

const SHeading = styled.h3``;

const SGrid = styled.div``;

const Skills = () => {
  return (
    <SRoot id="skills">
      <SHeading>My skills</SHeading>
      <SGrid>
        <SkillsetConfident />
        <SkillsetFine />
        <SkillsetBasics />
      </SGrid>
    </SRoot>
  );
};

export default Skills;
