import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, Global, css } from '@emotion/react';

const GlobalStyles = ({ theme }) => (
  <Global
    styles={css`
      html {
        box-sizing: border-box;
        font-size: 10px;
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      body {
        overscroll-behavior: none;
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
        font-family: 'Asap', sans-serif;
        color: ${theme.text};
        background-color: ${theme.bg};
        transition: color 0.5s ${theme.ease},
          background-color 0.5s ${theme.ease};
      }
    `}
  />
);

GlobalStyles.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withTheme(GlobalStyles);
