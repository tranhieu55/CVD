import { graphql, useStaticQuery, Link } from "gatsby"
import React from "react"

import Layout from "../components/Layout"
import IMG from "../components/Image"
import styled from "styled-components"

const DivIMG = styled.div`
  overflow: hidden;
  img:hover {
    opacity: 0.5;
  }
`

const Partners = props => {
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
  console.log("alo123", data)
  const dataPartners =
    data.prismic.allPartners_pages.edges?.[0].node.body[1].fields
  console.log("hieutt", dataPartners)
  return (
    <Layout location="/partners">
      <div className="container">
        <div className="row">
          {dataPartners.map((node, index) => (
            <div className="col-sm-6  col-md-3">
              <DivIMG
                as={Link}
                to={node.partner_url.url}
                target={node.partner_url.target}
              >
                <IMG src={node.partner_logo.url} alt={node.partner_logo.alt} />
              </DivIMG>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Partners
