import React from "react"
import { createGlobalStyle } from "styled-components"
import styled from "styled-components"
import CalibreRegular from "../../assets/fonts/CalibreRegular.woff"
import CalibreSemibold from "../../assets/fonts/CalibreSemibold.woff"
import { graphql, useStaticQuery } from "gatsby"

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Calibre Regular';
    font-style: normal;
    font-weight: 400;
    src: local('Calibre Regular'), url(${CalibreRegular}) format('woff');
}

@font-face {
font-family: 'Calibre Semibold';
font-style: normal;
font-weight: 600;
src: local('Calibre Semibold'), url(${CalibreSemibold}) format('woff');
}
*,*::after, *::before { 
  box-sizing : border-box;
}
`

const ThreeColumnProfile = ({ input }) => {
  // get data from graphql
  const data = useStaticQuery(graphql`
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

  // get data for profiles
  const dataProfiles =
    data?.prismic?.allNotfound_pages?.edges[0]?.node?.body[1]?.fields

  return (
    <Container>
      <GlobalStyle />
      <Body>
        <Profile>
          {dataProfiles.map((element, index) => (
            <BlockProfile key={index}>
              <IMG>
                <img src={element?.avatar?.url} alt={element?.avatar?.alt} />
              </IMG>
              <Position>{element?.position[0]?.text}</Position>
              <Name>{element?.name[0]?.text}</Name>
              <Description>{element?.description[0]?.text}</Description>
            </BlockProfile>
          ))}
        </Profile>
      </Body>
    </Container>
  )
}

export default ThreeColumnProfile

const Container = styled.div`
  margin-top: 56px;

  @media (max-width: 600px) {
    margin-top: 29px;
  }
`

const Body = styled.div`
  display: flex;
  justify-content: center;
`
const Profile = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const BlockProfile = styled.div`
  width: 30vw;
  max-width: 394px;

  @media (max-width: 992px) {
    width: 40vw;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`

const IMG = styled.div`
  width: 100%;
  height: 508px;
  margin-bottom: 16px;
  background-color: gray;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 600px) {
    height: 485px;
  }
`

const Position = styled.span`
  color: #999999;
  font-family: Calibre Semibold;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 16px;
  position: relative;
  margin-left: 80px;
  height: 16px;
  text-transform: uppercase;

  &::after {
    position: absolute;
    right: calc(100% + 16px);
    top: 35%;
    display: block;
    content: "";
    width: 64px;
    height: 2px;
    background: #fecf09;
  }
  @media (max-width: 600px) {
    &::after {
      width: 61.08px;
    }
  }
`

const Name = styled.h4`
  margin-bottom: 4px;
  margin-top: 8px;
  font-size: 32px;
  line-height: 32px;
  letter-spacing: -0.5px;
  color: #101010;
  font-family: Calibre Semibold;
  text-align: left;

  @media (max-width: 600px) {
    margin-top: 6px;
    margin-bottom: 2px;
  }
`

const Description = styled.p`
  color: #222222;
  font-family: Calibre Regular;
  font-size: 18px;
  line-height: 24px;
  margin: 0;
`