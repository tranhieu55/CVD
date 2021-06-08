import { graphql, useStaticQuery } from "gatsby"
import React, { memo } from "react"
import Layout from "../components/Layout"
import SliceZone from "../utils/SliceZone"
import SEO from "../components/utilities/SEO"

const Partners = () => {
  const data = useStaticQuery(graphql`
    query {
      prismic {
        allPartners_pages {
          edges {
            node {
              body {
                ... on PRISMIC_Partners_pageBodyPartner_details {
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
                ... on PRISMIC_Partners_pageBodyLists_category {
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
              }
            }
          }
        }
      }
    }
  `)
  const dataPartners =
    data && data.prismic?.allPartners_pages?.edges?.[0]?.node
      ? data.prismic?.allPartners_pages?.edges?.[0]?.node
      : []

  return (
    <Layout location="/partners">
      <SEO props={data} />
      <SliceZone allSlices={dataPartners.body} />
    </Layout>
  )
}

export default memo(Partners)
