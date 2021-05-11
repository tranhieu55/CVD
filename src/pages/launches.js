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

  console.log({ data })

  const dataSEO = data.prismic.allLaunches_pages.edges[0].node
  //   const dataHeading =
  //     data.prismic.allNotfound_pages.edges[0].node.heading_text[0].text
  //   const dataHeadingText =
  //     data.prismic.allNotfound_pages.edges[0].node.paragraph_text[0].text
  //   const dataButton =
  //     data.prismic.allNotfound_pages.edges[0].node.url_button[0].text

  return (
    <Layout location="/launches">
      <SEO props={dataSEO} />
      <LaunchesContents input={dataSEO} />
    </Layout>
  )
}

export default Launches
