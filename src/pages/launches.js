import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import LaunchesContents from "../components/slices/Homepage/Launches"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/utilities/SEO"
import CardProject from "../components/CardProject"

const Launches = ({ input }) => {
  const data = useStaticQuery(graphql`
    query QueryLaunches {
      prismic {
        allLaunches_pages {
          edges {
            node {
              title
              _meta {
                uid
              }
              body {
                ... on PRISMIC_Launches_pageBodyList_launch_images {
                  type
                  fields {
                    image_item
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const dataSEO = data.prismic.allLaunches_pages.edges[0].node

  return (
    <Layout location="/launches">
      <SEO props={dataSEO} />
      <LaunchesContents input={dataSEO} />
    </Layout>
  )
}

export default Launches
