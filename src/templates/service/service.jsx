import React from "react"
import styled, { css } from "styled-components"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import SEO from "../../components/utilities/SEO"
import SliceZone from "../../utils/SliceZone"
import Layout from "../../components/Layout"
import { PageTypeHeading, Spacer } from "../../components/bits"
import "./service.css"
// force commit

const Service = ({ data: { prismic } }) => {
  console.log("prismic", prismic)
  const data = prismic.service
  const title = data.page_title[0].text
  const content = data.page_description
  const pageType = data.page_type[0].text

  return (
    <Layout>
      <SEO props={data} />
      <ThisPage>
        <ContainerFluid background={"#f8f8f8"}>
          <Container>
            <PageTypeHeading props={pageType}></PageTypeHeading>
            <Spacer
              marginBottom={"1.5rem"}
              marginBottomMobile={"0.75rem"}
            ></Spacer>
            <ContainerTitle>
              <Title>{title}</Title>
              <PageDescription>{RichText.render(content)}</PageDescription>
            </ContainerTitle>
          </Container>
        </ContainerFluid>
        <Spacer marginBottom={"6rem"} marginBottomMobile={"1.25rem"}></Spacer>
        <Container>
          <SliceZone allSlices={data.body} context={"service"} />
        </Container>
      </ThisPage>
    </Layout>
  )
}

const ThisPage = styled.div`
  background-color: #fff;
  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`

const ContainerFluid = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  @media screen and (max-width: 768px) {
    margin: 0 -1rem;
    padding: 0 1rem;
  }
`

const Container = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  ${props =>
    props.background &&
    css`
      background-color: props.background;
    `}
`

const ContainerTitle = styled.div`
  padding: 0 0 6rem 6.5rem;
  font-size: 1rem;
  max-width: 770px;
  @media screen and (max-width: 768px) {
    padding: 0 1rem 1.25rem 1rem;
  }
`

const Title = styled.h1`
  color: #101010;
  font-size: 4rem;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 3.5rem;
  margin: 0;
  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
    line-height: 2.5rem;
  }
`

const PageDescription = styled.div`
  color: #222222;
  font-size: 1.25rem;
  letter-spacing: 0;
  line-height: 1.75rem;
`

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
              image_align_right
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
        page_type
        meta_title
        meta_description
        keywords
      }
    }
  }
`
