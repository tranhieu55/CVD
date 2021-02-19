import React from "react"
import styled from "styled-components"
import { theme } from "../../utils/theme"
import IMG from "../Image"

const BannerStyle = styled.div`
  width: 100%;
  background-color: ${theme.colors.secondaryColor};
  height: 100vh;
  color: white;
  display: flex;
  align-items: center;
  .title-banner {
    
    h4 {
      text-transform: uppercase;
      letter-spacing: 6px;
    }
  }
  .img-fluid {
    max-width: 100%;
    height: 100vh;
    width: 100vw;
    object-fit: cover;
  }
  .col-md-8 {
    padding-top: 80px;
  }
  .col-md-4 {
    padding-top: 80px;
  }
  .box-button {
    margin-top: 40px;
  }

  /* Reponsive */
  /* Extra small devices (phones, 600px and down) */
  @media (max-width: 1023px) {
    max-height: 400px;
      .img-fluid {
        max-height: 400px;
      }
  }
  @media only screen and (max-width: 600px) {
    height: 400px;
    margin-bottom:24px;
    .col-md-4 {
      padding-top: 20px;
    }
    .col-md-8 {
      padding-top: 40px;
      padding-left: 0px;
      padding-right: 0px;
    }
      .img-fluid {
        height: 100% !important;
        object-fit: cover;
      }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 601px) {
    margin-bottom:30px;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    /* height: 346px; */
    margin-bottom:50px;
    .img-fluid {
      object-fit: cover;
    }
    
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media (min-width: 1024px) {
    height: 446px;
    margin-bottom:50px;
    .img-fluid {
      height: 446px;
    }
  }
  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    height: 664px;
    margin-bottom:96px;
      .img-fluid {
        height: 100%;
      }
  }
  @media only screen and (min-width: 1600px) {
    max-height: 796.8px;
      .img-fluid {
        max-height: 100%;
        object-fit: cover;
      }
  }
`
const IamgeBanner = styled.div`
  @media (max-width: 1023px){
    max-height: 400px;
  }
  @media only screen and (max-width: 600px){
    height: 400px;
  }
  @media only screen and (min-width: 1200px){
    height: 664px;
  }
  @media only screen and (min-width: 1600px){
    max-height: 796.8px;
  }
`
const Image = styled.img`

`
const Shadow = styled.div`
  height: 100%;
  width: 100%;
  opacity: 0.4;
  position: absolute;
  @media (max-width: 600px){
    height: 100%;
    width: 100%;
    opacity: 0.4;
    position: absolute;
  }
`
const TitleBanner = styled.div`
  position: absolute;
  width: 70vw;
  padding: 250px;
  padding-top: 400px;
  @media (max-width: 1023px){
    width: 95vw;
    padding: 320px 60px 250px;
    img {
        margin-top: 20px;
      }
  }
  @media (max-width: 600px){
    padding-left: 24px;
    padding-top: 446px;
    padding-right: 0px;
    img {
        margin-top: 12px;
      }
  }
  @media (min-width: 768px){
    margin: 43px 80px 0px;
    padding: 0px;
    width: 70%;
    img {
        margin-top: 16px;
      }
  }
  @media (min-width: 1024px){
    margin: 57px 40px 0px;
    padding: 0px;
    padding-top: 0px;
  }
  @media (min-width: 1200px){
    width: 60%;
    margin-left: 17%;
    margin-top: 7%;
    padding: 0%;
    img {
        margin-top: 13px;
      }
  }
  @media (min-width: 1600px){
    margin-top: 72px;
    max-width: 606px;
    height: 248px;
    margin-left: 286px;
  }
`
const Shopify = styled.div`
  height: 19px;
`
const P = styled.p`
  color: #fecf09;
  @media (max-width: 600px){
    font-size: 18px;
    font-family: "Calibre Semibold";
    margin-bottom: 0px;
    line-height: 20px;
  }
  @media (min-width: 1200px){
    font-size: 18px;
    font-family: "Calibre Semibold";
    font-size: 18px;
    margin-bottom: 16px;
    line-height: 22px;
    font-weight: 600;
  }
`
const TextBanner = styled.div`
  @media only screen and (min-width: 768px){
    margin-top: 0px;
  }
  @media (min-width: 1200px){
    width: 606px;
    height: 120px;
    margin-top: 89px;
  }
`
const H1 = styled.h1`
  font-weight: bold;
  font-size: 150px;
  @media (max-width: 600px){
    font-size: 32px;
    font-family: "Calibre Bold";
    letter-spacing: -0.5px;
    padding-top: 54px;
    margin-bottom: 0px;
    line-height: 34px;
  }
  @media (max-width: 1023px){
    padding-top: 54px;
  }
  @media (min-width: 601px){
    font-size: 36px;
  }
  @media (min-width: 768px){
    font-size: 50px;
  }
  @media only screen and (min-width: 992px) {
      font-weight: 600;
      font-size: 64px;
  }
  @media (min-width: 1200px){
    font-size: 64px;
    font-family: "Calibre Bold";
    font-weight: bold;
    line-height: 60px;
    margin-bottom: 0px;
  }
`

function BannerCaseStudy({
  nameProject,
  logoProject,
  nameCategoryOfWorkItem,
  backgroundWorkItemSrc,
  backgroundWorkItemAlt,
}) {
  return (
    <BannerStyle className="container-study">
      <IamgeBanner>
        <Image
          alt="a"
          className="img-fluid"
          src={backgroundWorkItemSrc}
          alt={backgroundWorkItemAlt}
        ></Image>
      </IamgeBanner>
      <Shadow></Shadow>
      <TitleBanner>
        <Shopify>
          <P>{nameCategoryOfWorkItem}</P>
        </Shopify>
        <IMG
          src={logoProject.url}
          w={logoProject.dimensions.width}
          h={logoProject.dimensions.height}
        />
        <TextBanner>
          <H1
            data-sal="slide-up"
            data-sal-delay="4000"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            {nameProject}
          </H1>
        </TextBanner>
      </TitleBanner>
    </BannerStyle>
  )
}

export default BannerCaseStudy
