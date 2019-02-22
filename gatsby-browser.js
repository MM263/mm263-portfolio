import React from 'react';
import { MDXProvider } from '@mdx-js/tag';

import components from './src/utils/components';

export const wrapRootElement = (
  { element } // eslint-disable-line
) => <MDXProvider components={components}>{element}</MDXProvider>;
