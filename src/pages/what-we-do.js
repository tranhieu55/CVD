import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Interested from "../components/Interested"
import SEO from "../components/utilities/SEO"
import SliceZone from "../utils/SliceZone"

export const query = graphql`
  query whatWeDoQuery {
  prismic {
    allWhatwedo_pages {
      edges {
        node {
          body {
            ... on PRISMIC_Whatwedo_pageBodyWhat_we_do_item {
              label
              primary {
                location_content
                location_image
                what_we_do_description
                what_we_do_image
                what_we_do_title
              }
            }
          }
        }
      }
    }
  }
}
`
const WhatWeDo = (props) => {
  const data = props.data.prismic.allWhatwedo_pages.edges[0].node

  
  const dataSEO = props.data.prismic.allWhatwedo_pages.edges[0].node
  return (
    <Layout location="/we-do">
      <SEO props={dataSEO} />
      <SliceZone allSlices={data.body} />
    </Layout>
  )
}

export default WhatWeDo
