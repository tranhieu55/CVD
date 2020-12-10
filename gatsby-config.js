require("dotenv").config({
  path: `.env`,
})

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: process.env.PRISMIC_REPOSITORY_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        schemas: {
          categoryOurWork_FLAG: require("./src/schemas/categoryOurWork.json"),
          ourWorkItem_FLAG: require("./src/schemas/ourWorkItem.json"),
          whatWeDoBanner_FLAG: require("./src/schemas/whatWeDoBanner.json"),
          whatWeDo_FLAG: require("./src/schemas/whatWeDo.json"),
          menu_FLAG: require("./src/schemas/menu.json"),
          footer_FLAG: require("./src/schemas/footer.json"),
        },
        imageImgixParams: {
          auto: "compress,format",
          fit: "max",
          q: 50,
        },
        imagePlaceholderImgixParams: {
          w: 100,
          blur: 15,
          q: 50,
        },
      },
    },

    // add sass
    // created by tuanva 26/11/2020
    `gatsby-plugin-sass`,
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-styled-components`,
  ],
}
