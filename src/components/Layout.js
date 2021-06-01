import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Header from "./Header"
import Footer from "./Footer"
import { theme } from "../assets/global/Theme"
import Banner from "./Banner/Banner"
import CalibreRegular from "../assets/fonts/CalibreRegular.woff"
import CalibreRegularItalic from "../assets/fonts/CalibreRegularItalic.woff"
import CalibreThin from "../assets/fonts/CalibreThin.woff"
import CalibreThinItalic from "../assets/fonts/CalibreThinItalic.woff"
import CalibreLight from "../assets/fonts/CalibreLight.woff"
import CalibreLightItalic from "../assets/fonts/CalibreLightItalic.woff"
import CalibreMedium from "../assets/fonts/CalibreMedium.woff"
import CalibreMediumItalic from "../assets/fonts/CalibreMediumItalic.woff"
import CalibreSemibold from "../assets/fonts/CalibreSemibold.woff"
import CalibreSemiboldItalic from "../assets/fonts/CalibreSemiboldItalic.woff"
import CalibreBlack from "../assets/fonts/CalibreBlack.woff"
import CalibreBlackItalic from "../assets/fonts/CalibreBlackItalic.woff"
import CalibreBold from "../assets/fonts/CalibreBold.woff"
import CalibreBoldItalic from "../assets/fonts/CalibreBoldItalic.woff"
import HelveticaNeue_Regular from "../assets/fonts/HelveticaNeue-Regular.ttf"
import FontAwesome5ProRegular from "../assets/fonts/FontAwesome5Pro-Regular.woff"
import FontAwesome5BrandsRegular from "../assets/fonts/FontAwesome5Brands-Regular.woff"
import "bootstrap/dist/css/bootstrap.min.css"
import styled from "styled-components"
import Interested from "../components/Interested"
import OurWorkContextProvider from "../context/ourwork/OurWorkContextProvider"

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Calibre Regular';
    font-style: normal;
    font-weight: 400;
    src: local('Calibre Regular'), url(${CalibreRegular}) format('woff');
}
@font-face {
font-family: 'Calibre Regular Italic';
font-style: normal;
font-weight: normal;
src: local('Calibre Regular Italic'), url(${CalibreRegularItalic}) format('woff');
}

@font-face {
font-family: 'Calibre Thin';
font-style: normal;
font-weight: normal;
src: local('Calibre Thin'), url(${CalibreThin}) format('woff');
}

@font-face {
font-family: 'Calibre Thin Italic';
font-style: normal;
font-weight: normal;
src: local('Calibre Thin Italic'), url(${CalibreThinItalic}) format('woff');
}


@font-face {
font-family: 'Calibre Light';
font-style: normal;
font-weight: normal;
src: local('Calibre Light'), url(${CalibreLight}) format('woff');
}


@font-face {
font-family: 'Calibre Light Italic';
font-style: normal;
font-weight: normal;
src: local('Calibre Light Italic'), url(${CalibreLightItalic}) format('woff');
}


@font-face {
font-family: 'Calibre Medium';
font-style: normal;
font-weight: 500;
src: local('Calibre Medium'), url(${CalibreMedium}) format('woff');
}


@font-face {
font-family: 'Calibre Medium Italic';
font-style: normal;
font-weight: normal;
src: local('Calibre Medium Italic'), url(${CalibreMediumItalic}) format('woff');
}


@font-face {
font-family: 'Calibre Semibold';
font-style: normal;
font-weight: 600;
src: local('Calibre Semibold'), url(${CalibreSemibold}) format('woff');
}


@font-face {
font-family: 'Calibre Semibold Italic';
font-style: normal;
font-weight: normal;
src: local('Calibre Semibold Italic'), url(${CalibreSemiboldItalic}) format('woff');
}


@font-face {
font-family: 'Calibre Bold';
font-style: normal;
font-weight: bold;
src: local('Calibre Bold'), url(${CalibreBold}) format('woff');
}


@font-face {
font-family: 'Calibre Bold Italic';
font-style: normal;
font-weight: normal;
src: local('Calibre Bold Italic'), url(${CalibreBoldItalic}) format('woff');
}


@font-face {
font-family: 'Calibre Black';
font-style: normal;
font-weight: normal;
src: local('Calibre Black'), url(${CalibreBlack}) format('woff');
}


@font-face {
font-family: 'Helvetica Neue Regular';
font-style: normal;
font-weight: normal;
src: local('Helvetica Neue Regular'), url(${HelveticaNeue_Regular}) format('ttf');
}


@font-face {
font-family: 'Calibre Black Italic';
font-style: normal;
font-weight: normal;
src: local('Calibre Black Italic'), url(${CalibreBlackItalic}) format('woff');
}
@font-face {
font-family: 'Font Awesome 5 Pro Regular';
font-style: normal;
font-weight: normal;
src: local('Font Awesome 5 Pro Regular'), url(${FontAwesome5ProRegular}) format('woff');
}
@font-face {
font-family: 'Font Awesome 5 Brands Regular';
font-style: normal;
font-weight: normal;
src: local('Font Awesome 5 Brands Regular'), url(${FontAwesome5BrandsRegular}) format('woff');
}
*,*::after, *::before { 
  box-sizing : border-box;
}
`
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
                # ... on PRISMIC_Service_headerBodyOur_launches {
                #   type
                #   label
                #   primary {
                #     title
                #     launches_project {
                #       ... on PRISMIC_Projects {
                #         name_category_of_project
                #         project_name
                #         _meta {
                #           uid
                #         }
                #         project_header_image
                #         project_header_imageSharp {
                #           uid
                #         }
                #         relationship_to_project_category {
                #           ... on PRISMIC_Category_ourwork {
                #             _meta {
                #               uid
                #             }
                #           }
                #         }
                #       }
                #     }
                #   }
                # }
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
          <GlobalStyle />
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
