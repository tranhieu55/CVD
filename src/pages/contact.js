import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/Layout"
import SliceZone from "../utils/SliceZone"
import Banner from "../components/Banner/BannerContact"

export default function Contact({ data: { prismic } }) {
  const data = prismic && prismic.allContact_pages?.edges[0]?.node ? prismic.allContact_pages?.edges[0]?.node : [];
  const Title = data && data.page_title?.map(item => item?.text ? item?.text : item) ;
  const ContentPage = data && data.page_content ? data.page_content : "";
  const Buttonss = data && data.button_link_label?.map(item => item?.text ? item?.text : "");
  const PhonesNumber = data && data.phone_number?.map(item => item?.text ? item?.text : "");
  return (
    <Layout location="/contact">
      <Banner
        title={Title}
        content={ContentPage}
        button={Buttonss}
        Phones={PhonesNumber}
      ></Banner>
      <SliceZone allSlices={data.body} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query ContactQuery {
    prismic {
      allContact_pages {
        edges {
          node {
            _linkType
            phone_number
            page_title
            page_content
            office_block_title
            meta_title
            meta_description
            keywords
            button_link_label
            body {
              ... on PRISMIC_Contact_pageBodyDirections {
                type
                label
                primary {
                  title
                }
                fields {
                  address
                  office_phone_number
                  office_title
                  directions_link {
                    ... on PRISMIC__ExternalLink {
                      target
                      _linkType
                      url
                    }
                  }
                  google_maps_link {
                    ... on PRISMIC__ExternalLink {
                      _linkType
                      url
                    }
                  }
                }
              }
              ... on PRISMIC_Contact_pageBodyForm_submit {
                type
                label
                fields {
                  placeholder
                  requied
                  type
                }
                primary {
                  title_contact_form
                }
              }
            }
          }
        }
      }
    }
  }
`
