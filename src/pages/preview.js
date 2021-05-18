import React from "react"
import ThreeColumnProfile from "../components/ThreeColumnProfile"
import { createGlobalStyle } from "styled-components"
import styled from "styled-components"
import CalibreRegular from "../assets/fonts/CalibreRegular.woff"
import CalibreSemibold from "../assets/fonts/CalibreSemibold.woff"

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

function Preview() {
  return (
    <>
      <Titles>3 Column Profiles</Titles>
      <ThreeColumnProfile />
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
