module.exports = {
  siteMetadata: {
    title: 'Tony Antonov',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-mdx',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-eslint',
  ],
};
