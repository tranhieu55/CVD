import React from "react"
import SEO from "../components/utilities/SEO"
import Layout from "../components/Layout"
import ListTrademark from "../components/ListTrademark"
import Whatwedo from "../components/Whatwedo"
import ListBlog from "../components/ListBlog"
import Instagram from "../components/Instagram"
import HappyClient from "../components/HappyClient"
import LatestInsights from "../components/LatestInsights"
import ServicesDetails from "../components/ServicesDetails"
import Interested from "../components/Interested"

const Index = () => {
  return (
    <Layout location="/">
      <SEO />
      <ListTrademark />
      <Whatwedo />
      <ListBlog />
      <Instagram />
      <HappyClient />
      <LatestInsights />
      <ServicesDetails />
      <Interested />
    </Layout>
  )
}

export default Index
