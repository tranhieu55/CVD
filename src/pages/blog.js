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
                ... on PRISMIC_Post_listing_pageBodyBlog_article_tiles {
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
              }
            }
          }
        }
      }
    }
  `)
  const dataBlog =
    data && data.prismic.allPost_listing_pages.edges[0]?.node
      ? data.prismic.allPost_listing_pages.edges[0]?.node
      : []

  return (
    <Layout location="/pageblog">
      <SEO props={data} />
      <SliceZone allSlices={dataBlog.body} />
    </Layout>
  )
}

export default PageBlog
