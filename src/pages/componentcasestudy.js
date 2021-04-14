import styled from "styled-components"
import React from 'react';
import SliceZone from '../utils/SliceZone';


const ComponentCaseStudys = ({ data: { prismic } }) =>{
    const data = prismic.allProjectss.edges[7].node.body;
    return (
        <Container>
            <SliceZone allSlices={data} />
        </Container>
    )
}

export default ComponentCaseStudys

const Container = styled.div`

`
export const pageQuery = graphql`
    query ComponentQuery {
        prismic {
            allProjectss {
              edges {
                node {
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
                }
              }
            }
          }
    }
`