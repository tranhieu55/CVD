import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/utilities/SEO"
import SliceZone from "../utils/SliceZone"

const NotFoundPage = ({ input }) => {
  const data = useStaticQuery(graphql`
    query QueryNotFound {
      prismic {
        allPage_404s {
          edges {
            node {
              _meta {
                uid
              }
              body {
                ... on PRISMIC_Page_404BodyTitle {
                  type
                  label
                  primary {
                    heading_text
                    paragraph_text
                    text_featured
                    url_button
                  }
                }
                ... on PRISMIC_Page_404BodyCase_studi_tiles_404 {
                  type
                  label
                  fields {
                    link_case_study {
                      ... on PRISMIC_Projects {
                        name_category_of_project
                        project_name
                        project_header_image
                        relationship_to_project_category {
                          ... on PRISMIC_Category_ourwork {
                            category_name
                            oder_in_menu
                            _meta {
                              uid
                            }
                          }
                        }
                        _meta {
                          uid
                        }
                      }
                    }
                  }
                }
                ... on PRISMIC_Page_404Body_accordion {
                  type
                  label
                  fields {
                    application
                    content_footer
                    content_footer2
                    content_text
                    content_text_after
                    content_title
                    content_title_center
                    email
                    sub_title
                    title
                  }
                }
                ... on PRISMIC_Page_404Body_partner_feature_tile {
                  type
                  label
                  fields {
                    link_page
                    logo
                    subtitle
                    text
                  }
                }
                ... on PRISMIC_Page_404Body3_column_profiles {
                  type
                  label
                  fields {
                    avatar
                    description
                    name
                    position
                  }
                }
                ... on PRISMIC_Page_404BodyBanner_casestudy {
                  type
                  label
                  primary {
                    description_banner
                    title_banner
                  }
                }
                ... on PRISMIC_Page_404BodyBanner_partner_page {
                  type
                  label
                  fields {
                    category_partner_banner {
                      ... on PRISMIC_Category_ourwork {
                        _meta {
                          uid
                        }
                      }
                    }
                  }
                  primary {
                    description_banner
                    title_banner
                  }
                }
                ... on PRISMIC_Page_404BodyBanner_post_details {
                  type
                  label
                  primary {
                    date_created1
                    title_banner
                  }
                }
                ... on PRISMIC_Page_404BodyBanner_what_we_do {
                  type
                  label
                  primary {
                    description_banner
                    sub_title_banner
                    title_banner
                  }
                }
                ... on PRISMIC_Page_404BodyBanner_work_with_convert {
                  type
                  label
                  primary {
                    description_banner
                    sub_title_banner
                    title_banner
                  }
                }
                ... on PRISMIC_Page_404BodySection_solution {
                  type
                  label
                  fields {
                    title_the_solution
                  }
                  primary {
                    text_description
                    title
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const dataSEO = data?.prismic?.allPage_404s?.edges[0]?.node
  const dataTitle = data?.prismic?.allPage_404s?.edges[0]?.node?.body?.filter(
    item => (item.type ? item.type === "title" : [])
  )

  const dataCaseStudies = data.prismic.allPage_404s.edges[0].node.body

  return (
    <Layout location="/404">
      <SEO props={dataSEO} />
      <Box>
        <Wrapper>
          <Heading>
            {dataTitle?.map(item =>
              item.primary.heading_text?.map(el => (el.text ? el.text : ""))
            )}
          </Heading>
          <HeadingText>
            {dataTitle?.map(item =>
              item.primary.paragraph_text?.map(el => (el.text ? el.text : ""))
            )}
          </HeadingText>
          <Button href="/">
            {dataTitle?.map(item =>
              item.primary.url_button?.map(el => (el.text ? el.text : ""))
            )}
          </Button>
          <CaseStudiHeading>
            {dataTitle?.map(item =>
              item.primary.text_featured?.map(el => (el.text ? el.text : ""))
            )}
          </CaseStudiHeading>
        </Wrapper>
        <SliceZone allSlices={dataCaseStudies} />
      </Box>
    </Layout>
  )
}

export default NotFoundPage

// style
const Box = styled.div`
  background-color: #f8f8f8;
`
const Wrapper = styled.div`
  padding-top: 247px;
  background-color: #f8f8f8;

  @media (max-width: 600px) {
    padding-top: 109px;
  }
`
const Heading = styled.h2`
  margin: 0 auto;
  color: #101010;
  font-family: Calibre Bold;
  font-size: 64px;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 56px;
  margin-bottom: 20px;
  text-align: center;
  padding-left: 15px;
  padding-right: 15px;

  @media (max-width: 600px) {
    font-size: 40px;
    line-height: 38px;
    margin-bottom: 14px;
    padding-left: 40px;
    padding-right: 37px;
  }
`
const HeadingText = styled.p`
  color: #222222;
  font-family: Calibre Regular;
  font-size: 18px;
  letter-spacing: 0;
  line-height: 24px;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 47px;
  text-align: center;

  @media (max-width: 600px) {
    margin-bottom: 23px;
  }
`
const Button = styled.a`
  display: block;
  padding-top: 18px;
  padding-bottom: 18px;
  margin: 0 auto;
  height: 48px;
  width: 142px;
  border-radius: 3px;
  background-color: #fecf09;
  color: #101010;
  font-family: Calibre Semibold;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 18px;
  text-align: center;

  &:hover,
  &:active,
  &:focus,
  &:visited {
    color: #101010;
    text-decoration: none;
  }
`
const CaseStudiHeading = styled.h4`
  color: #101010;
  font-family: Calibre Semibold;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.5px;

  line-height: 32px;
  text-align: center;
  margin-top: 141px;
  margin-bottom: 27px;

  @media (max-width: 600px) {
    margin-top: 43px;
    margin-bottom: 14px;
  }
`

const ListCaseStudy = styled.div`
  height: auto;
  margin: 0 180px;
  padding-bottom: 130px;

  @media (max-width: 1366px) {
    margin: 0 100px;
    padding-bottom: 100px;
  }
  @media (max-width: 1200px) {
    margin: 0 40px;
    padding-bottom: 80px;
  }
  @media (max-width: 768px) {
    margin: 0 20px;
    padding-bottom: 60px;
  }
  @media (max-width: 600px) {
    margin: 0 16px;
    padding-bottom: 55px;
    height: auto;
  }
`
const Row = styled.div`
  display: flex;
  height: 100%;

  img {
    width: 100%;
    object-fit: cover;
    position: relative;
  }
  @media (max-width: 600px) {
    display: block;
    margin-toop: 16px;
  }
  @media (min-width: 600px) {
    display: flex;
    margin-top: 16px;
  }
`
