require("dotenv").config({
  path: `.env`,
})

module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-prismic-graphql",
      options: {
        repositoryName: "cdwebsite", // required
        defaultLang: "en-us", // optional, but recommended
        accessToken: `${process.env.API_KEY}`, // optional
        // accessToken:
        //   "MC5YcXVBbkJFQUFDSUFpYmlp.77-9Qe-_ve-_vTnvv70Y77-9VCfvv70QFe-_vVEAY--_vXNiZybvv71B77-977-9We-_ve-_vXPvv71K", // optional
        path: "/preview", // optional, default: /preview
        previews: true, // optional, default: false
        sharpKeys: [
          /image|photo|picture/, // (default)
          "profilepic",
        ],
      },
    },
    // add sass
    // created by tuanva 26/11/2020
    `gatsby-plugin-sass`,
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-styled-components`,
  ],
}
