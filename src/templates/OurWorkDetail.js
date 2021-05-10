import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/utilities/SEO"
import Other from "../components/OurWoorkDetails/Other"
import SliceZone from "../utils/SliceZone"

const Study = styled.div`
  width: 100%;

  @media (min-width: 1600px) {
    width: 100%;
  }

  @media (min-width: 1800px) {
    width: 100%;
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
            body {
              ... on PRISMIC_ProjectsBodyTwo_columns_a {
                type
                label
                primary {
                  background_image_side_left
                  image_side_left
                  image_side_right
                  title
                }
              }
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
          ... on PRISMIC_ProjectsBodyTwo_columns_a {
            type
            label
            primary {
              background_image_side_left
              image_side_left
              image_side_right
              title
            }
          }
          ... on PRISMIC_ProjectsBodyTwo_columns_b {
            type
            label
            primary {
              image_side_right
              image_sile_left
              title
              background_image_side_right
            }
          }
          ... on PRISMIC_ProjectsBodyTwo_columns_c {
            type
            label
            primary {
              background_image_side_left
              image_side_left
              image_side_right
              title
            }
          }
          ... on PRISMIC_ProjectsBodyThrees_column {
            type
            label
            primary {
              image_side_left
              image_side_right
              image_center
              enter_title
              background_image_side_right
              background_image_side_left
            }
          }
          ... on PRISMIC_ProjectsBodyFull_banner_a {
            type
            label
            primary {
              image_full_banner_a
              title
            }
          }
          ... on PRISMIC_ProjectsBodySlide_show_banner_ {
            type
            label
            primary {
              background_slide_show_banner
              title
            }
            fields {
              item_image
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
  let dataOurWorkItem = props && props?.data?.prismic?.projects ? props?.data?.prismic?.projects : [] ;
  let nameCategory = props
    && props?.pathContext?.dataLayout?.node?.name_category_of_project ?
    props?.pathContext?.dataLayout?.node?.name_category_of_project
    : []
  let slugCurrent = props && props.pathContext?.slug ? props.pathContext?.slug : [];

  let allProjects = props && props.data?.prismic?.allProjectss?.edges ? props.data?.prismic?.allProjectss?.edges : [];

  let removeProjectInPageCurrent = allProjects.filter(
    item => item?.node?._meta?.uid !== slugCurrent
  )

  let arrRandom = []
  while (arrRandom.length < 2) {
    let r = Math.floor(Math.random() * removeProjectInPageCurrent.length)
    if (arrRandom.indexOf(r) === -1) arrRandom.push(r)
  }
  const arrResult = arrRandom?.map(x => removeProjectInPageCurrent[x])

  const data = props?.data?.prismic?.projects
  const dataMapNameProject = dataOurWorkItem ? dataOurWorkItem?.project_description?.map(
    item => item.text ? item.text : ""
  ) : []
  return (
    <Layout
      location="/case-study"
      nameProject={dataMapNameProject}
      logoProject={dataOurWorkItem?.project_logo}
      nameCategoryOfWorkItem={nameCategory}
      descriptionOfWorkItem={
        dataOurWorkItem?.relationship_to_project_category?.text
      }
      backgroundWorkItemSrc={dataOurWorkItem?.project_header_image.url}
      backgroundWorkItemAlt={dataOurWorkItem?.project_header_image.alt}
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
