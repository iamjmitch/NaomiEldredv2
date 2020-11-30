module.exports = {
  siteMetadata: {
    title: `Naomi Eldred - Make-up Artist | North Lakes`,
    description: `Professional Makeup Artist Servicing North Lakes, Mango Hill and North Brisbane Suburbs Specialising in Weddings, Bridal, Formal Events and M.A.C Make-up`,
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
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-scroll-reveal`,
    {
      resolve: `gatsby-remark-images`,
    },
    `gatsby-remark-lazy-load`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
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
