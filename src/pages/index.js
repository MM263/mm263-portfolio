import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link as GatsbyLink, graphql } from 'gatsby';

import Blog from '../components/Blog';

import BigName from '../components/styles/BigName';
import SEO from '../components/SEO';
import Contacts from '../components/Contacts';
import photo from '../../static/photo.png';
import Download from '../images/download.svg';
import resume from '../../static/antonov-anton-resume.pdf';

const LinkStyles = ({ theme }) => css`
  font-weight: 700;
  color: ${theme.text};
`;

const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
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

const Photo = styled.img`
  height: 13rem;
  width: 13rem;
  float: left;
  margin-right: 3rem;

  @media only screen and (max-width: 600px) {
    height: 10rem;
    width: 10rem;
    margin-right: 2rem;
    margin-bottom: 1rem;
  }
`;

const PortfolioLink = styled(GatsbyLink)`
  ${LinkStyles}
`;

const ResumeLink = styled.a`
  ${LinkStyles}
`;

const Name = styled(BigName)`
  a {
    color: #393939;
    text-decoration: none;
  }
`;

const DownloadIcon = styled(Download)`
  width: 1.4rem;
  height: 1.4rem;
  margin: 0 2px -3px 4px;
  color: ${({ theme }) => theme.text};

  @media only screen and (max-width: 600px) {
    width: 1.3rem;
    height: 1.3rem;
    margin: 0 5px -2px 0;
  }
`;

const Index = ({ data }) => (
  <>
    <SEO />
    <MainContainer>
      <MainInfo>
        <header>
          <Name>
            <GatsbyLink to="/">Tony Antonov</GatsbyLink>
          </Name>
          <Contacts />
        </header>
        <aside>
          <p>
            <Photo src={photo} />
            Hi, my name is Tony! I'm a self-taught frontend developer from
            Saskatoon, SK.
          </p>
          <p>
            I like all things involving React and it's ecosystem and I love
            staying on top of JS trends. Check out my{' '}
            <PortfolioLink to="/portfolio">portfolio</PortfolioLink> or download
            my{' '}
            <ResumeLink href={resume} download>
              <DownloadIcon />
              resume
            </ResumeLink>
            . If you like what you see, I am currently looking for a job. Let's
            talk!
          </p>
        </aside>
      </MainInfo>
    </MainContainer>
    <Blog data={data} />
  </>
);

Index.propTypes = {
  data: PropTypes.object,
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          timeToRead
          frontmatter {
            date(formatString: "MMM DD, YYYY")
            title
            spoiler
          }
        }
      }
    }
  }
`;
