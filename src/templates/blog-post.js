import React from 'react';
import { Link, graphql } from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';

class BlogPostTemplate extends React.Component {
  render() {
    const {
      data: { site, mdx }, // eslint-disable-line
    } = this.props; // eslint-disable-line
    const siteTitle = this.props.data.site.siteMetadata.title; // eslint-disable-line
    const { previous, next } = this.props.pageContext; // eslint-disable-line

    return (
      <div>
        <h1>{mdx.frontmatter.title}</h1>
        <p>{mdx.frontmatter.date}</p>
        <MDXRenderer>{mdx.code.body}</MDXRenderer>
        <hr />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </div>
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
