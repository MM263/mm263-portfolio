import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './src/theme/theme';

export const wrapRootElement = (
  { element } // eslint-disable-line
) => <ThemeProvider theme={theme}>{element}</ThemeProvider>;
