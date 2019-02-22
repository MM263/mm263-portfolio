import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import styled from 'styled-components';

import prismTheme from '../../layouts/prism-theme';

const FormattedCode = styled.pre`
  padding: 1rem 2rem;
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  overflow: auto;
`;

const Code = (
  { children } // eslint-disable-line
) => (
  <Highlight
    {...defaultProps}
    code={children}
    language="jsx"
    theme={prismTheme}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <FormattedCode className={className} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </FormattedCode>
    )}
  </Highlight>
);

const StyledInline = styled.code`
  background-color: ${({ theme }) => (theme.night ? '#393939' : '#f5f5f5')};
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  color: ${({ theme }) => theme.text};
  padding: 0.2rem 0.4rem;
  margin: 0.5rem;
  border-radius: 3px;
`;

const InlineCode = (
  { children, noWrap } // eslint-disable-line
) => <StyledInline noWrap={noWrap}>{children}</StyledInline>;

export { Code, InlineCode };
