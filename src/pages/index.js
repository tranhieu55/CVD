import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import SEO from "../components/utilities/SEO"
import SliceZone from "../utils/SliceZone"
import { Link } from "gatsby"
import Instagrams from '../components/slices/Homepage/Instargram';
import OurServices from "../components/slices/Homepage/OurService"

const Index = ({ data: { prismic } }) => {
  const data = prismic.allHomepages.edges[0].node
  const title = data.page_title[0].text
  const background_image = data.background_image.url
  console.log(data.body)
  return (
    <Layout location="/">
      <SEO props={data} location="/" />
      <Container>
      <ImageBanner src={background_image}></ImageBanner>
        <TextBanner>
          <Title>{data.page_title[0].text}</Title>
        {data.body[0].fields.map((item, index)=>{
          return(
            <ButtonBanner key={index} 
              background={item.color_background_button}
              border = {item.color_border_button}
              textColor = {item.color_text_button}
              vitri = {index}
            >
            {item.text_button[0].text}
          </ButtonBanner>
          )
        })}
        </TextBanner>
      </Container>
      <SliceZone allSlices={data.body} />
      <OurServices />
    </Layout>
  )
}

export default Index

//styles

const Title = styled.h1`
height: 275px;
width: 659px;
color: #FFFFFF;
font-family: Calibre Bold;
font-size: 104px;
font-weight: bold;
letter-spacing: -0.5px;
line-height: 88px;
  @media (max-width: 769px) {
    font-size: 3rem;
    margin: 0;
  }
  @media(max-width: 600px){
    height: 139px;
  width: 301px;
  color: #FFFFFF;
  font-family: Calibre Bold;
  font-size: 52px;
  font-weight: bold;
  letter-spacing: -0.5px;
  line-height: 44px;
  }
`

const Container = styled.div`
  height: 798px;
  width: 100%;
 position: realative;
  @media (max-width: 769px) {
    display: block;
    height: auto;
  }
  @media (max-width: 600px){
    height: 614px;
    width: 100%;
  }
`
const ImageBanner = styled.img`
  height: 100%;
  width: 100%;
  z-index: 0; 
  object-fit: cover;
  @media (max-width: 600px){
    object-fit: cover;
  }
`


const ButtonBanner = styled.button`
  margin-right: 24px;
  height: 48px;
  width: 148px;
  background: ${props => props.background ? props.background : 'transparent' };
  border: 3px solid ${props => props.border};
  color: ${props => props.textColor};
  border-radius : 3px;
  @media(max-width: 600px){
    height: 48px;
    width: 132px;
    margin-right:${props => props.vitri == 0 ? '16px' : '0px' };
  }
`
const TextBanner = styled.div`
  height: 355px;
  width: 659px;
  position: absolute;
  top: 225px;
  padding-left: 167px;
  z-index: 1;
  @media(max-width: 600px){
    height: 206px;
    width: 320px;
    top: 204px;
    padding-left: 24px;
  }
`

export const pageQuery = graphql`
  query IndexQuery {
    prismic {
      allHomepages {
        edges {
          node {
            page_title
            background_image
            #seo
            meta_title
            meta_description
            keywords
            body {
              ... on PRISMIC_HomepageBodyCta {
                type
                label
                primary {
                  title
                  subtitle
                }
              }
              ... on PRISMIC_HomepageBodyPlatform_trio {
                type
                primary {
                  title
                  content
                }
                #repeatable fields
                fields {
                  platform
                  logo
                  description
                }
              }
              ... on PRISMIC_HomepageBodyClient_logos {
                type
                fields {
                  logo
                }
                primary {
                  title
                }
              }
              ... on PRISMIC_HomepageBodyBig_text {
                type
                primary {
                  text
                }
              }
              ... on PRISMIC_HomepageBodyWhat_we_do {
                type
                primary {
                  title
                }
                fields {
                  service
                  content
                  to_service {
                    _linkType
                  }
                }
              }
              ... on PRISMIC_HomepageBodyProject_tilesq {
                type
                label
                fields {
                  project_item {
                    ... on PRISMIC_Projects {
                      name_category_of_project
                      project_name
                      _meta {
                        uid
                      }
                      relationship_to_project_category {
                        ... on PRISMIC_Category_ourwork {
                          _meta {
                            uid
                          }
                        }
                      }
                      project_header_image
                    }
                  }
                }
              }

              ... on PRISMIC_HomepageBodyCta_button {
                fields {
                  color_background_button
                  color_border_button
                  color_text_button
                  display_button
                  text_button
                }
                label
                type
              }
              ... on PRISMIC_HomepageBodyHappy_clients {
                type
                label
                primary {
                  title_happy_client
                }
                fields {
                  logo_client
                  qoute_of_client
                  sub_title
                  title
                }
              }
              ... on PRISMIC_HomepageBodyConnect_instagram {
                type
                label
                primary {
                  access_token
                  title
                }
              }
              ... on PRISMIC_HomepageBodyFeatured_posts {
                type
                label
                primary {
                  title
                  messaging
                }
                fields {
                  posts {
                    _linkType
                    ... on PRISMIC_Post {
                      title
                      post_image
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
