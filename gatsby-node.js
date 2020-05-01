const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      prismic {
        allPosts {
          edges {
            node {
              _meta {
                uid
              }
              title
            }
          }
        }
      }
    }
  `)

  const template = path.resolve("src/templates/post.jsx")

  pages.data.prismic.allPosts.edges.forEach(edge => {
    createPage({
      path: `/${edge.node._meta.uid}`,
      component: template,
      context: {
        uid: edge.node._meta.uid,
      },
    })
  })
}
