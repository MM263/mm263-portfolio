import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import { HeaderDiv } from './styles/PostHeader';

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
              <HeaderDiv>
                <h3 className="post-title">
                  <Link to={node.fields.slug}>{title}</Link>
                </h3>
                <div className="underline">
                  <small className="post-date">
                    {node.frontmatter.date} • {node.timeToRead} min read
                  </small>
                  <div className="separator" />
                </div>
              </HeaderDiv>
              <p>{node.frontmatter.spoiler}</p>
            </PostBody>
          );
        })}
      </BlogContainer>
    );
  }
}

export default BlogIndex;
