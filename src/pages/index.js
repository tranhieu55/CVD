import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import SEO from "../components/utilities/SEO"
import SliceZone from "../utils/SliceZone"
import OurServices from "../components/slices/Homepage/OurService"
import GlobalMessage from "../components/GlobalMessage"
import ModalVideo from "../components/ModalVideo"
import Modal from "../components/ModalContact"

import { useState } from "react"

const Index = ({ data: { prismic } }, e) => {
  const data =
    prismic && prismic.allHomepages?.edges[0]?.node
      ? prismic.allHomepages?.edges[0]?.node
      : []
  const background_image_desktop =
    data && data.background_image?.desktop?.url
      ? data.background_image?.desktop?.url
      : ""
  const background_image_mobile =
    data && data.background_image?.mobile?.url
      ? data.background_image?.mobile?.url
      : ""
  console.log("hieutt", data.body[0])
  const [showModal, setShowModal] = useState(false)
  const openModal = () => {
    setShowModal(prev => !prev)
  }
  const [value, setValue] = useState()
  const parentCallback = data => {
    setValue(data)
  }
  const [showModal01, setShowModal01] = useState(false)
  const openModal01 = () => {
    setShowModal01(prev => !prev)
  }
  return (
    <>
      <GlobalMessage parentCallback={parentCallback} />
      <Layout location="/" parentCallback={value}>
        <SEO props={data} location="/" />
        <Container>
          <ImageBannerDK src={background_image_desktop}></ImageBannerDK>
          <ImageBannerMB src={background_image_mobile}></ImageBannerMB>
          <TextBanner>
            <Title>{data.page_title[0]?.text}</Title>
            <Buttons>
              {data.body[1]?.fields?.map((item, index) => {
                return (
                  <ButtonBanner
                    key={index}
                    vitri={index}
                    onClick={index === 1 ? openModal : openModal01}
                  >
                    {item.text_button[0]?.text}
                  </ButtonBanner>
                )
              })}
            </Buttons>
          </TextBanner>
          <ModalVideo
            showModal={showModal}
            setShowModal={setShowModal}
            openModal={openModal}
            dataVideo={data.body[0]}
          />
          <Modal
            showModal={showModal01}
            setShowModal={setShowModal01}
            openModal={openModal01}
          />
        </Container>
        <SliceZone allSlices={data.body} />
        <OurServices />
      </Layout>
    </>
  )
}

export default Index

//styles

const Title = styled.h1`
  height: 275px;
  width: 659px;
  color: #ffffff;
  font-family: Calibre Bold;
  font-size: 104px;
  font-weight: bold;
  letter-spacing: -0.5px;
  line-height: 88px;
  @media (min-width: 600px) {
    height: auto;
    width: 100%;
    color: #ffffff;
    font-family: Calibre Bold;
    font-size: 48px;
    font-weight: bold;
    letter-spacing: -0.5px;
    line-height: 44px;
    padding-top: 11px;
  }
  @media (min-width: 768px) {
    font-size: 52px;
  }
  @media (max-width: 600px) {
    height: auto;
    width: 301px;
    color: #ffffff;
    font-family: Calibre Bold;
    font-size: 49px;
    font-weight: bold;
    letter-spacing: -0.5px;
    line-height: 44px;
    padding-top: 11px;
  }
  @media (max-width: 360px) {
    width: 100%;
    font-size: 43px;
  }
  @media (min-width: 1024px) {
    font-size: 66px;
    height: auto;
    width: 419px;
    line-height: 57px;
  }
  @media (min-width: 1366px) {
    height: 275px;
    width: 659px;
    color: #ffffff;
    font-family: Calibre Bold;
    font-size: 104px;
    font-weight: bold;
    letter-spacing: -0.5px;
    line-height: 88px;
  }
`

const Container = styled.div`
  height: 798px;
  width: 100%;
  position: realative;
  @media (min-width: 600px) {
    display: block;
    height: auto;
  }
  @media (max-width: 600px) {
    margin-top: -72px;
    height: 707px;
    width: 100%;
  }
`
const ImageBannerDK = styled.img`
  height: 100%;
  width: 100%;
  z-index: 0;
  object-fit: cover;
  @media (max-width: 600px) {
    display: none;
  }
`
const ImageBannerMB = styled.img`
  @media (max-width: 600px) {
    height: 100%;
    width: 100%;
    z-index: 0;
    object-fit: cover;
    clip-path: polygon(0 0, 100% 0, 100% 88%, 0% 97%);
  }
  @media (min-width: 601px) {
    display: none;
  }
`

const ButtonBanner = styled.button`
  margin-right: 24px;
  height: 48px;
  width: 148px;
  background: transparent;
  border: 2px solid #fecf09;
  color: #ffffff;
  border-radius: 3px;
  font-family: "Calibre Semibold";
  font-size: 18px;
  font-weight: 600;
  padding-top: 5px;
  :focus {
    outline: none;
  }
  :hover {
    color: #222222;
    background: #fecf09;
    border: 2px solid #fecf09;
  }
  background-color: ${props => (props.vitri === 0 ? "#fecf09" : "transparent")};
  color: ${props => (props.vitri === 0 ? "#222222" : "#ffffff")};
  @media (max-width: 600px) {
    margin-right: ${props => (props.vitri === 0 ? "16px" : "0px")};
    width: ${props => (props.vitri === 1 ? "156px" : "148px")};
  }
  @media (max-width: 360px) {
    margin-right: ${props => (props.vitri === 0 ? "12px" : "0px")};
    width: ${props => (props.vitri === 1 ? "130px" : "130px")};
  }
  @media (min-width: 600px) {
    width: ${props => (props.vitri === 1 ? "216px" : "200px")};
    padding: 5px 6px 0px;
  }
  @media (min-width: 1366px) {
    margin-right: 24px;
    height: 48px;
    width: 148px;
    border: 2px solid #fecf09;
    border-radius: 3px;
  }
`
const TextBanner = styled.div`
  height: 355px;
  width: 659px;
  position: absolute;
  top: 273px;
  padding-left: 167px;
  z-index: 1;
  @media (max-width: 600px) {
    height: auto;
    width: 345px;
    top: 204px;
    padding-left: 24px;
  }
  @media (max-width: 360px) {
    width: 280px;
  }
  @media (min-width: 600px) {
    padding-left: 50px;
    top: 124px;
    height: auto;
    width: 445px;
  }
  @media (min-width: 1024px) {
    padding-left: 50px;
    top: 170px;
    height: auto;
    width: 469px;
  }
  @media (min-width: 1366px) {
    height: 355px;
    width: 659px;
    position: absolute;
    top: 273px;
    padding-left: 167px;
    z-index: 1;
  }
`
const Buttons = styled.div`
  display: flex;
  margin-top: 18px;
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
              ... on PRISMIC_HomepageBodyVideo_modal {
                type
                label
                fields {
                  video_modal {
                    _linkType
                    ... on PRISMIC__FileLink {
                      url
                    }
                  }
                }
                primary {
                  cta_button
                }
              }
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
                label
                fields {
                  content
                  service
                  to_service {
                    _linkType
                  }
                }
                primary {
                  background_image_what_we_do
                  title
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
                      _meta {
                        uid
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      allProjectss {
        edges {
          node {
            body {
              ... on PRISMIC_ProjectsBodyTwo_columns_a {
                type
                label
                primary {
                  background_image_side_left
                  image_side_left
                  image_side_right
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
