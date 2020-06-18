import styled from "../../styles/styled-components";

export const SHeader = styled.header`
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primaryLight};
  box-shadow: ${({ theme }) => theme.shadows.default};
`;

export const SAuthor = styled.h1`
  letter-spacing: 0.15rem;
  font-size: 4.4rem;
`;

export const SRole = styled.h4`
  color: #6a6b8e;
  font-size: 1.5rem;
`;

export const SMedia = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;
