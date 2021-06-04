import React from "react"
import SliceZone from "../utils/SliceZone"
import { graphql, useStaticQuery } from "gatsby"

import { createGlobalStyle } from "styled-components"
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

function Preview({ data: { prismic } }) {
  const data =
    prismic && prismic?.allNotfound_pages?.edges[0]?.node
      ? prismic?.allNotfound_pages?.edges[0]?.node
      : []
  console.log("123", data)
  return (
    <>
      <GlobalStyle />
      <SliceZone allSlices={data.body} />
    </>
  )
}
export default Preview

export const pageQuery = graphql`
  query QueryThreeColumnProfile {
    prismic {
      allNotfound_pages {
        edges {
          node {
            body {
              ... on PRISMIC_Notfound_pageBodyBlog_article_tiles {
                type
                label
                fields {
                  post_item {
                    ... on PRISMIC_Post {
                      title
                      post_image
                      _meta {
                        uid
                      }
                      date_created
                    }
                  }
                }
              }
              ... on PRISMIC_Notfound_pageBodyClient_logo_grid {
                type
                fields {
                  images
                }
              }
              ... on PRISMIC_Notfound_pageBody_partner_feature_tile {
                type
                fields {
                  logo
                  subtitle
                  text
                }
              }
              ... on PRISMIC_Notfound_pageBody_accordion {
                type
                label
                fields {
                  title
                  sub_title
                  email
                  content_title_center
                  content_title
                  content_text_after
                  content_text
                  content_footer2
                  content_footer
                  application
                }
              }
              ... on PRISMIC_Notfound_pageBodyCase_studies_are_shown {
                type
                label
                fields {
                  project_item {
                    ... on PRISMIC_Post {
                      title
                      post_image
                      _meta {
                        uid
                      }
                    }
                  }
                }
                primary {
                  title
                }
              }
              ... on PRISMIC_Notfound_pageBody2_column_text {
                type
                label
                primary {
                  text_side_left
                  text_side_right
                }
              }
              ... on PRISMIC_Notfound_pageBodyInstagram_launch {
                type
                label
                fields {
                  image_slice
                }
              }
              ... on PRISMIC_Notfound_pageBodyImage_slideshow {
                type
                label
                fields {
                  image
                }
              }
              ... on PRISMIC_Notfound_pageBodyFull_width_image {
                type
                label
                fields {
                  image
                }
              }
              ... on PRISMIC_Notfound_pageBodyImage_grid_portrait {
                type
                label
                fields {
                  image_grid_portrait
                }
              }
              ... on PRISMIC_Notfound_pageBodyWhat_we_do_item {
                type
                label
                primary {
                  location_content
                  location_image
                  what_we_do_description
                  what_we_do_image
                  what_we_do_title
                }
              }
              ... on PRISMIC_Notfound_pageBodyList_projects_to_show {
                type
                label
                fields {
                  project_item {
                    ... on PRISMIC_Projects {
                      name_category_of_project
                      project_name
                      _meta {
                        uid
                      }
                      project_header_image
                      relationship_to_project_category {
                        ... on PRISMIC_Category_ourwork {
                          _meta {
                            uid
                          }
                        }
                      }
                    }
                  }
                }
                primary {
                  number_projects_want_show
                }
              }
              ... on PRISMIC_Notfound_pageBodyTitle_with_description {
                type
                label
                primary {
                  text_description
                  title
                }
              }
              ... on PRISMIC_Notfound_pageBodySection_solution {
                type
                label
                fields {
                  title_the_solution
                }
                primary {
                  text_description
                  title
                }
              }
              ... on PRISMIC_Notfound_pageBodyStatistical_project {
                type
                label
                fields {
                  description_of_statistical
                  number_of_statistical
                }
              }
              ... on PRISMIC_Notfound_pageBodyQuote {
                type
                label
                primary {
                  title_quote
                  author_of_quote
                }
              }
              ... on PRISMIC_Notfound_pageBodyImage_grid_landscape {
                type
                label
                fields {
                  image_grid
                }
              }
              ... on PRISMIC_Notfound_pageBodyCase_study_tiles {
                type
                label
                fields {
                  title
                  sub_title
                  image_case_study
                }
              }
              ... on PRISMIC_Notfound_pageBody3_column_profiles {
                type
                label
                fields {
                  avatar
                  description
                  name
                  position
                }
              }
            }
          }
        }
      }
    }
  }
`
