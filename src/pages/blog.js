import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import Layout from "../components/Layout"
import SliceZone from "../utils/SliceZone"
import SEO from "../components/utilities/SEO"

const PageBlog = () => {
  const data = useStaticQuery(graphql`
    query {
      prismic {
        allPost_listing_pages {
          edges {
            node {
              title
              big_title
              meta_title
              meta_description
              keywords
              body {
                ... on PRISMIC_Post_listing_pageBodyList_post_category {
                  fields {
                    post_category {
                      ... on PRISMIC_Post_category {
                        title
                        _meta {
                          uid
                        }
                      }
                    }
                  }
                  type
                }
                ... on PRISMIC_Post_listing_pageBodyList_post {
                  type
                  fields {
                    post_item {
                      ... on PRISMIC_Post {
                        title
                        post_image
                        _meta {
                          uid
                        }
                        date_created
                        post_category {
                          ... on PRISMIC_Post_category {
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
          }
        }
      }
    }
  `)
  console.log({ data })
  const dataBlog = data && data.prismic.allPost_listing_pages.edges[0]?.node ? data.prismic.allPost_listing_pages.edges[0]?.node : [];
  return (
    <Layout location="/pageblog">
      <SEO props={data} />
      <SliceZone allSlices={dataBlog.body} />
    </Layout>
  )
}

export default PageBlog
