import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

import Switch from './Switch';
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
  position: fixed;
  bottom: 1.5rem;
  left: 0;
  width: 100vw;
  z-index: 1500;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem 1rem 2rem;
  & > div {
    display: flex;
  }
`;

const LinkButton = styled(Link)`
  color: ${({ theme }) => theme.black};
  font-family: 'Permanent Marker';
  font-size: 1.5rem;
  line-height: 1.5;
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

const Footer = ({ disableFun, fun }) => (
  <StyledFooter>
    <Switch value={fun} onChange={disableFun} />
    <div>
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
    </div>
  </StyledFooter>
);

Footer.propTypes = {
  disableFun: PropTypes.func.isRequired,
  fun: PropTypes.bool.isRequired,
};

export default Footer;
