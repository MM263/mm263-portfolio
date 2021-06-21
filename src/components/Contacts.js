import React from 'react';
import styled from '@emotion/styled';

import Info from './styles/InfoLine';
import MailIcon from '../images/mail.svg';
import GithubIcon from '../images/github.svg';

const AboutHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 1.3rem;
  flex-wrap: wrap;

  @media only screen and (max-width: 920px) {
    margin-top: 0.4rem;
    p {
      margin: 0;
    }
  }
`;

const Contacts = () => (
  <AboutHeader>
    <Info>
      <GithubIcon />
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/mm263">
        mm263
      </a>
    </Info>
    <Info>
      <MailIcon />
      <a href="mailto:tony@mm263.space">tony@mm263.space</a>
    </Info>
  </AboutHeader>
);

export default Contacts;
