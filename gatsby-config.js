module.exports = {
  siteMetadata: {
    title: `What Date Time Is It Right Now`,
    description: `A site that tells you what date and time it is right now.`,
    author: `Yihwan Kim`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-root-import',
    'gatsby-plugin-lodash',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `interestOverTime`,
        path: `${__dirname}/src/content/searchTrends/interestOverTime`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `interestByGeography`,
        path: `${__dirname}/src/content/searchTrends/interestByGeography`,
      },
    },
    `gatsby-transformer-csv`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `what-datetime-is-it-right-now-dot-com`,
        short_name: `what-date-time-is-it`,
        start_url: `/`,
        background_color: `#212529`,
        theme_color: `#212529`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      }
    },
  ],
}
