import React from "react"
import { Helmet } from "react-helmet"

const SEO = ({ props, location }) => {

  const defaultTitle =
    "Magento Developers - Magento Development Melbourne & Sydney"
  const defaultDescription =
    "Convert Digital is a Melbourne and Sydney based ecommerce agency specialising in website development on Magento, Shopify, and BigCommerce. Call us today."
  const defaultkeywords = "Convert Digital, website development, shopify plus"

  let title = props.meta_title ? props.meta_title[0].text : defaultTitle

  let keywords = props.keywords ? props.keywords[0].text : defaultkeywords

  let description = props.meta_description
    ? props.meta_description[0].text
    : defaultDescription

  let image = ""
  if (props.featured_image) {
    image = props.featured_image.url
  }
  return (
    <>
      <Helmet title={`Convert Digital | ${title}`}>
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta
          name="viewport"
          content="initial-scale=1, viewport-fit=cover"
        ></meta>
      </Helmet>
    </>
  )
}

export default SEO
