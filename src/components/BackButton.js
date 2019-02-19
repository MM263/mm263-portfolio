import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled, { keyframes } from 'styled-components';

import BackIcon from '../images/back.svg';

const jumpy = keyframes`
from {
  transform: translateX(0px);
}

to {
  transform: translateX(-6px);
}
`;

const StyledBackButton = styled(Link)`
  color: ${({ theme }) => theme.text};
  transition: color 0.5s ${({ theme }) => theme.ease};
  font-family: 'Permanent Marker';
  font-size: 2rem;
  position: absolute;
  right: 2rem;
  top: 2rem;
  text-decoration: none;
  line-height: 1.5;
  svg {
    margin-bottom: -6px;
  }
  &:hover {
    animation: ${jumpy} 0.5s ease-in-out infinite alternate;
  }
`;

class BackButton extends React.PureComponent {
  static propTypes = {
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  };

  render() {
    const { to, text } = this.props;

    return (
      <StyledBackButton to={to}>
        <BackIcon />
        {text}
      </StyledBackButton>
    );
  }
}

export default BackButton;
