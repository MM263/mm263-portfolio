import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Asap', sans-serif;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.bg};
    transition: color 0.5s ${({ theme }) =>
      theme.ease}, background-color 0.5s ${({ theme }) => theme.ease};
  }
`;

export default GlobalStyles;
