const path = require("path")
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const OurWorkDetail = path.resolve("./src/templates/OurWorkDetail.js")

  const res = await graphql(`
    query indexQuery {
      prismic {
        allOurwork_items {
          edges {
            node {
              meta_description
              meta_title
              keywords
              _meta {
                uid
              }
              background_description
              background_image
              features_description
              list_background_images {
                list_background_images_item
              }
              name_category_of_ourworkitem
              ourworkitem_description
              ourworkitem_image
              ourworkitem_logo
              ourworkitem_name
              quote_author
              quote_description
              relationship_to_categoryourwork {
                ... on PRISMIC_Category_ourwork {
                  _meta {
                    uid
                  }
                }
              }
              solution_description
              solution_image
              solution_lists {
                solution_lists_item
              }
              statistical_ourwork_item {
                description__statistical
                title_number_statistical
              }
            }
          }
        }
      }
    }
  `)

  res.data.prismic.allOurwork_items.edges.forEach(edge => {
    createPage({
      component: OurWorkDetail,
      path: `/projects/${edge.node.relationship_to_categoryourwork._meta.uid}/${edge.node._meta.uid}`,
      context: {
        slug: edge.node._meta.uid,
        dataLayout: edge,
      },
    })
  })
}
