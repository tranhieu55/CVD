
const path = require("path")
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const OurWorkItems = path.resolve("./src/templates/OurWorkItems.js")
  const OurWorkDetail = path.resolve("./src/templates/OurWorkDetail.js")

  const res = await graphql(`
    query {
      allPrismicCategoryOurwork {
        nodes {
          uid
        }
      }

      allPrismicOurworkItem {
        nodes {
          uid
          data {
            ourworkitem_name {
              text
            }
            ourworkitem_logo {
              url
              dimensions {
                height
                width
              }
            }
            ourworkitem_image {
              alt
              url
            }
            name_category_of_ourworkitem
            relationship_to_categoryourwork {
              uid
            }
            background_description {
              text
            }
            background_image {
              alt
              url
            }
            quote_author {
              text
            }
            quote_description {
              text
            }
            solution_description {
              text
            }
            solution_image {
              url
              alt
            }
            solution_lists {
              solution_lists_item {
                text
              }
            }
            ourworkitem_description {
              text
            }
            features_description {
              text
            }
            list_background_images {
              list_background_images_item {
                url
                alt
              }
            }
            statistical_ourwork_item {
              description__statistical {
                text
              }
              title_number_statistical {
                text
              }
            }
          }
        }
      }
    }
  `)

  res.data.allPrismicCategoryOurwork.nodes.forEach(node => {
    createPage({
      component: OurWorkItems,
      path: `/projects/${node.uid}`,
      context: {
        slug: node.uid,
      },
    })
  })
  res.data.allPrismicOurworkItem.nodes.forEach(node => {
    createPage({
      component: OurWorkDetail,
      path: `/projects/${node.data.relationship_to_categoryourwork.uid}/${node.uid}`,
      context: {
        slug: node.uid,
        dataLayout: node,
      },
    })
  })
}
