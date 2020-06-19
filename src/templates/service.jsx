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
        body {
          ... on PRISMIC_ServiceBodyBig_image {
            type
            label
            primary {
              big_image
            }
            fields {
              contentLarge
            }
          }
          ... on PRISMIC_ServiceBodyHalf_width_text {
            type
            label
            primary {
              text_left
              text_right
              title_left
              title_right
            }
          }
          ... on PRISMIC_ServiceBodyImage_with_side_text {
            type
            label
            primary {
              image
              text
              title
            }
          }
          ... on PRISMIC_ServiceBodyText_with_bullet_list {
            type
            label
            fields {
              bullet_list_left
              bullet_list_middle
              bullet_list_right
              content
              title
            }
          }
        }
        page_title
        page_description
        meta_title
        meta_description
        keywords
      }
    }
  }
`
