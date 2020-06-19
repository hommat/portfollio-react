import React from "react";

import Github from "./Github";
import { SHeader, SAuthor, SRole, SMedia } from "./Header.style";

const Header = () => {
  return (
    <SHeader>
      <SAuthor data-aos="fade-down" data-aos-delay={150}>
        Mateusz Ziomek
      </SAuthor>
      <SRole data-aos="fade-top" data-aos-delay={450}>
        Front-End Developer
      </SRole>
      <SMedia data-aos="zoom-in" data-aos-delay={750}>
        <Github />
      </SMedia>
    </SHeader>
  );
};

export default Header;
