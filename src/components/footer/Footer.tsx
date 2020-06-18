import React from "react";
import styled from "styled-components";

const SRoot = styled.footer``;

const SAuthor = styled.a``;

const Footer = () => {
  return (
    <SRoot>
      Created by
      <SAuthor href="https://github.com/hommat">Mateusz Ziomek</SAuthor>
    </SRoot>
  );
};

export default Footer;
