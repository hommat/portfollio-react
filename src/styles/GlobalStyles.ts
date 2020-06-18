import { createGlobalStyle } from "./styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: "Roboto", sans-serif;
    color: ${({ theme }) => theme.colors.textWhite};
    background-color: ${({ theme }) => theme.colors.white};
    overflow-x: hidden;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;
