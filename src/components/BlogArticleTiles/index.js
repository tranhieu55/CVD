import React from "react"
import { createGlobalStyle } from "styled-components"
import styled from "styled-components"
import CalibreRegular from "../../assets/fonts/CalibreRegular.woff"
import CalibreSemibold from "../../assets/fonts/CalibreSemibold.woff"
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
  margin-top: 56px;

  @media (max-width: 600px) {
    margin-top: 29px;
  }
`

const Body = styled.div`
  display: flex;
  justify-content: center;
`
const Blog = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`
