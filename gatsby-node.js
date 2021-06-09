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
      }
    }
  `)

  const pagesResult = await graphql(`
    query GET_PAGE {
      prismic {
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
                ... on PRISMIC_PageBody_accordion {
                  type
                  label
                  fields {
                    application
                    content_footer
                    content_footer2
                    content_text
                    content_text_after
                    content_title
                    content_title_center
                    email
                    sub_title
                    title
                  }
                }
                ... on PRISMIC_PageBody_partner_feature_tile {
                  type
                  label
                  fields {
                    link_page
                    logo
                    subtitle
                    text
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
                ... on PRISMIC_PageBody3_column_profiles {
                  type
                  label
                  fields {
                    avatar
                    description
                    position
                    name
                  }
                }
                ... on PRISMIC_PageBodyBanner_button {
                  type
                  label
                  fields {
                    display_button
                    text_in_button
                  }
                }
                ... on PRISMIC_PageBodyBanner_project_detail {
                  type
                  label
                  primary {
                    name_category_of_project1
                  }
                }
                ... on PRISMIC_PageBodyBanner_our_work_page {
                  type
                  label
                  fields {
                    category_project_item {
                      ... on PRISMIC_Category_ourwork {
                        category_name
                        oder_in_menu
                        _meta {
                          uid
                        }
                      }
                    }
                  }
                  primary {
                    sub_title
                    title
                  }
                }
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
                ... on PRISMIC_PageBodyBig_text {
                  type
                  label
                  primary {
                    text
                  }
                }
                ... on PRISMIC_PageBodyCase_study_tiles {
                  type
                  label
                  fields {
                    link_details {
                      ... on PRISMIC_Projects {
                        name_category_of_project
                        project_name
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
                }
                ... on PRISMIC_PageBodyBlog_article_tiles {
                  type
                  fields {
                    post_item {
                      ... on PRISMIC_Post {
                        title
                        post_image
                        date_created
                        _meta {
                          uid
                        }
                      }
                    }
                  }
                }
                ... on PRISMIC_PageBodyFull_banner_a {
                  type
                  label
                  primary {
                    image_full_banner_a
                    title
                  }
                }
                ... on PRISMIC_PageBodyFull_banner_b {
                  type
                  label
                  primary {
                    background_color_full_banner_b
                    image_full_banner_b
                    title
                  }
                }
                ... on PRISMIC_PageBodyFull_width_text {
                  type
                  label
                }
                ... on PRISMIC_PageBodyGlobal_messing_bar {
                  type
                  label
                  primary {
                    link_title
                    message
                    mobile_message
                  }
                }
                ... on PRISMIC_PageBodyHalf_width_text {
                  type
                  label
                  primary {
                    leftBlock
                    rightBlock
                  }
                }
                ... on PRISMIC_PageBodyForm_submit {
                  type
                  label
                  fields {
                    placeholder
                    requied
                    type
                  }
                  primary {
                    title_contact_form
                  }
                }
                ... on PRISMIC_PageBodyTrust_logos_block {
                  type
                  label
                  fields {
                    logo
                  }
                  primary {
                    title
                  }
                }
                ... on PRISMIC_PageBodyVideo_modal {
                  type
                  label
                  fields {
                    video_modal {
                      _linkType
                      ... on PRISMIC__FileLink {
                        url
                      }
                    }
                  }
                  primary {
                    cta_button
                  }
                }
                ... on PRISMIC_PageBodyCta {
                  type
                  label
                  primary {
                    title
                    subtitle
                  }
                }
                ... on PRISMIC_PageBodyPortfolio {
                  type
                  label
                  fields {
                    content
                  }
                  primary {
                    title
                  }
                }
                ... on PRISMIC_PageBodyPlatform_trio {
                  type
                  primary {
                    title
                    content
                  }
                  #repeatable fields
                  fields {
                    platform
                    logo
                    description
                  }
                }
                ... on PRISMIC_PageBodyClient_logos {
                  type
                  fields {
                    logo
                  }
                  primary {
                    title
                  }
                }
                ... on PRISMIC_PageBodyWhat_we_do {
                  type
                  label
                  fields {
                    content
                    service
                    to_service {
                      _linkType
                    }
                  }
                  primary {
                    background_image_what_we_do
                    title
                  }
                }
                ... on PRISMIC_PageBodyProject_tilesq {
                  type
                  label
                  fields {
                    project {
                      ... on PRISMIC_Projects {
                        name_category_of_project
                        project_name
                        _meta {
                          uid
                        }
                        relationship_to_project_category {
                          ... on PRISMIC_Category_ourwork {
                            _meta {
                              uid
                            }
                          }
                        }
                        project_header_image
                      }
                    }
                  }
                }
                ... on PRISMIC_PageBodySocical_icons {
                  type
                  label
                  fields {
                    icon_image
                  }
                }
                ... on PRISMIC_PageBodySlider_image {
                  type
                  label
                  fields {
                    slider_image
                  }
                }
                ... on PRISMIC_PageBodySlide_show_banner_ {
                  type
                  label
                  fields {
                    item_image
                  }
                  primary {
                    background_slide_show_banner
                    title
                  }
                }
                ... on PRISMIC_PageBodyServices_item {
                  type
                  label
                  fields {
                    service_sub_title
                  }
                  primary {
                    title_service_item
                  }
                }
                ... on PRISMIC_PageBodyProject_short_description {
                  type
                  label
                  fields {
                    project_short_description
                  }
                }
                ... on PRISMIC_PageBodyProject_tiles {
                  type
                  label
                  fields {
                    project_item {
                      ... on PRISMIC_Projects {
                        name_category_of_project
                        project_name
                        _meta {
                          uid
                        }
                        relationship_to_project_category {
                          ... on PRISMIC_Category_ourwork {
                            _meta {
                              uid
                            }
                          }
                        }
                        project_header_image
                      }
                    }
                  }
                }

                ... on PRISMIC_PageBodyCta_buton {
                  type
                  label
                  primary {
                    background_color_button
                    border_button_color
                    button_text_color
                    display_desktop_or_mobile
                    text_button
                  }
                }
                ... on PRISMIC_PageBodyHappy_clients {
                  type
                  label
                  primary {
                    title_happy_client
                  }
                  fields {
                    logo_client
                    qoute_of_client
                    sub_title
                    title
                  }
                }
                ... on PRISMIC_PageBodyConnect_instagram {
                  type
                  label
                  primary {
                    access_token
                    title
                  }
                }
                ... on PRISMIC_PageBodyFeatured_posts {
                  type
                  label
                  primary {
                    title
                    messaging
                  }
                  fields {
                    posts {
                      _linkType
                      ... on PRISMIC_Post {
                        title
                        post_image
                        _meta {
                          uid
                        }
                      }
                    }
                  }
                }
                ... on PRISMIC_PageBodyTwo_columns_a {
                  type
                  label
                  primary {
                    background_image_side_left
                    image_side_left
                    image_side_right
                    title
                  }
                }
                ... on PRISMIC_PageBodyTwo_columns_b {
                  type
                  label
                  primary {
                    background_image_side_right
                    image_side_right
                    image_sile_left
                    title
                  }
                }
                ... on PRISMIC_PageBodyTwo_columns_c {
                  type
                  label
                  primary {
                    background_image_side_left
                    image_side_left
                    image_side_right
                    title
                  }
                }
                ... on PRISMIC_PageBodyList_launch_images {
                  type
                  fields {
                    image_item
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
                ... on PRISMIC_PageBodyList_post_category {
                  type
                  label
                  fields {
                    post_category {
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
                ... on PRISMIC_PageBodyPartner_details {
                  type
                  label
                  fields {
                    button_popup
                    description1
                    partner_logo
                    partner_name
                    partner_category {
                      ... on PRISMIC_Partner_category {
                        category_name
                        _meta {
                          uid
                        }
                      }
                    }
                    partner_logo
                    partner_name
                    partner_url {
                      ... on PRISMIC__ExternalLink {
                        url
                        target
                      }
                    }
                  }
                }
                ... on PRISMIC_PageBodyOur_services {
                  type
                  label
                  fields {
                    sub_title
                  }
                  primary {
                    title
                  }
                }
                ... on PRISMIC_PageBodyOne_image {
                  type
                  label
                  primary {
                    full_screen
                    image
                  }
                }
                ... on PRISMIC_PageBodyOffice_details_ {
                  type
                  label
                  primary {
                    address
                    office_phone_number
                    office_title
                    directions_link {
                      ... on PRISMIC__ExternalLink {
                        target
                        _linkType
                        url
                      }
                    }
                    google_maps_link {
                      _linkType
                      ... on PRISMIC__ExternalLink {
                        target
                        _linkType
                        url
                      }
                    }
                  }
                }
                ... on PRISMIC_PageBodyLists_category {
                  type
                  label
                  fields {
                    category_partner {
                      ... on PRISMIC_Partner_category {
                        category_name
                        _meta {
                          uid
                        }
                      }
                    }
                  }
                }
                ... on PRISMIC_PageBodyClient_logo_grid {
                  type
                  fields {
                    images
                  }
                }
                ... on PRISMIC_PageBody_partner_feature_tile {
                  type
                  fields {
                    logo
                    subtitle
                    text
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
                ... on PRISMIC_PageBodyInstagram_launch {
                  type
                  label
                  fields {
                    image_slice
                  }
                }
                ... on PRISMIC_PageBodyList_image {
                  type
                  label
                  fields {
                    image_item
                    location
                    order
                    width_image
                  }
                }
                ... on PRISMIC_PageBodyList_cta_button {
                  type
                  label
                  fields {
                    color_background_button
                    color_border_button
                    color_text_button
                    display_button
                    text_button
                  }
                }
                ... on PRISMIC_PageBodyJust_launched {
                  type
                  label
                  fields {
                    image_launched
                  }
                  primary {
                    title
                  }
                }
                ... on PRISMIC_PageBodyFull_width_image {
                  type
                  label
                  fields {
                    image
                  }
                }
                ... on PRISMIC_PageBodyImage_grid_portrait {
                  type
                  label
                  fields {
                    image_grid_portrait
                  }
                }
                ... on PRISMIC_PageBodyWhat_we_do_item {
                  type
                  label
                  primary {
                    location_content
                    location_image
                    what_we_do_description
                    what_we_do_image
                    what_we_do_title
                  }
                }
                ... on PRISMIC_PageBodyList_projects_to_show {
                  type
                  label
                  fields {
                    project_item {
                      ... on PRISMIC_Projects {
                        name_category_of_project
                        project_name
                        _meta {
                          uid
                        }
                        project_header_image
                        relationship_to_project_category {
                          ... on PRISMIC_Category_ourwork {
                            _meta {
                              uid
                            }
                          }
                        }
                      }
                    }
                  }
                  primary {
                    number_projects_want_show
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
                ... on PRISMIC_PageBodySection_solution {
                  type
                  label
                  fields {
                    title_the_solution
                  }
                  primary {
                    text_description
                    title
                  }
                }
                ... on PRISMIC_PageBodyTitle_banner_blog {
                  type
                  label
                  fields {
                    big_title1
                    title_banner
                  }
                }
                ... on PRISMIC_PageBodyTitle_404 {
                  type
                  label
                  primary {
                    heading_text
                    paragraph_text
                    url_button
                  }
                }
                ... on PRISMIC_PageBodyTitle_banner {
                  type
                  label
                  fields {
                    big_title1
                    title_banner
                  }
                }
                ... on PRISMIC_PageBodyThree_columns {
                  type
                  label
                  primary {
                    background_image_side_left
                    background_image_side_right
                    enter_title
                    image_center
                    image_side_left
                    image_side_right
                  }
                }
                ... on PRISMIC_PageBodyText_with_bullet_list {
                  type
                  label
                  fields {
                    bullet_list_left
                    bullet_list_middle
                    bullet_list_right
                    content
                    title
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
                ... on PRISMIC_PageBodyStatistical_project {
                  type
                  label
                  fields {
                    description_of_statistical
                    number_of_statistical
                  }
                }
                ... on PRISMIC_PageBodyQuote {
                  type
                  label
                  primary {
                    name_of_the_author
                    portrait_author
                    quote
                  }
                }
                ... on PRISMIC_PageBodyImage_grid_landscape {
                  type
                  label
                  fields {
                    image_grid
                  }
                }
                ... on PRISMIC_PageBodyImage_with_side_text {
                  type
                  label
                  primary {
                    image
                    text
                  }
                }
                ... on PRISMIC_PageBodyContent_section {
                  type
                  label
                  fields {
                    logo_client
                    qoute_of_client
                    sub_title
                    title
                  }
                }
                ... on PRISMIC_PageBodyFeature_text_with_description {
                  type
                  label
                  primary {
                    big_text
                    text_description
                  }
                }
                ... on PRISMIC_PageBodyFeature_text_with_image {
                  type
                  label
                  fields {
                    image_side
                    text_description
                    text_read_more
                    text_title
                  }
                }
                ... on PRISMIC_PageBodyFeautured_ {
                  type
                  label
                  fields {
                    image_feautured
                    sub_image
                    title_image
                  }
                  primary {
                    title
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  pagesResult.data?.prismic?.allPages?.edges?.map(page => {
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
