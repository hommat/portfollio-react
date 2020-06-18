import React from "react";
import styled from "styled-components";

type Props = {
  name: string;
  Svg: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
};

const SRoot = styled.li``;

const SName = styled.p``;

const Skill: React.FC<Props> = ({ name, Svg }) => {
  return (
    <SRoot>
      <Svg title={name} />
      <SName>{name}</SName>
    </SRoot>
  );
};

export default Skill;
