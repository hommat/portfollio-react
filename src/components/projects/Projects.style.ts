import styled from "../../styles/styled-components";

const boxPadding = "25px";
const boxTranslate = "280px";

export const SProjects = styled.section`
  color: ${({ theme }) => theme.colors.textWhite};
  background: ${({ theme }) => theme.colors.primaryLight3};
  padding: ${boxPadding};
  transform: translateY(${boxTranslate});
  margin-top: -${boxTranslate};
  box-shadow: ${({ theme }) => theme.shadows.default};
  padding-top: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const SGrid = styled.div`
  display: grid;
  gap: ${boxPadding};
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 570px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
