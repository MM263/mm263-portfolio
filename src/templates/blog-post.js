import React from 'react';
import { Link, graphql } from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import styled from 'styled-components';

import Bio from '../components/Bio';
import BigName from '../components/styles/BigName';

const BlogContainer = styled.main`
  margin: 2rem 2rem 0 2rem;

  header {
    margin-bottom: 4rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 5rem;
  }

  .post-date {
    margin: 1rem 1rem 1.3rem 0;
    font-style: italic;
    font-weight: 900;
  }

  .post-title {
    font-size: 4rem;
    margin: 2rem 0;
    text-align: left;
    &:after {
      transition: height 0.5s ${({ theme }) => theme.ease},
        margin-top 0.5s ${({ theme }) => theme.ease};
      margin-top: ${({ theme }) => (theme.night ? '0' : '1rem')};
      height: ${({ theme }) => (theme.night ? '4rem' : '2rem')};
    }
    a {
      top: 0.5rem;
    }

    @media only screen and (max-width: 600px) {
      .post-title {
        text-align: left;

        font-size: 2.3rem;
      }
    }
  }

  @media only screen and (max-width: 800px) {
    .post-title {
      font-size: 2.8rem;
      &:after {
        width: 100%;
        left: 0;
      }
    }
  }
`;

const PostFooter = styled.footer`
  margin: 10rem 0 7rem 0;
  display: flex;
  flex-direction: column;

  .post-links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 4rem;
  }
`;

const StyledArticle = styled.article`
  max-width: 100%;
`;

class BlogPostTemplate extends React.Component {
  render() {
    const {
      data: { site, mdx }, // eslint-disable-line
    } = this.props; // eslint-disable-line
    const siteTitle = this.props.data.site.siteMetadata.title; // eslint-disable-line
    const { previous, next } = this.props.pageContext; // eslint-disable-line

    return (
      <BlogContainer>
        <header>
          <BigName className="post-title">{mdx.frontmatter.title}</BigName>
          <small className="post-date">{mdx.frontmatter.date}</small>
        </header>
        <StyledArticle>
          <MDXRenderer>{mdx.code.body}</MDXRenderer>
        </StyledArticle>
        <PostFooter>
          <Bio />
          <div className="post-links">
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </div>
        </PostFooter>
      </BlogContainer>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
      }
      code {
        body
      }
    }
  }
`;
