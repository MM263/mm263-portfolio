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

const Link = styled.a`
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

const BlogNotice = styled.p`
  position: absolute;
  bottom: 0.5rem;
  left: 0;
  right: 0;
  margin: 0;
  text-align: center;
  font-size: 1rem;
  opacity: 0.5;
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
            Hi, my name is Tony! I'm a developer currently working in Saskatoon,
            SK.
          </p>
          <p>
            I do DX, cool frontend stuff, and Rust. Check out my{' '}
            <Link href={resume} download>
              <DownloadIcon />
              resume
            </Link>
            , scroll down to read my blog or shoot me a message.
          </p>
          <p>
            I am currently working with amazing folks at{' '}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.7shifts.com/">
              7shifts
            </Link>
            !
          </p>
        </aside>
        <BlogNotice>
          *Also I have a small blog, scroll down to read it :^)
        </BlogNotice>
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
