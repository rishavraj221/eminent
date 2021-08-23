const path = require("path")

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
  const blogTemplate = path.resolve("./src/templates/blog.js")

  const projQuery = await graphql(`
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
  const blogQuery = await graphql(`
    query {
      allPrismicBlogPost {
        edges {
          node {
            prismicId
          }
        }
      }
    }
  `)

  projQuery.data.allPrismicProject.edges.forEach(edge => {
    createPage({
      component: projectTemplate,
      path: `/projects/${edge.node.prismicId}`,
      context: {
        slug: edge.node.prismicId,
      },
    })
  })
  blogQuery.data.allPrismicBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blogs/${edge.node.prismicId}`,
      context: {
        slug: edge.node.prismicId,
      },
    })
  })
}
