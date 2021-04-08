import React, { querySelector, querySelectorAll, useState} from "react"
import styled from "styled-components"
import { graphql, Link, useStaticQuery } from "gatsby"



const OurServices = ({ input }) => {
  console.log({input})
    const data = useStaticQuery(graphql`
    query queryOurServices {
      prismic {
        allOur_services_home_pages {
          edges {
            node {
              body {
                ... on PRISMIC_Our_services_home_pageBodyServices_item {
                  type
                  label
                  fields {
                    service_sub_title
                  }
                  primary {
                    title_service_item
                  }
                }
              }
              title_our_services
            }
          }
        }
      }
    }
    `
    )
   const datas = data.prismic.allOur_services_home_pages.edges[0].node.body
   console.log(datas)
  return (
    <Container>
        <Title>Our services</Title>
        <Content>
          <CardItem >
              {datas.map((item, index) => (
                  <Cards key={index} >
                      <SubTitle>{item.primary.title_service_item.map(item => item.text)}</SubTitle>
                      {item.fields.map((item, index)=>(
                          <SubText key={index}>{item.service_sub_title.map(item => item.text)}</SubText>
                      ))}
                  </Cards>
              ))}
          </CardItem>
        </Content>
    </Container>
    // <><h1>abc</h1></>
  )
}

export default OurServices


const Container = styled.div`
    height: 515px;
    position: relative;
    margin-top: 96px;
`

const Title = styled.h1`
  height: 56px;
  color: #101010;
  font-family: Calibre Bold;
  font-size: 64px;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 56px;
  max-width: 1240px;
  margin: 0 auto;
`   
const Cards = styled.div`
  height: 136px;
  width: 278px;
  margin-right: 32px;

`
const CardItem = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`
const SubTitle = styled.h4`
  color: #101010;
  font-family: Calibre Semibold;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 20px;
  margin-bottom: 0px;
  width: 286px;
`
const Content = styled.div`
  height: 330px;
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  margin-top: 32px;
`
const SubText = styled.h4`
  color: #262626;
  font-family: Calibre;
  font-size: 20px;
  letter-spacing: 0;
  line-height: 28px;
  margin-bottom: 0px;
  width: 286px;
`
