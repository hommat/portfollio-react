import styled from "../../styles/styled-components";

export const SNavigationItem = styled.li`
  margin-bottom: 10px;
  padding-bottom: 4px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  transition: ${({ theme }) => theme.transitionTimes.default};

  &:hover {
    border-bottom-color: ${({ theme }) => theme.colors.textWhite};
  }
`;

export const SLink = styled.a`
  color: ${({ theme }) => theme.colors.textWhite};
  width: 100%;
  display: block;
  text-transform: uppercase;
  user-select: none;
`;
