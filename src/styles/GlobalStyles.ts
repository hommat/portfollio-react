import { createGlobalStyle } from "./styled-components";

const maxContainerWidth = "1280px";
export const sectionPadding = "50px";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root {
    background-color: ${({ theme }) => theme.colors.white} !important;
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
 
  .container {
    max-width: ${maxContainerWidth};
    padding: 0 5%;
    margin: 0 auto;
  }

  .section {
    text-align: center;
    padding-bottom: ${sectionPadding};
  }

  .section__heading {
    font-size: 3em;
    padding: ${sectionPadding} 0;
  }
`;
