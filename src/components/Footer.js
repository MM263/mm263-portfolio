import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

import Switch from './Switch';
import GithubIcon from '../images/github.svg';

const styledIcon = css`
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.4rem;
  border-radius: 50%;
  margin-left: 1rem;
  background: ${({ theme }) => theme.accentBG};
  transition: background 0.2s ${({ theme }) => theme.ease};
  &:hover {
    background-color: ${({ theme }) => theme.salmoner};
  }
`;

const Github = styled(GithubIcon)`
  ${styledIcon}
`;

const IconLink = styled.a`
  color: #393939;
  text-decoration: none;
  display: flex;
`;

const StyledFooter = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  z-index: 1500;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  padding: 1.5rem;

  & > div {
    display: flex;
    flex-direction: column;

    & > div:first-child {
      margin-bottom: 1.5rem;
    }
  }

  ul {
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;
  }
`;

const LinkButton = styled(Link)`
  color: #393939;
  font-family: 'Permanent Marker';
  font-size: 1.5rem;
  line-height: 1.5;
  text-decoration: none;
  border-radius: 15px;
  padding: 0.1rem 1rem;
  background: ${({ theme }) => theme.accentBG};
  transition: background 0.2s;
  height: auto;
  &:hover {
    background-color: ${({ theme }) => theme.salmoner};
  }
`;

const Footer = ({ toggleFun, toggleNight, night, fun }) => (
  <StyledFooter>
    <div>
      <Switch label="🤔" name="fun" value={fun} onChange={toggleFun} />
      <Switch label="🌛" name="night" value={night} onChange={toggleNight} />
    </div>
    <nav>
      <ul>
        <li>
          <LinkButton to="/portfolio">Portfolio</LinkButton>
        </li>
        <li>
          <IconLink
            href="https://github.com/mm263"
            target="_blank"
            rel="noopener noreferrer">
            <Github aria-label="Github" />
          </IconLink>
        </li>
      </ul>
    </nav>
  </StyledFooter>
);

Footer.propTypes = {
  toggleFun: PropTypes.func.isRequired,
  toggleNight: PropTypes.func.isRequired,
  fun: PropTypes.bool.isRequired,
  night: PropTypes.bool.isRequired,
};

export default Footer;
