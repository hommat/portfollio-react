import React from "react";
import styled from "styled-components";

import NavigationItem from "./NavigationItem";

const SRoot = styled.nav``;

const SList = styled.ul``;

const Navigation = () => {
  return (
    <SRoot>
      <SList>
        <NavigationItem href="#skills">Skills</NavigationItem>
        <NavigationItem href="#projects">Projects</NavigationItem>
        <NavigationItem href="#contact">Contact</NavigationItem>
      </SList>
    </SRoot>
  );
};

export default Navigation;
