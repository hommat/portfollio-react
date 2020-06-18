import React from "react";

import { SNavigationItem, SLink } from "./NavigationItem.style";

type Props = {
  href: string;
  menuOpen: boolean;
};

const NavigationItem: React.FC<Props> = ({ href, menuOpen, children }) => {
  return (
    <SNavigationItem menuOpen={menuOpen}>
      <SLink href={href}>{children}</SLink>
    </SNavigationItem>
  );
};

export default NavigationItem;
