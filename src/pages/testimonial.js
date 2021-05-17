import React from "react"
import Banner from "../components/Banner/BannerTestimonial"
import Layout from "../components/Layout"
import SliceZone from "../utils/SliceZone"

export default function Testimonial({ data: { prismic } }) {
  const data =
    prismic && prismic.allHappy_client_happy_life_pages?.edges[0]?.node
      ? prismic.allHappy_client_happy_life_pages?.edges[0]?.node
      : []
  const Title = data
    ? data.title_description?.map(item => (item.text ? item.text : ""))
    : ""
  const SubTitle = data
    ? data.small_text?.map(item => (item.text ? item.text : ""))
    : ""

  return (
    <Layout location="/testimonial">
      <Banner title={Title} subTitle={SubTitle}></Banner>
      <SliceZone allSlices={data.body} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query ColumTestimonialQuery {
    prismic {
      allHappy_client_happy_life_pages {
        edges {
          node {
            title_description
            small_text
            body {
              ... on PRISMIC_Happy_client_happy_life_pageBodyContent_section {
                type
                label
                fields {
                  logo_client
                  qoute_of_client
                  sub_title
                  title
                }
              }
            }
          }
        }
      }
    }
  }
`
