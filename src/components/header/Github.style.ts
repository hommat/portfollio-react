import styled from "../../styles/styled-components";

export const SGithub = styled.a`
  margin-right: 10px;
  transition: ${({ theme }) => theme.transitionTimes.default}
    ${({ theme }) => theme.easings.bounce};

  &:hover {
    transform: scale(1.2);
  }

  &:last-child {
    margin-right: 0;
  }
`;
