import React from 'react';
import styled from '@emotion/styled';

import Info from './styles/InfoLine';
import TelegramIcon from '../images/telegram.svg';
import MailIcon from '../images/mail.svg';
import LinkedInIcon from '../images/linkedin.svg';

const AboutHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
      <LinkedInIcon />
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/tony-antonov/">
        tony-antonov
      </a>
    </Info>
    <Info>
      <MailIcon />
      <a href="mailto:aa.263@tutanota.com">aa.263@tutanota.com</a>
    </Info>
    <Info>
      <TelegramIcon />
      <a target="_blank" rel="noopener noreferrer" href="https://t.me/birdhaus">
        @Birdhaus
      </a>
    </Info>
  </AboutHeader>
);

export default Contacts;
