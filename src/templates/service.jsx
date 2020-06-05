import React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import SEO from "../components/utilities/SEO"
import SliceZone from "../utils/SliceZone"

const Service = ({ data: { prismic } }) => {
  console.log("prismic", prismic)
  const data = prismic.service
  const title = data.page_title[0].text
  const content = data.page_description

  return (
    <React.Fragment>
      <SEO props={data} />
      <h1>{title}</h1>
      <div>{RichText.render(content)}</div>
      <SliceZone allSlices={data.body} />
    </React.Fragment>
  )
}

export default Service

export const pageQuery = graphql`
  query ServiceBySlug($uid: String!) {
    prismic {
      service(uid: $uid, lang: "en-gb") {
        page_title
        _meta {
          uid
          id
          firstPublicationDate
          tags
          type
        }
        meta_description
        meta_title
        page_description
        keywords
        body {
          ... on PRISMIC_ServiceBodyBig_image {
            type
            label
            primary {
              big_image
            }
          }
        }
      }
    }
  }
`
