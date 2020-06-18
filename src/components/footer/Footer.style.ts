import styled from "../../styles/styled-components";

export const SFooter = styled.footer`
  text-align: center;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textWhite};
  padding: 30px 0;
  box-shadow: ${({ theme }) => theme.shadows.default};
`;

export const SAuthor = styled.a`
  color: white;
  text-shadow: ${({ theme }) => theme.shadows.text};
`;
