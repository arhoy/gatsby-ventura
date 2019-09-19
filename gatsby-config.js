/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'GATSBY tutorial',
    description: 'just some description about the site ya',
    author: 'Alex Quasar',
    data: ['item 1', 'item 2'],
  },
  plugins: [`gatsby-plugin-sass`, `gatsby-plugin-styled-components`],
}
