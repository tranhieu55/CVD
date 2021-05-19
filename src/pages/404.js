import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/utilities/SEO"
import CardProject from "../components/CardProject"
import TwoColumnText from "../components/ColumnText"
import SliceZone from "../utils/SliceZone"

const NotFoundPage = ({ input }) => {
  const data = useStaticQuery(graphql`
    query QueryNotFound {
      prismic {
        allNotfound_pages {
          edges {
            node {
              url_button
              paragraph_text
              meta_title
              meta_description
              keywords
              heading_text
              body {
                ... on PRISMIC_Notfound_pageBody2_column_text {
                  type
                  label
                  primary {
                    text_side_left
                    text_side_right
                  }
                }
                ... on PRISMIC_Notfound_pageBodyCase_studies_are_shown {
                  type
                  fields {
                    project_item {
                      ... on PRISMIC_Projects {
                        name_category_of_project
                        project_name
                        project_header_image
                        relationship_to_project_category {
                          ... on PRISMIC_Category_ourwork {
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
              }
            }
          }
        }
      }
    }
  `)

  const dataSEO = data.prismic.allNotfound_pages.edges[0].node
  const dataHeading =
    data.prismic.allNotfound_pages.edges[0].node.heading_text[0].text
  const dataHeadingText =
    data.prismic.allNotfound_pages.edges[0].node.paragraph_text[0].text
  const dataButton =
    data.prismic.allNotfound_pages.edges[0].node.url_button[0].text
  const dataCaseStudies =
    data.prismic.allNotfound_pages.edges[0].node.body[0].fields
  const dataTextTwoColumn = data.prismic.allNotfound_pages.edges[0].node

  return (
    <Layout location="/404">
      <SEO props={dataSEO} />
      <Wrapper>
        <Heading>{dataHeading}</Heading>
        <HeadingText>{dataHeadingText}</HeadingText>
        <Button href="/">{dataButton}</Button>
        <CaseStudiHeading>Featured case studies</CaseStudiHeading>
        <ListCaseStudy>
          <Row>
            {dataCaseStudies.map((element, index) => (
              <CardProject key={index} resize={true} input={element} />
            ))}
          </Row>
        </ListCaseStudy>
      </Wrapper>
      <SliceZone allSlices={dataTextTwoColumn.body} />
    </Layout>
  )
}

export default NotFoundPage

// style

const Wrapper = styled.div`
  padding-top: 247px;

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
  margin-bottom: 37px;

  @media (max-width: 600px) {
    margin-top: 43px;
    margin-bottom: 24px;
  }
`

const ListCaseStudy = styled.div`
  height: auto;
  margin: 0 180px;
  margin-bottom: 130px;

  @media (max-width: 1366px) {
    margin: 0 100px;
    margin-bottom: 100px;
  }
  @media (max-width: 1200px) {
    margin: 0 40px;
    margin-bottom: 80px;
  }
  @media (max-width: 768px) {
    margin: 0 20px;
    margin-bottom: 60px;
  }
  @media (max-width: 600px) {
    margin: 0 16px;
    margin-bottom: 55px;
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
