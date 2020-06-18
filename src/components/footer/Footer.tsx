import React from "react";

import { SFooter, SAuthor } from "./Footer.style";

const Footer = () => {
  return (
    <SFooter>
      Created by{" "}
      <SAuthor href="https://github.com/hommat">Mateusz Ziomek</SAuthor>
    </SFooter>
  );
};

export default Footer;
