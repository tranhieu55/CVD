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


// đây là lấy ra 1 cái
export const query = graphql`
  query getOurkItemBySlug ($slug: String!) {
    prismic {
    allOurwork_items {
      edges {
        node {
          ourworkitem_logo
          ourworkitem_name
          ourworkitem_image
          ourworkitem_description
          _meta {
            uid
          }
          relationship_to_categoryourwork {
            ... on PRISMIC_Category_ourwork {
              _meta {
                uid
              }
            }
          }
        }
      }
    } 
    ourwork_item(uid: $slug, lang: "en-gb") {
      ourworkitem_image
      ourworkitem_description
      ourworkitem_logo
      ourworkitem_name
      body {
        ... on PRISMIC_Ourwork_itemBodyOurworkitem_description {
          type
          label
          primary {
            text_description
            title
          }
        }
        ... on PRISMIC_Ourwork_itemBodyText_quote {
          type
          label
          primary {
            text_quote_description
            title_quote
          }
        }
        ... on PRISMIC_Ourwork_itemBodyTitle_solution {
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
        ... on PRISMIC_Ourwork_itemBodyList_image {
          type
          label
          fields {
            image_item
            location
            order
            width_image
          }
        }
        ... on PRISMIC_Ourwork_itemBodySlider_image {
          type
          label
          fields {
            slider_image
          }
        }
        ... on PRISMIC_Ourwork_itemBodyStatistical_ourwork_item_ {
          type
          label
          fields {
            description_of_statistical
            number_of_statistical
          }
        }
      }
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
`
const OurWorkDetail = props => {
  // console.log("Data response ,", props.data);
  let dataOurWorkItem = props.data.prismic.ourwork_item
  let slugCurrent = props.pathContext.slug
  let allProjects = props.data.prismic.allOurwork_items.edges
  console.log({ 'alo': props })

  let removeProjectInPageCurrent = allProjects.filter(
    item => item.node._meta.uid !== slugCurrent
  )

  let arrRandom = []
  while (arrRandom.length < 2) {
    let r = Math.floor(Math.random() * removeProjectInPageCurrent.length)
    if (arrRandom.indexOf(r) === -1) arrRandom.push(r)
  }

  const arrResult = arrRandom.map(x => removeProjectInPageCurrent[x])

  const dataItem = props.data.prismic.ourwork_item.body
  console.log(dataItem)
  console.log(allProjects)
  return (
    <Layout
      location="/case-study"
      // pass to banner project
      nameProject={dataOurWorkItem.ourworkitem_description[0].text}
      logoProject={dataOurWorkItem.ourworkitem_logo}
      nameCategoryOfWorkItem={dataOurWorkItem.relationship_to_categoryourwork._meta.uid}
      descriptionOfWorkItem={dataOurWorkItem.relationship_to_categoryourwork.text}
      backgroundWorkItemSrc={dataOurWorkItem.ourworkitem_image.url}
      backgroundWorkItemAlt={dataOurWorkItem.ourworkitem_image.alt}
    >
      <SEO props={dataOurWorkItem} />
      <Study>
        <SliceZone data={dataItem} />
      </Study>
      <Other arrResult={arrResult} slugCurrent={slugCurrent} />
      <Interested />
    </Layout>
  )
}

export default OurWorkDetail
