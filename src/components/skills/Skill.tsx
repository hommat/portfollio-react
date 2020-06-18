import React from "react";

import { SSkill } from "./Skill.style";

type Props = {
  name: string;
  Svg: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
};

const Skill: React.FC<Props> = ({ name, Svg }) => {
  return (
    <SSkill>
      <Svg title={name} />
      <p>{name}</p>
    </SSkill>
  );
};

export default Skill;
