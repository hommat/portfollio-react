import styled from "../../styles/styled-components";

export const SProject = styled.li<{ image: string }>`
  display: flex;
  flex-direction: column;
  height: 200px;
  background-size: cover;
  background-position: center;
  background-image: ${({ image }) => `url(${image})`};
  box-shadow: ${({ theme }) => theme.shadows.default};
`;

export const SDescription = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  flex-grow: 1;
  padding: 0 20px;
  transition: ${({ theme }) => theme.transitionTimes.default};
  background: rgba(0, 0, 0, 0.93);
  color: ${({ theme }) => theme.colors.textWhite};

  &:hover {
    opacity: 1;
  }
`;

export const SActions = styled.div`
  text-align: left;
  background: rgba(0, 0, 0, 0.93);
  padding: 10px;
`;

export const SAction = styled.a`
  font-size: 1.05em;
  margin-right: 10px;
  padding-bottom: 2px;
  border-bottom: 1px solid transparent;
  transition: ${({ theme }) => theme.transitionTimes.default};
  color: ${({ theme }) => theme.colors.textWhite};

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.textWhite};
  }
`;
