import React from "react"
import Layout from "../components/Layout"
import ListBlog from "../components/ListBlog"
import Interested from "../components/Interested"
import SEO from "../components/utilities/SEO"
import { graphql } from "gatsby"
import SliceZone from "../utils/SliceZone"

const Projects = ({ data: { prismic } }) => {
  const data = prismic.allOurwork_pages.edges[0].node

  return (
    <Layout location="/projects">
      <SEO props={data} />
      <SliceZone allSlices={data.body} />
    </Layout>
  )
}

export default Projects

export const pageQuery = graphql`
  query indexQuery {
    prismic {
      allOurwork_pages {
        edges {
          node {
            meta_title
            meta_description
            keywords
            body {
              ... on PRISMIC_Ourwork_pageBodyList_projects_to_show {
                type
                primary {
                  number_projects_want_show
                }
                fields {
                  project_item {
                    ... on PRISMIC_Projects {
                      name_category_of_project
                      project_name
                      relationship_to_project_category {
                        ... on PRISMIC_Category_ourwork {
                          _meta {
                            uid
                          }
                        }
                      }
                      project_header_image
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
`
