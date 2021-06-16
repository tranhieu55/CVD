import React from "react"
import Layout from "../components/Layout"
import SliceZone from "../utils/SliceZone"

function Banner({ data: { prismic } }) {
  const data =
    prismic && prismic?.allPage_headerss?.edges[0]?.node
      ? prismic?.allPage_headerss?.edges[0]?.node
      : []

  return (
    <Layout location="/banner">
      <SliceZone allSlices={data.body} location={"/banner"} />
    </Layout>
  )
}
export default Banner

export const pageQuery = graphql`
  query Banner {
    prismic {
      allPage_headerss {
        edges {
          node {
            body {
              ... on PRISMIC_Page_headersBodyBanner_casestudy {
                type
                label
                primary {
                  description_banner
                  title_banner
                  color_sub_title
                  color_text
                  color_ttitle
                }
              }
              ... on PRISMIC_Page_headersBodyBanner_about {
                type
                label
                primary {
                  description_banner
                  title_banner
                  image_banner
                  color_sub_title
                  color_text
                  color_title
                }
              }
              ... on PRISMIC_Page_headersBodyBanner_work_with_convert {
                type
                label
                primary {
                  description_banner
                  sub_title_banner
                  title_banner
                  iamge_banner
                  color_title
                  color_text
                  color_sub_title
                }
              }
              ... on PRISMIC_Page_headersBodyBanner_icon {
                type
                label
                fields {
                  image_banner
                  sub_title
                  title
                  image_banner
                }
              }
              ... on PRISMIC_Page_headersBodyBanner_partner_page {
                type
                label
                fields {
                  category_partner_banner {
                    ... on PRISMIC_Partner_category {
                      category_name
                      _meta {
                        uid
                      }
                    }
                  }
                }
                primary {
                  description_banner
                  title_banner
                  image_banner
                  color_sub_title
                  color_text
                  color_title
                }
              }
              ... on PRISMIC_Page_headersBodyBanner_post_details {
                type
                label
                primary {
                  date_created1
                  title_banner
                  image_banner
                  color_subTitle
                  color_text
                  color_title
                }
              }
              ... on PRISMIC_Page_headersBodyBanner_project_detail {
                type
                label
                primary {
                  name_category_of_project1
                  project_description1
                  project_header_image1
                  project_name_banner
                  project_logo1
                  color_sub_title
                  color_text
                  color_title
                }
              }
              ... on PRISMIC_Page_headersBodyBanner_our_work_page {
                type
                label
                fields {
                  category_project_item {
                    ... on PRISMIC_Category_ourwork {
                      category_name
                      oder_in_menu
                      _meta {
                        uid
                      }
                    }
                  }
                }
                primary {
                  image_banner
                  sub_title
                  title
                  color_sub_title
                  color_text
                  color_title
                }
              }
              ... on PRISMIC_Page_headersBodyBanner_what_we_do {
                type
                label
                primary {
                  description_banner
                  sub_title_banner
                  title_banner
                  image_banner
                  color_sub_title
                  color_text
                  color_title
                }
              }
            }
          }
        }
      }
    }
  }
`
