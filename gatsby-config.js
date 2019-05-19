require('dotenv').config()

module.exports = {
  siteMetadata: {
    siteUrl: `https://uncle-javascript.com`,
    title: 'JavaScript おじさん.com',
    description: 'JavaScript の推進を推進',
  },
  plugins: [
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    `gatsby-plugin-sitemap`,
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
        icon: 'src/images/profile.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-remove-serviceworker',
    'gatsby-plugin-sass',
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `src`,
    //     path: `${__dirname}/src/`,
    //   },
    // },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-code-titles`,
          `gatsby-plugin-root-import`,
          {
            resolve: 'gatsby-remark-external-links',
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          'src': 'src',
        },
        extensions: ['js'],
      },
    },
  ],
}
