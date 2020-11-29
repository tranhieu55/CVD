import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

const SEO = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      allPrismicHomepage {
        edges {
          node {
            data {
              page_title {
                text
              }
              meta_title {
                text
              }
              meta_description {
                text
              }
              keywords {
                text
              }
              featured_image {
                url
              }
            }
          }
        }
      }
    }
  `)
  const defaultTitle =
    "Magento Developers - Magento Development Melbourne & Sydney"
  const defaultDescription =
    "Convert Digital is a Melbourne and Sydney based ecommerce agency specialising in website development on Magento, Shopify, and BigCommerce. Call us today."
  const defaultkeywords = "Convert Digital, website development, shopify plus"
  const defaultImage = false
  const defaultUrl = "www.convertdigital.com.au"

  const dataSeo = data.allPrismicHomepage.edges[0].node

  let metaTitle = dataSeo.data.meta_title[0].text
  let keywords = dataSeo.data.keywords[0].text
  let description = dataSeo.data.meta_description[0].text

  dataSeo.data.meta_description[0].text
    ? (description = dataSeo.data.meta_description[0].text)
    : (description = defaultDescription)
  let image = ""
  if (dataSeo.data.featured_image) {
    image = dataSeo.data.featured_image.url
  }
  return (
    <>
      <Helmet title={title ? `${title} | ${metaTitle}` : `${metaTitle}`}>
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
      </Helmet>
    </>
  )
}

export default SEO
