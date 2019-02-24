import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import styled from 'styled-components';

import prismTheme from '../../layouts/prism-theme';

const FormattedCode = styled.pre`
  padding: 1rem 2rem;
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  overflow: auto;
  border-radius: 10px;
`;

const Code = (
  { children, lang = 'jsx' } // eslint-disable-line
) => (
  <Highlight
    {...defaultProps}
    code={children.trim()}
    language={lang}
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
  border-radius: 3px;
`;

const InlineCode = (
  { children, noWrap } // eslint-disable-line
) => (
  <Highlight
    {...defaultProps}
    theme={prismTheme}
    code={children.trim()}
    language="js">
    {({ className, style, tokens, getTokenProps }) => (
      <StyledInline
        className={className}
        style={{ ...style, display: 'inline' }}>
        {tokens.map(line =>
          line.map((token, key) => (
            <span key="fake-key" {...getTokenProps({ token, key })} />
          ))
        )}
      </StyledInline>
    )}
  </Highlight>
);

export { Code, InlineCode };
