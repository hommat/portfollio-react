import styled from "../../styles/styled-components";

export const SNavigationItem = styled.li<{ menuOpen: boolean }>`
  margin-bottom: 10px;
  padding-bottom: 4px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  transition: ${({ theme }) => theme.transitionTimes.default};

  &:hover {
    border-bottom-color: ${({ theme }) => theme.colors.textWhite};
  }

  ${({ menuOpen, theme }) =>
    menuOpen &&
    `
    transition: transform ${theme.transitionTimes.default} ease-in-out;
    transform: scale(1);
  `}
`;

export const SLink = styled.a`
  color: ${({ theme }) => theme.colors.textWhite};
  text-transform: uppercase;
  user-select: none;
`;
