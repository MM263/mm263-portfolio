import React from 'react';
import styled from 'styled-components';

import PageTitle from '../components/PageTitle';
import Link from '../components/styles/Link';
import Info from '../components/styles/InfoLine';
import LocationIcon from '../images/location.svg';
import TelegramIcon from '../images/telegram.svg';
import MailIcon from '../images/mail.svg';
import selfie from '../images/photo.png';

const AboutStyles = styled.div`
  margin: 0 2.3rem;

  @media only screen and (max-width: 920px) {
    & > div:first-child {
      a {
        top: 0;
      }
    }
    h1 {
      font-size: 3rem;
      &:after {
        margin-top: 0.9rem;
        height: 1.5rem;
        width: 108%;
        left: calc(0px - 3%);
      }
    }
  }

  @media only screen and (max-width: 340px) {
    p {
      font-size: 1.2rem;
    }
  }
`;

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

const Photo = styled.img`
  height: 15rem;
  width: 15rem;
  float: left;
  margin-right: 3rem;

  @media only screen and (max-width: 600px) {
    height: 10rem;
    width: 10rem;
    margin-right: 2rem;
    margin-bottom: 1rem;
  }
`;

const AboutPage = () => (
  <AboutStyles>
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
  </AboutStyles>
);

export default AboutPage;
