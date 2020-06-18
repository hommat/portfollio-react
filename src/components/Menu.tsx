import React from "react";
import styled from "styled-components";

import Navigation from "./Navigation";

const SRoot = styled.div``;

const SHamburger = styled.div``;

const SHamburgerBar = styled.div``;

const Menu = () => {
  return (
    <SRoot>
      <SHamburger>
        <SHamburgerBar></SHamburgerBar>
      </SHamburger>
      <Navigation />
    </SRoot>
  );
};

export default Menu;
