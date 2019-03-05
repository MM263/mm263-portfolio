import React from 'react';
import styled from 'styled-components';

const StyledBigName = styled.h1`
  font-size: 6rem;
  font-family: 'Permanent Marker';
  color: #393939;
  margin: 0;
  position: relative;
  text-transform: uppercase;
  line-height: 1;
  text-align: center;

  &:after {
    transition: height 0.5s ${({ theme }) => theme.ease},
      margin-top 0.5s ${({ theme }) => theme.ease};
    height: ${({ theme }) => (theme.night ? '6rem' : '3rem')};
    width: 120%;
    background: ${({ theme }) => theme.accentBG};
    content: '';
    position: absolute;
    left: calc(0px - 10%);
    z-index: -1;
    margin-top: ${({ theme }) => (theme.night ? '0' : '2rem')};
    transform: skew(-10deg);
  }
`;

const BigName = (
  { children, className } // eslint-disable-line
) => <StyledBigName className={className}>{children}</StyledBigName>;

export default BigName;
