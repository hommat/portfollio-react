import styled from "../../styles/styled-components";

const menuCornerDistance = "30px";
const menuSize = "55px";
const menuHamburgetBarDistance = "9px";

export const SMenu = styled.div`
  z-index: 1;
  position: fixed;
  top: ${menuCornerDistance};
  right: ${menuCornerDistance};
  width: ${menuSize};
  height: ${menuSize};
  background: ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  box-shadow: ${(props) => props.theme.shadows.default};
`;

export const SHamburger = styled.div`
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  width: ${menuSize};
  height: ${menuSize};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
`;

export const SHamburgerBar = styled.div<{ menuOpen: boolean }>`
  position: relative;
  background: ${({ menuOpen, theme }) =>
    menuOpen ? theme.colors.primary : theme.colors.textWhite};

  transition: background-color ${({ theme }) => theme.transitionTimes.default}
    ease;

  &,
  &::before,
  &::after {
    width: 100%;
    height: 4px;
    border-radius: 5px;
  }

  &::before,
  &::after {
    background: ${({ theme }) => theme.colors.textWhite};
    content: "";
    position: absolute;
    transition: transform ${({ theme }) => theme.transitionTimes.default} ease,
      top ${({ theme }) => theme.transitionTimes.default}
        ${({ theme }) => theme.transitionTimes.default} ease;
  }

  &::before {
    top: ${menuHamburgetBarDistance};
    transform: rotateZ(0deg);
  }

  &::after {
    top: -${menuHamburgetBarDistance};
    transform: rotateZ(0deg);
  }

  ${({ menuOpen, theme }) =>
    menuOpen &&
    `
    &::before,
    &::after {
      transition: top ${theme.transitionTimes.default} ease,
        transform ${theme.transitionTimes.default} ${theme.transitionTimes.default} ease;
      top: 0;
    }
  
    &::before {
      transform: rotateZ(45deg);
    }
  
    &::after {
      transform: rotateZ(-45deg);
    }
  `}
`;
