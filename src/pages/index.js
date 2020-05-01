import React from "react"

const Index = ({ data: { prismic } }) => {
  console.log(prismic.allHomepages.edges[0].node)
  const data = prismic.allHomepages.edges[0].node
  const title = prismic.allHomepages.edges[0].node.page_title[0].text

  return <h1>{title}</h1>
}

export default Index

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
