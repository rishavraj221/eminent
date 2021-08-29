module.exports = {
  siteMetadata: {
    title: "Eminent",
    author: "eminent interior design",
    address: "11140 Hwy 55 Suite C, Plymouth, MN 55441",
    email: "Collaborate@eminentid.com",
    phone: "612-767-1242",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO,
        schemas: {
          home_page: require("./src/schemas/Home.json"),
          services: require("./src/schemas/Services.json"),
          project: require("./src/schemas/Project.json"),
          gallery: require("./src/schemas/Gallery.json"),
          blog_post: require("./src/schemas/Blog.json"),
        },
      },
    },
    "gatsby-plugin-image",
  ],
}
