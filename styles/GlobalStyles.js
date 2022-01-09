import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle(
  (theme) => `
html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    box-sizing: border-box;
    overflow-x: hidden;
    font-family: Poppins, -apple-system, BlinkMacSystemFont, segoe ui, Roboto,
    Oxygen, Ubuntu, Cantarell, open sans, helvetica neue, sans-serif;
    -webkit-font-smoothing: subpixel-antialiased;
    background-color: ${theme.theme.bg.primary};
  }

`
);

export default GlobalStyle;
