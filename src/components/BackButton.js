import React from 'react';
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
  color: ${({ theme }) => theme.black};
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
  render() {
    return (
      <StyledBackButton to="/">
        <BackIcon />
        Home
      </StyledBackButton>
    );
  }
}

export default BackButton;
