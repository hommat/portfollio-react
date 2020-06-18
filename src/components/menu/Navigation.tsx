import React from "react";

import NavigationItem from "./NavigationItem";
import { SNavigation, SList } from "./Navigation.style";

type Props = {
  menuOpen: boolean;
};

const Navigation: React.FC<Props> = ({ menuOpen }) => {
  return (
    <SNavigation menuOpen={menuOpen}>
      <SList menuOpen={menuOpen}>
        <NavigationItem menuOpen={menuOpen} href="#skills">
          Skills
        </NavigationItem>
        <NavigationItem menuOpen={menuOpen} href="#projects">
          Projects
        </NavigationItem>
        <NavigationItem menuOpen={menuOpen} href="#contact">
          Contact
        </NavigationItem>
      </SList>
    </SNavigation>
  );
};

export default Navigation;
