import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import SEO from '../components/SEO';
import Contacts from '../components/Contacts';

const LinkStyles = ({ theme }) => css`
  font-weight: 700;
  color: ${theme.text};
`;

const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const MainInfo = styled.div`
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
        width: 108%;
        left: calc(0px - 3%);
        height: ${({ theme }) => (theme.night ? '3rem' : '1.5rem')};
        background: ${({ theme }) => theme.accentBG};
        margin-top: ${({ theme }) => (theme.night ? '0' : '0.9rem')};
      }
    }
  }

  @media only screen and (max-width: 340px) {
    p {
      font-size: 1.2rem;
    }
  }
`;

const Link = styled.a`
  ${LinkStyles}
`;

const Index = () => (
  <>
    <SEO />
    <MainContainer>
      <MainInfo>
        <main>
          <p>
            Hi, my name is Tony! I'm a developer currently working with cool
            people at{' '}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://chroma.ca/">
              Chroma
            </Link>
            .
          </p>
        </main>
        <Contacts />
      </MainInfo>
    </MainContainer>
  </>
);

export default Index;
