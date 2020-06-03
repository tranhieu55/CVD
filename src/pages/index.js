import React from "react"
import SliceZone from "../utils/SliceZone"
import styled from "styled-components"
import SEO from "../components/utilities/SEO"
import Layout from "../components/Layout"
import { Link, graphql } from "gatsby"

const Index = ({ data: { prismic } }) => {
  const data = prismic.allHomepages.edges[0].node
  const title = data.page_title[0].text
  const featured_image = data.featured_image.url
  console.log("index", data)
  return (
    <Layout>
      <SEO props={data} />
      <Container>
        <ContainerLeft>
          <Title>{title}</Title>
          <ButtonContainer>
            <Button yellow>
              <ButtonText yellow to="">
                Get in touch
              </ButtonText>
            </Button>
            <Button>
              <ButtonText to="">View video</ButtonText>
            </Button>
          </ButtonContainer>
        </ContainerLeft>
        <ContainerRight>
          <IPhone src={featured_image} />
        </ContainerRight>
      </Container>
      {/* slize zone below */}
      <SliceZone allSlices={data.body} />
    </Layout>
  )
}

export default Index

//styles

const Title = styled.h1`
  font-size: 6rem;
  color: white;
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
    height: 32.5%;
    left: 0;
    position: absolute;
    right: 0;
    transform: skewY(-1.5deg);
    transform-origin: 100%;
    z-index: -1;
  }
`
const ContainerLeft = styled.div`
  grid-column: 1;
  width: 75%;
  margin-left: auto;
  margin-top: auto;
  margin-bottom: 50px;
`

const Button = styled.div`
  background: ${props => (props.yellow ? "#FECF09" : "black")};
  color: ${props => (props.yellow ? "#000000" : "black")};
  padding: 15px 30px;
  border-radius: 4px;
  border: solid 1px;
  border-color: ${props => (props.yellow ? "#FECF09" : "white")};
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
`
const IPhone = styled.img`
  height: 80%;
  top: 75px;
  position: relative;
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
            }
          }
        }
      }
    }
  }
`
