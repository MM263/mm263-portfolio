import React from 'react';
import { MDXProvider } from '@mdx-js/tag';

export const wrapRootElement = (
  { element } // eslint-disable-line
) => <MDXProvider>{element}</MDXProvider>;
