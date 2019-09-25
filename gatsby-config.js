/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'BackRoads',
    description:
      'Backroads project based on John Smigla Gatsby course. Explore these awesome adventures around the world! Book today and start exploring the world',
    author: 'Alex Quasar',
    twitterUsername: '@_aquasar',
    image: '/defaultBcg.jpeg',
    siteUrl: 'https://backroads-gatsby-site-100.netflify.com',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-playground`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-react-helmet`,
  ],
};
