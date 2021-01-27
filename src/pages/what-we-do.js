import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Interested from "../components/Interested"
import SEO from "../components/utilities/SEO"
import SliceZone from "../utils/SliceZone"

export const query = graphql`
  query queryWhatWeDoPage {
    prismic {
    allWhatwedo_pages {
      edges {
        node {
          meta_title
          meta_description
          keywords
          body {
            ... on PRISMIC_Whatwedo_pageBodyWhat_we_do_item {
              fields {
                item_title
                item_image
                item_description
                location_content
                location_image
              }
              type
            }
          }
        }
      }
    }
  }
}
`
const WhatWeDo = ({ data }) => {
  console.log(data)
  const pageData = data.prismic.allWhatwedo_pages.edges[0].node.body[0]
  const dataSEO = data.prismic.allWhatwedo_pages.edges[0].node
  return (
    <Layout location="/we-do">
      <SEO props={dataSEO} />
      <SliceZone pageData={pageData} />
      <Interested />
    </Layout>
  )
}

export default WhatWeDo
