import React from "react"
import styled from "styled-components"
import SliceZone from "../utils/SliceZone"
import PartnerFeatureTiles from "../components/PartnerFeatureTile"
import { graphql, useStaticQuery } from "gatsby"

function Preview() {
  // get data from graphql
  const dataGraphql = useStaticQuery(graphql`
    query QueryThreeColumnProfile {
      prismic {
        allNotfound_pages {
          edges {
            node {
              body {
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
  `)

  // get data
  const data = dataGraphql?.prismic?.allNotfound_pages?.edges[0]?.node
    ? dataGraphql?.prismic?.allNotfound_pages?.edges[0]?.node
    : []

  return (
    <>
      <PartnerFeatureTiles />
      <SliceZone allSlices={data.body} />
    </>
  )
}

export default Preview

const Titles = styled.h4`
  font-family: "Calibre Regular";
  height: 28px;
  width: 191px;
  color: #6f6f6f;
  font-size: 24px;
  letter-spacing: 0;
  line-height: 29px;
  padding-left: 14px;
  padding-bottom: 17px;
  padding-top: 97px;
`
