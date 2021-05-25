import React from "react"
import { ThemeProvider } from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Header from "./Header"
import Footer from "./Footer"
import { theme } from "../assets/global/Theme"
import Banner from "./Banner/Banner"
import "bootstrap/dist/css/bootstrap.min.css"
import styled from "styled-components"
import Interested from "../components/Interested"
import OurWorkContextProvider from "../context/ourwork/OurWorkContextProvider"
import "../components/styles.css"

const Layout = ({
  location,
  children,
  nameProject,
  logoProject,
  nameCategoryOfWorkItem,
  descriptionOfWorkItem,
  backgroundWorkItemSrc,
  backgroundWorkItemAlt,
  parentCallback,
}) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      prismic {
        allService_headers {
          edges {
            node {
              body {
                ... on PRISMIC_Service_headerBodyOur_services {
                  type
                  label
                  fields {
                    image_service_item
                    title_service_item
                  }
                  primary {
                    title
                  }
                }
                ... on PRISMIC_Service_headerBodyOur_playforms {
                  type
                  label
                  fields {
                    image_platform_item
                    name_service
                    short_description
                  }
                  primary {
                    title
                  }
                }
              }
            }
          }
        }
        allFooters {
          edges {
            node {
              background_color_of_footer_bottom
              body {
                ... on PRISMIC_FooterBodyOurwork_footer {
                  type
                  label
                  fields {
                    slug_sub_title
                    sub_title
                    link_to_another_page {
                      ... on PRISMIC__ExternalLink {
                        target
                        _linkType
                        url
                      }
                    }
                  }
                  primary {
                    title
                  }
                }
                ... on PRISMIC_FooterBodyAddress {
                  type
                  label
                  fields {
                    address_detail
                    city
                    phone_office
                  }
                  primary {
                    address_title
                  }
                }
                ... on PRISMIC_FooterBodyCta {
                  type
                  label
                  primary {
                    background_color_cta_block
                    display_block
                    subtitle
                    title
                  }
                }
                ... on PRISMIC_FooterBodyLists_icon_footer {
                  type
                  label
                  fields {
                    icon_item
                    link_to_social_network {
                      ... on PRISMIC__ExternalLink {
                        target
                        _linkType
                        url
                      }
                    }
                  }
                }
                ... on PRISMIC_FooterBodyNewsletter_signup {
                  type
                  label
                  primary {
                    alert_submit_side_success
                    alert_submit_success
                    form_submit_placeholder
                    text_button
                    title
                    title_side
                  }
                }
              }
              logo_footer
            }
          }
        }
        allHeaders {
          edges {
            node {
              website_logo
              body {
                ... on PRISMIC_HeaderBodyMenu_items {
                  type
                  label
                  fields {
                    slug_menu_item
                    title_menu_item
                  }
                }
                ... on PRISMIC_HeaderBodyCta_buton {
                  type
                  label
                  primary {
                    background_color_button
                    border_button_color
                    button_text_color
                    display_desktop_or_mobile
                    text_button
                  }
                }
                ... on PRISMIC_HeaderBodySocial_icon_header {
                  type
                  label
                  fields {
                    link_to_social_network {
                      ... on PRISMIC__ExternalLink {
                        _linkType
                        target
                        url
                      }
                    }
                    social_icon_item
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const dataFooter =
    data && data.prismic?.allFooters ? data.prismic?.allFooters : []
  const dataMenuHeader =
    data && data.prismic?.allHeaders ? data.prismic?.allHeaders : []
  const dataServicesMenu =
    data && data.prismic?.allService_headers
      ? data.prismic?.allService_headers
      : []
  const BoxLayout = styled.div`
    overflow-x: hidden;
    position: relative;
  `
  return (
    <BoxLayout>
      <ThemeProvider theme={theme}>
        <OurWorkContextProvider>
          <Header
            dataGlobalMessage={parentCallback}
            location={location}
            dataMenuHeader={dataMenuHeader}
            dataServicesMenu={dataServicesMenu}
          />
          <Banner
            location={location}
            nameProject={nameProject}
            logoProject={logoProject}
            nameCategoryOfWorkItem={nameCategoryOfWorkItem}
            descriptionOfWorkItem={descriptionOfWorkItem}
            backgroundWorkItemSrc={backgroundWorkItemSrc}
            backgroundWorkItemAlt={backgroundWorkItemAlt}
          />
          {children}
          <Interested dataFooter={dataFooter} />
          <Footer dataFooter={dataFooter} />
        </OurWorkContextProvider>
      </ThemeProvider>
    </BoxLayout>
  )
}

export default Layout
