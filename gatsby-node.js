const path = require("path")
// const { paginate } = require('gatsby-awesome-pagination')

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projectTemplate = path.resolve("./src/templates/project.js")
  const res = await graphql(`
    query {
      allPrismicProject {
        edges {
          node {
            prismicId
          }
        }
      }
    }
  `)

  res.data.allPrismicProject.edges.forEach(edge => {
    createPage({
      component: projectTemplate,
      path: `/projects/${edge.node.prismicId}`,
      context: {
        slug: edge.node.prismicId,
      },
    })
  })
}
