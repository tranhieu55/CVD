import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/utilities/SEO"
import SliceZone from "../utils/SliceZone"
import OurServices from "../components/slices/Homepage/OurService"
import GlobalMessage from "../components/GlobalMessage"

import { useState } from "react"
import BannerHomepage from "../components/Banner/BannerHomePage"

const Index = ({ data: { prismic } }, e) => {
  const data =
    prismic && prismic.allHomepages?.edges[0]?.node
      ? prismic.allHomepages?.edges[0]?.node
      : []
  const [value, setValue] = useState()
  const parentCallback = data => {
    setValue(data)
  }

  return (
    <>
      <GlobalMessage parentCallback={parentCallback} />
      <Layout location="/" parentCallback={value}>
        <SEO props={data} location="/" />
        <BannerHomepage data={data} />
        <SliceZone allSlices={data.body} />
        <OurServices />
      </Layout>
    </>
  )
}

export default Index

//styles

export const pageQuery = graphql`
  query IndexQuery {
    prismic {
      allHomepages {
        edges {
          node {
            page_title
            background_image
            #seo
            meta_title
            meta_description
            keywords
            body {
              ... on PRISMIC_HomepageBodyTrust_logos_block {
                type
                label
                fields {
                  logo
                }
                primary {
                  title
                }
              }
              ... on PRISMIC_HomepageBodyVideo_modal {
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
              ... on PRISMIC_HomepageBodyCta {
                type
                label
                primary {
                  title
                  subtitle
                }
              }
              ... on PRISMIC_HomepageBodyPlatform_trio {
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
              ... on PRISMIC_HomepageBodyClient_logos {
                type
                fields {
                  logo
                  height
                  width
                }
                primary {
                  title
                }
              }
              ... on PRISMIC_HomepageBodyBig_text {
                type
                primary {
                  text
                }
              }
              ... on PRISMIC_HomepageBodyWhat_we_do {
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
              ... on PRISMIC_HomepageBodyProject_tilesq {
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

              ... on PRISMIC_HomepageBodyCta_button {
                fields {
                  color_background_button
                  color_border_button
                  color_text_button
                  display_button
                  text_button
                }
                label
                type
              }
              ... on PRISMIC_HomepageBodyHappy_clients {
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
              ... on PRISMIC_HomepageBodyConnect_instagram {
                type
                label
                primary {
                  access_token
                  title
                }
              }
              ... on PRISMIC_HomepageBodyFeatured_posts {
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
            }
          }
        }
      }
      allProjectss {
        edges {
          node {
            body {
              ... on PRISMIC_ProjectsBodyTwo_columns_a {
                type
                label
                primary {
                  background_image_side_left
                  image_side_left
                  image_side_right
                  title
                }
              }
            }
          }
        }
      }
    }
  }
`
