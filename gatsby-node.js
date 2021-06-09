const path = require("path")
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const OurWorkDetail = path.resolve("./src/templates/OurWorkDetail.js")
  const OurWorkItems = path.resolve("./src/templates/OurWorkItems.js")
  const BlogDetails = path.resolve("./src/templates/BlogDetails.js")
  const PageTemplate = path.resolve("./src/templates/page/index.js")

  const res = await graphql(`
    query IndexQuery {
      prismic {
        allProjectss {
          edges {
            node {
              project_name
              name_category_of_project
              project_header_image
              relationship_to_project_category {
                ... on PRISMIC_Category_ourwork {
                  _meta {
                    uid
                  }
                }
              }
              _meta {
                uid
              }
            }
          }
        }
        allPosts {
          edges {
            node {
              _meta {
                uid
              }
            }
          }
        }
        allPages {
          edges {
            node {
              page_name
              _meta {
                uid
              }
              meta_title
              meta_description
              keywords
              body {
                ... on PRISMIC_PageBodyBig_image {
                  type
                  label
                  fields {
                    content_large
                  }
                  primary {
                    big_image
                  }
                }
                ... on PRISMIC_PageBody2_column_text {
                  type
                  label
                  primary {
                    text_side_left
                    text_side_right
                  }
                }
                ... on PRISMIC_PageBodyTitle_with_description {
                  type
                  label
                  primary {
                    text_description
                    title
                  }
                }
                ... on PRISMIC_PageBodyList_post {
                  type
                  label
                  fields {
                    post_item {
                      ... on PRISMIC_Post_category {
                        title
                        _linkType
                        _meta {
                          uid
                        }
                      }
                    }
                  }
                }
                ... on PRISMIC_PageBodyTag_for_post {
                  type
                  label
                  fields {
                    tag_item
                  }
                  primary {
                    title1
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  res.data.prismic.allPages.edges.forEach(page => {
    createPage({
      component: PageTemplate,
      path: `/${page.node._meta.uid}`,
      context: {
        slug: page.node._meta.uid,
        dataLayout: page.node,
      },
    })
  })

  res.data.prismic.allProjectss.edges.forEach(edge => {
    createPage({
      component: OurWorkDetail,
      path: `/projects/${edge.node.relationship_to_project_category._meta.uid}/${edge.node._meta.uid}`,
      context: {
        slug: edge.node._meta.uid,
        dataLayout: edge,
      },
    })
  })

  res.data.prismic.allProjectss.edges.forEach(edge => {
    createPage({
      component: OurWorkItems,
      path: `/projects/${edge.node.relationship_to_project_category._meta.uid}`,
      context: {
        // slug: edge.node.relationship_to_categoryourwork._meta.uid,
        slug: edge.node.name_category_of_project,
        dataLayout: edge,
      },
    })
  })
  res.data.prismic.allPosts.edges.forEach(edge => {
    createPage({
      component: BlogDetails,
      path: `/blog/${edge.node._meta.uid}`,
      context: {
        slug: edge.node._meta.uid,
        dataLayout: edge,
      },
    })
  })
}

const webpack = require("webpack")
exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      }),
    ],
  })
}
