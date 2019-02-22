import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const BlogContainer = styled.main`
  margin: 0 2.3rem 4rem 2.3rem;

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

const PostBody = styled.article`
  .post-date {
    margin: 1rem 1rem 1.3rem 0;
    font-style: italic;
    font-weight: 900;
  }
  p {
    margin: 0;
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

const PostHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 1rem;
  transition: color 0.5s ${({ theme }) => theme.ease} background 0.5s
    ${({ theme }) => theme.ease};

  h3,
  a {
    margin: 0;
    font-family: 'Permanent Marker';
    color: ${({ theme }) => theme.text};
    line-height: 1;
    font-size: 2.7rem;
    display: block;
    text-transform: uppercase;
    text-decoration: none;
  }

  .separator {
    flex: 1;
    height: 3px;
    margin: 0 2rem;
    background: ${({ theme }) => theme.accentBG};
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;

    .separator {
      width: 20rem;
      margin: 1.3rem 1rem 1rem 0;
    }

    .post-date {
      margin: 0;
    }
  }
`;

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props; // eslint-disable-line
    const posts = data.allMdx.edges;

    return (
      <BlogContainer>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;

          return (
            <PostBody key={node.fields.slug}>
              <PostHeader>
                <h3>
                  <Link to={node.fields.slug}>{title}</Link>
                </h3>
                <div className="separator" />
                <small className="post-date">{node.frontmatter.date}</small>
              </PostHeader>
              <p>{node.excerpt}</p>
            </PostBody>
          );
        })}
      </BlogContainer>
    );
  }
}

export default BlogIndex;
