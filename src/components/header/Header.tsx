import React from "react";

import Github from "./Github";
import { SHeader, SAuthor, SRole, SMedia } from "./Header.style";

const Header = () => {
  return (
    <SHeader>
      <SAuthor>Mateusz Ziomek</SAuthor>
      <SRole>Front-End Developer</SRole>
      <SMedia>
        <Github />
      </SMedia>
    </SHeader>
  );
};

export default Header;
