import React from "react"
import { createGlobalStyle } from "styled-components"
import styled from "styled-components"
import CalibreRegular from "../../assets/fonts/CalibreRegular.woff"
import CalibreSemibold from "../../assets/fonts/CalibreSemibold.woff"
import CalibreMedium from "../../assets/fonts/CalibreMedium.woff"
import FontAwesome5ProRegular from "../../assets/fonts/FontAwesome5Pro-Regular.woff"

import { graphql, useStaticQuery } from "gatsby"
import ArticleTile from "../BlogArticleTiles/ArticleTile"

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Calibre Regular';
    font-style: normal;
    font-weight: 400;
    src: local('Calibre Regular'), url(${CalibreRegular}) format('woff');
}
@font-face {
  font-family: 'Calibre Medium';
  font-style: normal;
  font-weight: 500;
  src: local('Calibre Medium'), url(${CalibreMedium}) format('woff');
  }
  
  @font-face {
    font-family: 'Font Awesome 5 Pro Regular';
    font-style: normal;
    font-weight: normal;
    src: local('Font Awesome 5 Pro Regular'), url(${FontAwesome5ProRegular}) format('woff');
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
function BlogArticleTiles() {
  return (
    <Container>
      <GlobalStyle />
      <Body>
        <Blog>
          <ArticleTile />
          <ArticleTile />
        </Blog>
      </Body>
    </Container>
  )
}

export default BlogArticleTiles

const Container = styled.div`
  margin-top: 48px;

  @media (max-width: 600px) {
    margin-top: 30px;
  }
`

const Body = styled.div`
  display: flex;
  justify-content: center;
`
const Blog = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 26px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 600px) {
    grid-gap: 16px;
  }
`
