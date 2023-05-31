import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  // Reset styles
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym,
  address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var,
  b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead,
  tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav,
  output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  * {
    box-sizing: border-box;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after {
    content: "";
    content: none;
  }
  q:before, q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    text-decoration: none;
  }

  // Element styles
  body {
    ${({ theme }) => css`
      background-color: ${theme.colors.eerieBlack};
      font-family: ${theme.fonts.primary};
    `}
    width: 100%;
    height: 100vh;

    &::-webkit-scrollbar {
      width: 12px;
    }
    
    &::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.colors.eerieBlack};
    }
    
    &::-webkit-scrollbar-thumb {
      ${({ theme }) => css`
        background-color: ${theme.colors.hanPurple};
        border: 3px solid ${theme.colors.eerieBlack};
      `}
      border-radius: 10px;
    }
  }

  #root {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default GlobalStyles;