import styled from "../../styles/styled-components";

export const SGithub = styled.a`
  margin-right: 10px;
  transition: ${({ theme }) => theme.transitionTimes.default};

  &:hover {
    transform: scale(1.1);
  }

  &:last-child {
    margin-right: 0;
  }
`;
