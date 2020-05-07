import React from "react"
import { Helmet } from "react-helmet"

const SEO = ({ props }) => {
  const defaultTitle =
    "Magento Developers - Magento Development Melbourne & Sydney"
  const defaultDescription =
    "Convert Digital is a Melbourne and Sydney based ecommerce agency specialising in website development on Magento, Shopify, and BigCommerce. Call us today."
  const defaultkeywords = "Convert Digital, website development, shopify plus"
  const defaultImage = false
  const defaultUrl = "www.convertdigital.com.au"

  let title = props.meta_title[0].text
  let keywords = props.keywords[0].text
  let description = props.meta_description[0].text

  props.meta_description[0].text
    ? (description = props.meta_description[0].text)
    : (description = defaultDescription)
  let image = ""
  if (props.featured_image) {
    image = props.featured_image.url
  }
  return (
    <>
      <Helmet title={title}>
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
