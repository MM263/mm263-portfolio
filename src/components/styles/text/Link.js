import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledLink = styled.a`
  color: ${({ theme }) => theme.text};
  text-decoration-color: ${({ theme }) => theme.salmon};
`;

const Link = ({ children, href }) => (
  <StyledLink href={href} rel="noopener noreferrer">
    {children}
  </StyledLink>
);

Link.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
};

export default Link;
