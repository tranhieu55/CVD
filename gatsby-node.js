const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const posts = await graphql(`
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

  const services = await graphql(`
    {
      prismic {
        allServices {
          edges {
            node {
              page_title
              _meta {
                uid
              }
            }
          }
        }
      }
    }
  `)

  const postTemplate = path.resolve("src/templates/post.jsx")
  const serviceTemplate = path.resolve("src/templates/service.jsx")

  posts.data.prismic.allPosts.edges.forEach(edge => {
    createPage({
      path: `/post/${edge.node._meta.uid}`,
      component: postTemplate,
      context: {
        uid: edge.node._meta.uid,
      },
    })
  })

  services.data.prismic.allServices.edges.forEach(edge => {
    createPage({
      path: `/services/${edge.node._meta.uid}`,
      component: serviceTemplate,
      context: {
        uid: edge.node._meta.uid,
      },
    })
  })
}
