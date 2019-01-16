import React from 'react';
import styled from 'styled-components';

import PageTitle from '../components/PageTitle';
import Link from '../components/styles/Link';
import Info from '../components/styles/InfoLine';
import LocationIcon from '../images/location.svg';
import TelegramIcon from '../images/telegram.svg';
import MailIcon from '../images/mail.svg';
import selfie from '../images/photo.png';

const AboutHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.3rem;
`;

const Photo = styled.img`
  height: 15rem;
  width: 15rem;
  float: left;
  margin-right: 3rem;
  border-image: linear-gradient(to left, #2e98bc 0%, #c66262 100%);
  border-image-slice: 1;
  border-width: 3px;
`;

const AboutPage = () => (
  <div>
    <PageTitle to="/" text="Home">
      About
    </PageTitle>
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
      <Photo src={selfie} />
      Hi, my name is Tony! I'm a 23 years old frontend developer. I like all
      things involving React and it's ecosystem and I'm always keen on learning
      new things and I love staying on the top of JS trends. I like $#*!posting
      in commits and tuning webpack configs to perfection. Check out my{' '}
      <Link mini={1} to="/portfolio">
        {/* https://github.com/styled-components/styled-components/issues/1198 */}
        portfolio{' '}
      </Link>{' '}
      or download my resume. If you like what you see, let's talk!
    </p>
    <p>
      Dropping some 🔥🔥🔥 keywords: ES6, React, Redux, Redux Saga, GraphQL,
      Apollo Client/Server, Next.js, Redux Thunk, Gatsby, Styled Components,
      JSS, Node.js, Vue.js, Git, Unix, Jira
    </p>
  </div>
);

export default AboutPage;
