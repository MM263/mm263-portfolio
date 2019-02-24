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
    `gatsby-plugin-styled-components`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              sizeByPixelDensity: true,
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Permanent Marker`,
            variants: [`400`],
          },
          {
            family: `Asap`,
            variants: [`400`, `500`, `600`, `700`],
          },
          {
            family: `Merriweather`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    // `gatsby-plugin-feed`,
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-eslint`,
  ],
};
