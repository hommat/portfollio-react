import React from "react";
import styled from "styled-components";

import Github from "./Github";

const SRoot = styled.header``;

const SAuthor = styled.h1``;

const SRole = styled.h4``;

const SMedia = styled.div``;

const Header = () => {
  return (
    <SRoot>
      <SAuthor>Mateusz Ziomek</SAuthor>
      <SRole>Front-End Developer</SRole>
      <SMedia>
        <Github />
      </SMedia>
    </SRoot>
  );
};

export default Header;
