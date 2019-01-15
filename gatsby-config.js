module.exports = {
  siteMetadata: {
    title: 'Tony Antonov',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/thinking.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-mdx',
      options: {
        extensions: ['mdx', 'md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              sizeByPixelDensity: true,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-offline',
    'gatsby-plugin-layout',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-eslint',
    'gatsby-plugin-react-svg',
  ],
};
