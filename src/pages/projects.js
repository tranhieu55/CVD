import React from "react"
import Layout from "../components/Layout"
import ListBlog from "../components/ListBlog"
import Interested from "../components/Interested"
import SEO from "../components/utilities/SEO"
import { graphql } from "gatsby"

const Projects = ({ data: { prismic } }) => {
  const data = prismic.allProjects.edges[0].node
  return (
    <Layout location="/projects">
      <SEO props={data} />
      <ListBlog />
      <Interested />
    </Layout>
  )
}

export default Projects

export const pageQuery = graphql`
  query indexQuery {
    prismic {
      allProjects {
        edges {
          node {
            keywords
            meta_description
            meta_title
          }
        }
      }
    }
  }
`
