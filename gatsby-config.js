module.exports = {
  siteMetadata: {
    title: `Naomi Eldred Make-up Artist`,
    description: `Make-up Artist`,
    author: `@iamjmitch`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery`,
        path: `${__dirname}/src/assets/img/gallery/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },

    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat:wght@300;400;500,600,700,800,900`],
        display: "swap",
      },
    },
    `gatsby-plugin-react-svg`,
  ],
}
