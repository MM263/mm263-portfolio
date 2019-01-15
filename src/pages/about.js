import React from 'react';
import styled from 'styled-components';

import Link from '../components/styles/Link';
import BigName from '../components/styles/BigName';
import Info from '../components/styles/InfoLine';
import LocationIcon from '../images/location.svg';
import TelegramIcon from '../images/telegram.svg';
import MailIcon from '../images/mail.svg';

const AboutHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 1.3rem;
`;

const AboutPage = () => (
  <div>
    <BigName>About</BigName>
    <AboutHeader>
      <Info>
        <LocationIcon />
        Saskatoon, SK
      </Info>
      <Info>
        <MailIcon />
        <a href="mailto:aa.263@tutanota.com">aa.263@tutanota.com</a>
      </Info>
      <Info>
        <TelegramIcon />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://t.me/birdhaus">
          @Birdhaus
        </a>
      </Info>
    </AboutHeader>
    <p>
      Hi, my name is Tony! I'm a 23 years old frontend developer. I like all
      things involving React and it's ecosystem and I'm always keen on learning
      new things and I love staying on the top of JS trends. I like $#*!posting
      in commits and tuning webpack configs to perfection. Check out my{' '}
      <Link mini to="/portfolio">
        portfolio{' '}
      </Link>{' '}
      or download my resume. If you like what you see, let's talk!
    </p>
    <p>
      Some stuff that I know: ES6, React, Redux, Redux Saga, GraphQL, Apollo
      Client/Server, Next.js, Gatsby, Styled Components, Node.js, Vue.js, Git,
      Unix, Jira
    </p>
  </div>
);

export default AboutPage;
