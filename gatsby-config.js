/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title:        "BackRoads",
    description:  "Explore awesome worldwide tours & discover what makes each of them unique. Forget your daily routine & say yes to adventure.",
    author:       "@johndoe",
    data: {
      name:       "john",
      age:        24
    }
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      }
    },
  ]
}
