import React from "react"
import SliceZone from "../utils/SliceZone"
import styled from "styled-components"
import SEO from "../components/utilities/SEO"

const Index = ({ data: { prismic } }) => {
  const data = prismic.allHomepages.edges[0].node
  const title = prismic.allHomepages.edges[0].node.page_title[0].text
  console.log(data)
  return (
    <>
      <SEO props={data} />
      <Title>{title}</Title>
      <SliceZone allSlices={data.body} />
    </>
  )
}

export default Index

//styles

const Title = styled.h1``

export const pageQuery = graphql`
  query IndexQuery {
    prismic {
      allHomepages {
        edges {
          node {
            page_title
            featured_iamge
            #seo
            meta_title
            meta_description
            keywords
          }
        }
      }
    }
  }
`
