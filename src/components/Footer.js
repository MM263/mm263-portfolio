import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import Info from './styles/InfoLine';
import Switch from './Switch';
import GithubIcon from '../images/github.svg';
import MailIcon from '../images/mail.svg';

const styledIcon = ({ theme }) => css`
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.4rem;
  border-radius: 50%;
  margin-left: 1rem;
  background: ${theme.accentBG};
  transition: background 0.2s ${theme.ease};
  &:hover {
    background-color: ${theme.salmoner};
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

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 1500;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  padding: 1.5rem;

  & > div {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;

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

  @media only screen and (max-width: 801px) {
    display: none;
  }
`;

const List = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
`;

const FooterContent = ({ labelName, toggleFun, toggleNight, night, fun }) => (
  <>
    <div>
      <Switch
        label="🤔"
        labelName={labelName}
        name="fun"
        value={fun}
        onChange={toggleFun}
      />
      <Switch
        label="🌛"
        labelName={labelName}
        name="night"
        value={night}
        onChange={toggleNight}
      />
    </div>
  </>
);

const Footer = (props) => (
  <StyledFooter>
    <FooterContent {...props} />
  </StyledFooter>
);

FooterContent.propTypes = {
  toggleFun: PropTypes.func.isRequired,
  toggleNight: PropTypes.func.isRequired,
  fun: PropTypes.bool.isRequired,
  night: PropTypes.bool.isRequired,
  labelName: PropTypes.string.isRequired,
};

export { FooterContent };
export default Footer;
