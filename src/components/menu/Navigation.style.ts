import styled from "../../styles/styled-components";

const navigationSize = 320;

export const SNavigation = styled.nav<{ menuOpen: boolean }>`
  position: fixed;
  right: -${navigationSize}px;
  top: -${navigationSize}px;
  width: ${navigationSize * 2}px;
  height: ${navigationSize * 2}px;
  transform: scale(0);
  background: ${({ theme }) => theme.colors.primary};
  transition: ${({ theme }) => theme.transitionTimes.default};
  border-bottom-left-radius: 50%;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.default};

  ${({ menuOpen, theme }) =>
    menuOpen &&
    `
     transition: transform ${theme.transitionTimes.default} ease-in-out;
     transform: scale(1);
  `}
`;

export const SList = styled.ul<{ menuOpen: boolean }>`
  font-size: 1.6rem;
  text-align: center;
  opacity: 0;
  position: absolute;
  left: 120px;
  bottom: 105px;
  transition: opacity 0.1s;

  ${({ menuOpen, theme }) =>
    menuOpen &&
    `
     transition: opacity ${theme.transitionTimes.default} ${theme.transitionTimes.default}
     ease-in;
   opacity: 1;
  `}
`;
