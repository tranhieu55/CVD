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
              body {
                ... on PRISMIC_ProjectsBodyBanner_project_detail {
                  type
                  label
                  primary {
                    name_category_of_project1
                    project_description1
                    project_header_image1
                    project_logo1
                    project_name_banner
                  }
                }
              }
              name_category_of_project
              project_header_image
              project_name
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
              body {
                ... on PRISMIC_PostBodyBanner_post_details {
                  type
                  label
                  primary {
                    date_created1
                    title_banner
                    image_banner
                  }
                }
                ... on PRISMIC_PostBodyBanner_demo {
                  type
                  label
                  fields {
                    color_sub_title
                    color_text
                    color_title
                    description_banner
                    image_banner
                    sub_tittle_banner
                    title_banner
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const dataPage = await graphql(`
  query Page{
    prismic{
      allPages {
        edges {
          node {
            _meta {
              uid
            }
            meta_title
            meta_description
            keywords
            body {
            }
          }
        }
      }
    }
  }
  `)

  const data1 = dataPage.data.prismic.allPages.edges
  data1.forEach(edge => {
    createPage({
      component: PageTemplate,
      path: `/${edge.node._meta.uid}`,
      context: {
        slug: edge.node._meta.uid,
        dataLayout: edge,
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
