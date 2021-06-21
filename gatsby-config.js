module.exports = {
  siteMetadata: {
    title: `Tony Antonov`,
    author: `Tony Antonov`,
    description: `Tony Antonov's personal blog about frontend`,
    siteUrl: `https://mm263.space`,
    social: {
      twitter: '@tony_antonov',
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `portfolio-tony`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/thinking.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `permanent marker\:400`,
          `asap\:400,500,600,700`,
          `merriweather\:300,700`,
        ],
        display: 'swap',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    // `gatsby-plugin-feed`,
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-eslint`,
    // {
    //   resolve: 'gatsby-plugin-webpack-bundle-analyzer',
    //   options: {
    //     analyzerPort: 8888,
    //     production: true,
    //   },
    // },
  ],
};
