import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import Bio from '../components/Bio';

const BlogContainer = styled.div`
  margin: 0 2.3rem;

  & > div:not(:last-child) {
    margin-bottom: 3rem;
  }
  & > div:nth-child(2) {
    margin-bottom: 7rem;
  }
  h1 {
    margin-bottom: 1rem;
    font-family: 'Permanent Marker';
    font-size: 4rem;
  }

  @media only screen and (max-width: 400px) {
    h1 {
      font-size: 3rem;
    }
  }
`;

const PostBody = styled.div`
  .post-date {
    margin-bottom: 1.3rem;
  }
  h3,
  a {
    margin: 0;
    font-family: 'Permanent Marker';
    color: ${({ theme }) => theme.black};
    text-decoration: none;
    line-height: 1;
    font-size: 2.7rem;
  }
  p {
    margin: 0;
  }
  h3 {
    margin-bottom: 0.5rem;
    &:after {
      height: 2rem;
      width: 120%;
      background-color: ${({ theme }) => theme.salmon};
      background-image: url("${({ theme }) => theme.clouds}");
      content: '';
      position: absolute;
      left: calc(0px - 10%);
      z-index: -1;
      margin-top: 1rem;
      transform: skew(-10deg);
    }
  }

  @media only screen and (max-width: 800px) {
    margin-bottom: 7rem;
    h3 {
      &:after {
        left: calc(0px + 5%);
        width: 90%;
      }
    }
  }
`;

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props; // eslint-disable-line
    const posts = data.allMdx.edges;

    return (
      <BlogContainer>
        <h1>Reacting to React</h1>
        <Bio />

        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <PostBody key={node.fields.slug}>
              <h3>
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <p className="post-date">{node.frontmatter.date}</p>
              <p>{node.excerpt}</p>
            </PostBody>
          );
        })}
      </BlogContainer>
    );
  }
}

export default BlogIndex;

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
          excerpt
          frontmatter {
            date(formatString: "MMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
