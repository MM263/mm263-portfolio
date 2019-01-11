import { createGlobalStyle } from 'styled-components';
import fonts from '../../fonts';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'IBM-Plex';
    src: url(${fonts.IBMPlexSans}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'IBM-Plex';
    src: url(${fonts.IBMPlexSansBold}) format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'IBM-Plex';
    src: url(${fonts.IBMPlexSansBolder}) format('woff2');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'IBM-Plex';
    src: url(${fonts.IBMPlexSansBolderItalic}) format('woff2');
    font-weight: 900;
    font-style: italic;
  }

  @font-face {
    font-family: 'Permanent Marker';
    src: url(${fonts.PermanentMarker}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

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
    font-family: 'IBM-Plex';
  }
`;

export default GlobalStyles;
