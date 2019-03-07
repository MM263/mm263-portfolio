import React from 'react';
import { Link, graphql } from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import styled from '@emotion/styled';

import Bio from '../components/Bio';
import { Header } from '../components/styles/PostHeader';
import SEO from '../components/SEO';

const BlogContainer = styled.main`
  margin: 2rem 2rem 0 2rem;
  font-size: 1.6rem;

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
  font-family: 'Merriweather', 'Times New Roman', Times, serif;

  img {
    max-width: 100%;
  }
`;

const SiteHeader = styled.header`
  a {
    font-family: 'Permanent Marker', sans-serif;
    color: ${({ theme }) => theme.text};
    text-decoration: none;
  }
`;

class BlogPostTemplate extends React.Component {
  render() {
    const {
      data: { site, mdx }, // eslint-disable-line
    } = this.props; // eslint-disable-line
    const siteTitle = this.props.data.site.siteMetadata.title; // eslint-disable-line
    const { previous, next } = this.props.pageContext; // eslint-disable-line

    return (
      <>
        <SEO
          title={mdx.frontmatter.title}
          description={mdx.frontmatter.spoiler}
          // slug={mdx.fields.slug}
        />
        <BlogContainer>
          <SiteHeader>
            <h3>
              <Link to="/">Tony Antonov 🤔</Link>
            </h3>
          </SiteHeader>
          <Header>
            <h1 className="post-title">{mdx.frontmatter.title}</h1>
            <div className="underline">
              <small className="post-date">
                {mdx.frontmatter.date} • {mdx.timeToRead} min read
              </small>
              <div className="separator" />
            </div>
          </Header>
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
      </>
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
      timeToRead
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
