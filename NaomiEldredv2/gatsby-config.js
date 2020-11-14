module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Yrsa:wght@200;400;700`,
          `Old+Standard+TT:wght@200;400;700`,
          `Roboto:wght@300;400;500`,
        ],
        display: "swap",
      },
    },
    `gatsby-plugin-react-svg`,
  ],
}
