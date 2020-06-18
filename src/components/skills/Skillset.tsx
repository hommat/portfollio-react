import React from "react";

import { SSkillset, SHeading, SList } from "./Skillset.style";

type Props = {
  heading: string;
};

const Skillset: React.FC<Props> = ({ heading, children }) => {
  return (
    <SSkillset>
      <SHeading>{heading}</SHeading>
      <SList>{children}</SList>
    </SSkillset>
  );
};

export default Skillset;
