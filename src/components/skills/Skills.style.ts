import styled from "../../styles/styled-components";

export const SSkills = styled.section`
  color: ${({ theme }) => theme.colors.textBlack};
`;

export const SGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
