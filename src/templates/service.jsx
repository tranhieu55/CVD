import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import SEO from "../components/utilities/SEO"
import SliceZone from "../utils/SliceZone"
import Layout from "../components/Layout"
import { PageTypeHeading } from "../components/bits"
// import PageTypeHeading

const Service = ({ data: { prismic } }) => {
  console.log("prismic", prismic)
  const data = prismic.service
  const title = data.page_title[0].text
  const content = data.page_description
  const pageType = data.page_type[0].text
  console.log("pageType", pageType)

  return (
    <Layout>
      <SEO props={data} />
      <ThisPage>
        <ContainerFluid>
          <Container>
            <PageTypeHeading props={pageType}></PageTypeHeading>
            <ContainerTitle>
              <h1>{title}</h1>
              <div>{RichText.render(content)}</div>
            </ContainerTitle>
          </Container>
        </ContainerFluid>
        <Container>
          <SliceZone allSlices={data.body} />
        </Container>
      </ThisPage>
    </Layout>
  )
}

const ThisPage = styled.div`
  background-color: #fff;
`

const ContainerFluid = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  position: relative;
`

const Container = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 15px;
`

const ContainerTitle = styled.div`
  padding: 0 0 5rem 6.5rem;
  font-size: 1rem;
  max-width: 770px;
  margin-bottom: 6rem;
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
