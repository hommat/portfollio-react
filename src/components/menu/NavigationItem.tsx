import React from "react";
import styled from "styled-components";

type Props = {
  href: string;
};

const SRoot = styled.li``;

const SLink = styled.a``;

const NavigationItem: React.FC<Props> = ({ href, children }) => {
  return (
    <SRoot>
      <SLink href="#skills">{children}</SLink>
    </SRoot>
  );
};

export default NavigationItem;
