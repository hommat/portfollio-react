import React from "react";
import styled from "styled-components";

type Props = {
  heading: string;
};

const SRoot = styled.div``;

const SHeading = styled.h4``;

const SList = styled.ul``;

const Skillset: React.FC<Props> = ({ heading, children }) => {
  return (
    <SRoot>
      <SHeading>{heading}</SHeading>
      <SList>{children}</SList>
    </SRoot>
  );
};

export default Skillset;
