import React from "react"
import Layout from "../components/Layout"
import ListBlog from "../components/ListBlog"
import Interested from "../components/Interested"
import SEO from "../components/utilities/SEO"

const Projects = () => {
  return (
    <Layout location="/projects">
      <SEO title="Ourwork" />
      <ListBlog />
      <Interested />
    </Layout>
  )
}

export default Projects
