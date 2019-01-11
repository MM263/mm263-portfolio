import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './src/components/styles/GlobalStyles';
import theme from './src/theme/theme';

export const wrapRootElement = (
  { element } // eslint-disable-line
) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      {element}
    </>
  </ThemeProvider>
);
