import styled from "../../styles/styled-components";
import { boxTranslate } from "../projects/Projects.style";
import { sectionPadding } from "../../styles/GlobalStyles";

export const SContact = styled.section`
  background: ${({ theme }) => theme.colors.primaryLight};
  padding: 0 5%;
  padding-top: ${boxTranslate};
  padding-bottom: ${sectionPadding};
  box-shadow: ${({ theme }) => theme.shadows.default};
`;

export const SEmail = styled.a`
  color: white;
  text-shadow: ${({ theme }) => theme.shadows.text};
  font-weight: 500;
`;
