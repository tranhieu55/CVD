import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Interested from "../components/Interested"
import Layout from "../components/Layout"
import SEO from "../components/utilities/SEO"
import Other from "../components/OurWoorkDetails/Other"
import SliceZone from "../utils/SliceZone"

const Study = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  border-bottom: 1px solid #e4e4e4;
  @media only screen and (max-width: 600px) {
    margin-left: 16px;
    margin-right: 16px;
    margin-bottom: -70px;
    padding-bottom: 3px;
  }
  @media (min-width: 601px) {
    .wrap-header {
      width: 100vw;
    }
    max-width: 585px;
  }
  @media (min-width: 992px) {
    max-width: 780px;
  }
  @media (min-width: 1024px) {
    max-width: 900px;
  }
  @media (min-width: 1200px) {
    max-width: 1024px;
  }

  @media (min-width: 1400px) {
    max-width: 1151px;
  }

  @media (min-width: 1600px) {
    max-width: 1240px;
  }

  @media (min-width: 1800px) {
    max-width: 1380px;
  }
`
export const query = graphql`
  query getOurkItemBySlug($slug: String!) {
    prismic {
      allProjectss {
        edges {
          node {
            project_logo
            project_name
            project_header_image
            project_description
            name_category_of_project
            _meta {
              uid
            }
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

      projects(uid: $slug, lang: "en-gb") {
        project_name
        project_logo
        project_header_image
        project_description
        name_category_of_project
        body {
          ... on PRISMIC_ProjectsBodyOurworkitem_description {
            type
            label
            primary {
              text_description
              title
            }
          }
          ... on PRISMIC_ProjectsBodyText_quote {
            type
            label
            primary {
              author_of_quote
              title_quote
            }
          }
          ... on PRISMIC_ProjectsBodyTitle_solution {
            type
            primary {
              text_description
              title
            }
            label
            fields {
              title_the_solution
            }
          }
          ... on PRISMIC_ProjectsBodyList_image {
            type
            label
            fields {
              image_item
              location
              order
              width_image
            }
          }
          ... on PRISMIC_ProjectsBodySlider_image {
            label
            fields {
              slider_image
            }
            type
          }
          ... on PRISMIC_ProjectsBodyStatistical_ourwork_item_ {
            type
            label
            fields {
              description_of_statistical
              number_of_statistical
            }
          }
          ... on PRISMIC_ProjectsBodyOne_image {
            primary {
              image
              fullScreen
            }
            label
            type
          }
        }
        relationship_to_project_category {
          ... on PRISMIC_Category_ourwork {
            category_name
            oder_in_menu
            _meta {
              uid
            }
          }
        }
        meta_title
        meta_description
        keywords
      }
    }
  }
`
const OurWorkDetail = props => {
  let dataOurWorkItem = props.data.prismic.projects
  let nameCategory = props.pathContext.dataLayout.node.name_category_of_project

  let slugCurrent = props.pathContext.slug

  let allProjects = props.data.prismic.allProjectss.edges

  let removeProjectInPageCurrent = allProjects.filter(
    item => item.node._meta.uid !== slugCurrent
  )

  let arrRandom = []
  while (arrRandom.length < 2) {
    let r = Math.floor(Math.random() * removeProjectInPageCurrent.length)
    if (arrRandom.indexOf(r) === -1) arrRandom.push(r)
  }
  const arrResult = arrRandom.map(x => removeProjectInPageCurrent[x])

  const data = props.data.prismic.projects

  return (
    <Layout
      location="/case-study"
      nameProject={dataOurWorkItem.project_description[0].text}
      logoProject={dataOurWorkItem.project_logo}
      nameCategoryOfWorkItem={nameCategory}
      descriptionOfWorkItem={
        dataOurWorkItem.relationship_to_project_category.text
      }
      backgroundWorkItemSrc={dataOurWorkItem.project_header_image.url}
      backgroundWorkItemAlt={dataOurWorkItem.project_header_image.alt}
    >
      <SEO props={dataOurWorkItem} />
      <Study>
        <SliceZone allSlices={data.body} />
      </Study>
      <Other arrResult={arrResult} slugCurrent={nameCategory} />
    </Layout>
  )
}

export default OurWorkDetail
