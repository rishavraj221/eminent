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
        repositoryName: "eminent-redesign",
        schemas: {
          home_page: require("./src/schemas/Home.json"),
          services: require("./src/schemas/Services.json"),
          featured_projects: require("./src/schemas/FeaturedProjects.json"),
          project: require("./src/schemas/Project.json"),
          navigation: require("./src/schemas/Navigation.json"),
          gallery: require("./src/schemas/Gallery.json"),
        },
      },
    },
    "gatsby-plugin-image",
  ],
}
