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
  @media (max-width: 992px) {
    max-width: 780px;
  }
  @media only screen and (max-width: 600px) {
    margin-left: 16px;
    margin-right: 16px;
    margin-bottom: -70px;
    padding-bottom: 20px;
  }
  @media (min-width: 601px) {
    .wrap-header {
      width: 100vw;
    }
    max-width: 585px;
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
  query queryAllOurwork {
    prismic {
      allOurwork_items {
        edges {
          node {
            ourworkitem_name
            name_category_of_ourworkitem
            ourworkitem_image
            relationship_to_categoryourwork {
              ... on PRISMIC_Category_ourwork {
                _meta {
                  uid
                }
              }
            }
            _meta {
              uid
            }
          }
        }
      }
      allProject_items {
      edges {
        node {
          body {
            ... on PRISMIC_Project_itemBodyBackground_project {
              type
              label
              fields {
                image_background
              }
              primary {
                solution_short_description
                title_background
              }
            }
            ... on PRISMIC_Project_itemBodySolution_project {
              type
              label
              fields {
                title_the_solution
              }
              primary {
                solution_short_description
                title_solution
              }
            }
            ... on PRISMIC_Project_itemBodyStatistical_ourwork_item_ {
              type
              fields {
                description_of_statistical
                number_of_statistical
              }
              label
            }
            ... on PRISMIC_Project_itemBodyList_image {
              type
              label
              fields {
                image_item
                vi_tri
              }
            }
            ... on PRISMIC_Project_itemBodySlider_image {
              type
              label
              fields {
                slider_image
              }
            }
            ... on PRISMIC_Project_itemBodyText_quote {
              type
              label
              fields {
                content_quote
                outher
              }
            }
          }
          logo_project
          name_project_item
          short_description
          ten_cate
        }
      }
    }
  }
}
`
const OurWorkDetail = props => {
  // console.log(props);
  let dataOurWorkItem = props.pathContext.dataLayout.node

  let slugCurrent = props.pathContext.slug
  let allProjects = props.data.prismic.allOurwork_items.edges

  let removeProjectInPageCurrent = allProjects.filter(
    item => item.node._meta.uid !== slugCurrent
  )

  let arrRandom = []
  while (arrRandom.length < 2) {
    let r = Math.floor(Math.random() * removeProjectInPageCurrent.length)
    if (arrRandom.indexOf(r) === -1) arrRandom.push(r)
  }

  const arrResult = arrRandom.map(x => removeProjectInPageCurrent[x])

  const dataItem = props.data.prismic.allProject_items.edges[0].node
  // console.log(dataItem)
  return (
    <Layout
      location="/case-study"
      // pass to banner project
      nameProject={dataOurWorkItem.ourworkitem_name.map(item => item.text)}
      logoProject={dataOurWorkItem.ourworkitem_logo}
      nameCategoryOfWorkItem={dataOurWorkItem.name_category_of_ourworkitem}
      descriptionOfWorkItem={dataOurWorkItem.ourworkitem_description.map(
        item => item.text
      )}
      backgroundWorkItemSrc={dataOurWorkItem.ourworkitem_image.url}
      backgroundWorkItemAlt={dataOurWorkItem.ourworkitem_image.alt}
    >
      <SEO props={dataOurWorkItem} />
      <Study>
        {/* <TextBackground dataOurWorkItem={dataOurWorkItem} />
        <ImageSlider dataOurWorkItem={dataOurWorkItem} />
        <TextSolution dataOurWorkItem={dataOurWorkItem} />
        <ContentPercent dataOurWorkItem={dataOurWorkItem} />
        <ListSlider dataOurWorkItem={dataOurWorkItem} />
        <TextQoute dataOurWorkItem={dataOurWorkItem} />
        <TextBackground dataOurWorkItem={dataOurWorkItem} /> */}
        <SliceZone data={dataItem} />
        {/* <SimpleSlider /> */}
      </Study>
      <Other arrResult={arrResult} slugCurrent={slugCurrent} />
      <Interested />
    </Layout>
  )
}

export default OurWorkDetail
