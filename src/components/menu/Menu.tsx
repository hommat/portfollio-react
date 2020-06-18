import React, { useState } from "react";

import Navigation from "./Navigation";
import { SMenu, SHamburger, SHamburgerBar } from "./Menu.style";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenuOpen() {
    setMenuOpen(!menuOpen);
  }

  return (
    <SMenu>
      <SHamburger onClick={toggleMenuOpen}>
        <SHamburgerBar menuOpen={menuOpen}></SHamburgerBar>
      </SHamburger>
      <Navigation menuOpen={menuOpen} />
    </SMenu>
  );
};

export default Menu;
