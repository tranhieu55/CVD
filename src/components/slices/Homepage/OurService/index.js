import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

const OurServices = ({ input }) => {
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
  `)
  const datas = data ? data.prismic?.allOur_services_home_pages?.edges[0]?.node?.body : [];
  return (
    <Container>
      <Title>Our services</Title>
      <Content>
        <CardItem>
          {data ? datas?.map((item, index) => (
            <Cards key={index}>
              <SubTitle>
                { item?.primary ? item?.primary?.title_service_item?.map(item => item?.text ? item?.text : item) : ''}
              </SubTitle>
              {item ? item.fields?.map((item, index) => (
                <SubText key={index}>
                  {item?.service_sub_title?.map(item => item?.text ? item?.text : item )}
                </SubText>
              )): <></>}
            </Cards>
          )): <></>}
        </CardItem>
      </Content>
    </Container>
  )
}

export default OurServices

const Container = styled.div`
  height: 515px;
  position: relative;
  margin-top: 96px;
  border-top: 1px solid #e4e4e4;
  @media (max-width: 600px) {
    display: none;
  }
  @media (min-width: 601px) {
    height: 820px;
    margin: 96px 32px 50px;
  }
  @media (min-width: 1024px) {
    height: 730px;
    margin: 96px 32px 0px;
  }
  @media (min-width: 1366px) {
    height: 660px;
    margin: 96px 0px 88px;
  }
  @media (min-width: 1600px) {
    height: 515px;
    margin: 96px 0px 88px;
  }
`

const Title = styled.h1`
  height: 56px;
  color: #101010;
  font-family: "Calibre Bold";
  font-size: 64px;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 56px;
  max-width: 1240px;
  margin: 0 auto;
  margin-top: 88px;
`
const Cards = styled.div`
  height: 136px;
  width: 30%;
  margin-right: 32px;
  @media (min-width: 600px) {
    width: 44%;
    height: 155px;
    margin-bottom: 16px;
  }
  @media (min-width: 1024px) {
    width: 30%;
    height: 160px;
  }
  @media (min-width: 1600px) {
    height: 136px;
    width: 22%;
  }
`
const CardItem = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`
const SubTitle = styled.h4`
  color: #101010;
  font-family: "Calibre Semibold";
  font-size: 20px;
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
  font-family: "Calibre Regular";
  font-size: 20px;
  letter-spacing: 0;
  line-height: 28px;
  margin-bottom: 0px;
  width: 286px;
`
