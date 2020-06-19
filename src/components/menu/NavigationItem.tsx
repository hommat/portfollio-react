import React from "react";

import { SNavigationItem, SLink } from "./NavigationItem.style";

type Props = {
  href: string;
};

const NavigationItem: React.FC<Props> = ({ href, children }) => {
  return (
    <SNavigationItem>
      <SLink href={href}>{children}</SLink>
    </SNavigationItem>
  );
};

export default NavigationItem;
