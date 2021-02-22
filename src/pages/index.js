import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import SEO from "../components/utilities/SEO"
import SliceZone from "../utils/SliceZone"
import { Link } from "gatsby"

const Index = ({ data: { prismic } }) => {
  const data = prismic.allHomepages.edges[0].node
  const title = data.page_title[0].text
  const featured_image = data.featured_image.url
  return (
    <Layout location="/">
      <SEO props={data} location="/" />
      <Container>
        <ContainerLeft>
          <Title>{title}</Title>
          <ButtonContainer>
            <Button yellow="true">
              <ButtonText yellow="true" to="">
                Get in touch
              </ButtonText>
            </Button>
            <Button>
              <ButtonText to="">View projects</ButtonText>
            </Button>
          </ButtonContainer>
        </ContainerLeft>
        <ContainerRight>
          <IPhone src={featured_image} />
        </ContainerRight>
      </Container>
      <SliceZone allSlices={data.body} />
    </Layout>
  )
}

export default Index

//styles

const Title = styled.h1`
  font-size: 6rem;
  color: white;
  line-height: 1;
  @media (max-width: 769px) {
    font-size: 3rem;
    margin: 0;
  }
`

const Container = styled.div`
  display: grid;
  height: 75vh;
  width: 100%;
  grid-template-columns: 50% 50%;
  grid-template-rows: 100%;
  margin: auto;
  background-color: black;
  :after {
    background: inherit;
    content: "";
    display: block;
    height: 785px;
    left: 0;
    position: absolute;
    right: 0;
    transform: skewY(-1.5deg);
    transform-origin: 100%;
    z-index: -1;
  }
  @media (max-width: 769px) {
    display: block;
    height: auto;

    :after {
      background: inherit;
      content: "";
      display: block;
      height: 15px;
      left: 0;
      position: relative;
      right: 0;
      transform: skewY(-1.5deg);
      transform-origin: 100%;
      z-index: -1;
    }
  }
`
const ContainerLeft = styled.div`
  grid-column: 1;
  width: 75%;
  margin-left: auto;
  margin-top: auto;
  margin-bottom: 100px;
  padding-top: 150px;
  @media (max-width: 769px) {
    width: 90%;
    margin: auto;
  }
`

const Button = styled.div`
  background: ${props => (props.yellow ? "#FECF09" : "black")};
  color: ${props => (props.yellow ? "#000000" : "black")};
  padding: 15px 30px;
  border-radius: 4px;
  border: solid 1px;
  border-color: #fecf09 !important;
  position: relative;
  margin-right: 10px;
`

const ButtonText = styled(Link)`
  color: ${props => (props.yellow ? "#000000" : "white")};
  position: relative;
  font-weight: 600;
  top: 2px;
`

const ButtonContainer = styled.div`
  display: inline-flex;
`

const ContainerRight = styled.div`
  grid-column: 2;
  width: 75%;
  margin: auto;
  margin-left: 20%;
  @media (max-width: 769px) {
    width: 90%;
    margin: auto;
    height: 250px;
  }
`
const IPhone = styled.img`
  height: 80%;
  top: 75px;
  position: relative;
  @media (max-width: 769px) {
    width: 100%;
    height: 80%;
    top: 68px;
    position: relative;
    max-height: 200px;
    object-fit: cover;
    object-position: top;
  }
`

export const pageQuery = graphql`
  query IndexQuery {
    prismic {
      allHomepages {
        edges {
          node {
            page_title
            featured_image
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
                primary {
                  number_of_projects_to_show
                }
                fields {
                  project {
                    ... on PRISMIC_Project {
                      project_title
                      platform
                      project_list_image
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
