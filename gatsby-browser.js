import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MDXProvider } from '@mdx-js/tag';

import theme from './src/theme/theme';

export const wrapRootElement = (
  { element } // eslint-disable-line
) => (
  <ThemeProvider theme={theme}>
    <MDXProvider>{element}</MDXProvider>
  </ThemeProvider>
);
