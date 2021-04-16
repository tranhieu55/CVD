import React from 'react';
import styled from "styled-components"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from '../components/Layout';
import SliceZone from '../utils/SliceZone';
import Banner from '../components/Banner/BannerContact';


export default function Contact({ data: { prismic } }) {
  const data = prismic.allContact_pages.edges[0].node;
  const Title = data.page_title.map(item => item.text);
  const ContentPage = data.page_content.map(item => item.text);
  const Buttonss =  data.button_link_label.map(item => item.text);
  const PhonesNumber = data.phone_number.map(item => item.text);
  
  return (
    <Layout location="/contact">
        <Banner title={Title} content={ContentPage} button={Buttonss} Phones={PhonesNumber}></Banner>
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
            body {
              ... on PRISMIC_Contact_pageBodyDirections {
                type
                label
                primary {
                  address
                  
                  office_phone_number
                  office_title
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
            button_link_label
            keywords
            meta_description
            meta_title
            office_block_title
            page_content
            page_title
            phone_number
          }
        }
      }
    }
  }
`
