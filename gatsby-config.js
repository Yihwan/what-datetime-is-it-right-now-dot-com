module.exports = {
  siteMetadata: {
    title: `DATETIME Optimized`,
    description: `DATETIME Optimized`,
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
  ],
}
