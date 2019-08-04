if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}
module.exports = {
  siteMetadata: {
    title: 'Taylor Sturtz',
    author: 'Taylor Sturtz',
    description: 'Taylor Sturtz dev blog and portfolio',
    siteUrl: 'https://taylorsturtz.com',
  },
  plugins: [
    // markdown file support
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    // markdown file parsing
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank"
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-autolink-headers',
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    // image manipulation
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // google analytics
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-130928418-2`,
      },
    },
    // creates RSS feed
    `gatsby-plugin-feed`,
    // this makes the site a PWA ⚡️
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Taylor Sturtz Blog`,
        short_name: `TS Blog`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/profile-pics/taylorsturtz-mischief.png`,
      },
    },
    // offline support (service worker) - this must come AFTER gatsby-plugin-manifest
    `gatsby-plugin-offline`,
    // support for server render head data
    `gatsby-plugin-react-helmet`,
    // definitions for text base CSS rules
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
}
