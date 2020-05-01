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
        path: "/preview", // optional, default: /preview
        previews: true, // optional, default: false
        sharpKeys: [
          /image|photo|picture/, // (default)
          "profilepic",
        ],
      },
    },
  ],
}
