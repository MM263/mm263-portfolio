import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

import GithubIcon from '../images/github.svg';
import LinkedInIcon from '../images/linkedin.svg';

const styledIcon = css`
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.4rem;
  border-radius: 50%;
  margin-left: 1rem;
  background-color: ${({ theme }) => theme.salmon};
  background-image: url("${({ theme }) => theme.clouds}");
  transition: background 0.2s;
  &:hover {
    background-color: ${({ theme }) => theme.salmoner}; 
  }
`;

const Github = styled(GithubIcon)`
  ${styledIcon}
`;
const LinkedIn = styled(LinkedInIcon)`
  ${styledIcon}
`;

const IconLink = styled.a`
  color: ${({ theme }) => theme.black};
  text-decoration: none;
  display: flex;
`;

const StyledFooter = styled.div`
  z-index: 750;
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  display: flex;
`;

const LinkButton = styled(Link)`
  color: ${({ theme }) => theme.black};
  font-family: 'Permanent Marker';
  font-size: 1.25rem;
  text-decoration: none;
  border-radius: 15px;
  padding: 0.1rem 1rem;
  background-color: ${({ theme }) => theme.salmon};
  background-image: url("${({ theme }) => theme.clouds}");
  transition: background 0.2s;
  height: auto;
  &:hover {
    background-color: ${({ theme }) => theme.salmoner}; 
  }
`;

const Footer = () => (
  <StyledFooter>
    <LinkButton to="/blog">Blog</LinkButton>
    <IconLink
      href="https://github.com/mm263"
      target="_blank"
      rel="noopener noreferrer">
      <Github />
    </IconLink>
    <IconLink
      href="https://linkedin.com/in/tony-antonov-778564178"
      target="_blank"
      rel="noopener noreferrer">
      <LinkedIn />
    </IconLink>
  </StyledFooter>
);

export default Footer;
