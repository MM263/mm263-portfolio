import React from 'react';
import { Link, graphql } from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import styled from 'styled-components';

import Bio from '../components/Bio';
import PageTitle from '../components/PageTitle';

const BlogContainer = styled.div`
  margin-top: 2rem;
  h1 {
    font-size: 4rem;
    margin-top: 2rem;
    &:after {
      margin-top: 1rem;
      height: 2rem;
    }
  }
  & > div:first-child {
    a {
      top: 0.5rem;
    }
  }
`;

const PostFooter = styled.div`
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

class BlogPostTemplate extends React.Component {
  render() {
    const {
      data: { site, mdx }, // eslint-disable-line
    } = this.props; // eslint-disable-line
    const siteTitle = this.props.data.site.siteMetadata.title; // eslint-disable-line
    const { previous, next } = this.props.pageContext; // eslint-disable-line

    return (
      <BlogContainer>
        <PageTitle to="/blog" text="Back To Blog">
          {mdx.frontmatter.title}
        </PageTitle>
        <p>{mdx.frontmatter.date}</p>
        <MDXRenderer>{mdx.code.body}</MDXRenderer>
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
        date(formatString: "YYYY-MM-DD")
      }
      code {
        body
      }
    }
  }
`;
