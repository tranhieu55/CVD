import React from "react"
import styled from "styled-components"
import H2 from "../bits/H2"
import P from "../bits/Typography"
import IMG from "../Image"

export default function Cardwhatwedo(props) {
  return (
    <Study>
      <Container className="container">
        <IphoneX>
          { props ? 
            <BoxStudy
              className={` ${
                props.input.primary.location_image === "Left" ? "" : "cl-order"
              } ${
                props.input.primary.location_image === "Right"
                  ? "box-study-5"
                  : "box-study"
              }
                ${
                  props.input.primary.location_content === "Right"
                    ? "box-study-5"
                    : "box-study"
                }
                `}
              data-sal="zoom-in"
              data-sal-delay="2000"
              data-sal-easing="ease"
              data-sal-duration="1000"
            >
              <BoxImage className="box-img img-fluid">
                <IMG
                  objectFit="cover"
                  src={props.input.primary.what_we_do_image.url}
                  alt={props.input.primary.what_we_do_image.alt}
                />
              </BoxImage>
              <BoxDivStudy className="cl174"></BoxDivStudy>
              <BoxContentStudy className=" box-content-study">
                <BoxTagStudy className="box-tag-study">
                  <SpanBorderStudy className="my-border-study"></SpanBorderStudy>
                  <SpanTextStudy className="txt-study">
                    {" "}
                    {props.index + 1}/{props.input.total}
                  </SpanTextStudy>
                </BoxTagStudy>
                <H2
                  mrb="6"
                  lineh="32"
                  col="#101010"
                  letsp="-0.5"
                  fz="32"
                  fontFamily="Calibre Semibold"
                >
                  {props.input.primary.what_we_do_title[0]?.text}
                </H2>
                <P
                  lineh="28"
                  coLor="#222222"
                  fontFamily="Calibre Regular"
                  fontSise="20"
                >
                  {props.input.primary.what_we_do_description[0]?.text}
                </P>
                <BoxIconStudy className="icon-leadmore">
                  <SpanStudy className="learn-more-title">Learn more</SpanStudy>
                </BoxIconStudy>
              </BoxContentStudy>
              <BoxDivStudy className="cl80"></BoxDivStudy>
            </BoxStudy>
            : <></>
          }
        </IphoneX>
      </Container>
    </Study>
  )
}
const Container = styled.div`
  margin-bottom: 115px;
  max-width: 1240px !important;
  @media only screen and (max-width: 600px) {
    margin-bottom: 25px;
  }
  @media only screen and (min-width: 600px) {
    margin-bottom: 32px;
  }
  @media only screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
  @media only screen and (min-width: 992px) {
    margin-bottom: 40px;
  }
  @media only screen and (min-width: 1200px) {
    margin-bottom: 40px;
  }
`
const IphoneX = styled.div`
  padding: env(safe-area-inset-top) env(safe-area-inset-right)
    env(safe-area-inset-bottom) env(safe-area-inset-left);
`
const BoxStudy = styled.div``
const BoxImage = styled.div``
const BoxContentStudy = styled.div`
  width: 446px;
  @media only screen and (max-width: 600px) {
    width: 100%;
    padding: 0 17px;
  }
`
const BoxTagStudy = styled.div`
  display: flex;
  align-items: center;
  color: #999999;
  font-size: 14px;
  height: 16px;
  @media only screen and (max-width: 600px) {
    margin-bottom: 10px;
  }
  @media only screen and (min-width: 1366px) {
    margin-bottom: 12px;
  }
`
const SpanBorderStudy = styled.span`
  width: 64px;
  height: 2px;
  background-color: gold;
  margin-right: 16px;
  margin-bottom: 4px;
`
const SpanTextStudy = styled.span`
  font-family: "Calibre Semibold";
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 1px;
  color: #999999;
  letter-spacing: 1px;
`
const BoxIconStudy = styled.div`
  font-size: 20px;
  font-family: "Calibre Medium";
  font-weight: 500;
  margin-top: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    margin-left: 7px;
    margin-bottom: -2px;
  }
  @media only screen and (max-width: 600px) {
    height: 20px;
    font-size: 20px;
    margin-top: 14px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 992px) {
    font-size: 20px;
  }
`
const SpanStudy = styled.span``
const BoxDivStudy = styled.div``
const Study = styled.div`
  .box-study-5 {
    display: flex;
    align-items: center;
    margin-bottom: 115px;
  }
  h2 {
    font-weight: 600;
  }
  .box-study {
    display: flex;
    align-items: center;
    margin-bottom: 96px;
  }
  .cl-order {
    flex-direction: row-reverse;
  }

  .icon-leadmore span {
    color: #101010;
    line-height: 2px;
    font-size: 20px;
  }
  .icon-leadmore:hover svg {
    transition: all 0.8s ease;
    transform: translateX(15px);
    animation: mymove 0.8s infinite;
  }

  .box-img:hover {
    box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px,
      rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
    -moz-box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px;
  }
  img:hover {
    transform: scale(1.05);
  }
  .container {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  .cl174 {
    width: 174px;
  }
  .cl80 {
    width: 80px;
  }

  @keyframes mymove {
    0% {
      transform: translateX(0px);
    }
    50% {
      transform: translateX(5px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @media only screen and (max-width: 600px) {
    .box-study {
      flex-direction: column;
      margin-bottom: 30px;
    }
    .icon-leadmore span {
      line-height: 26px;
    }
    h2 {
      line-height: 28px;
      margin-bottom: 4px;
    }
    span.learn-more-title::after {
      line-height: 19px !important;
    }
    .box-study-5 {
      flex-direction: column;
      margin-bottom: 30px;
    }
    .box-img {
      padding-left: 16px !important;
      padding-right: 16px !important;
      margin-bottom: 20px;
      width: 100% !important;
      height: 100% !important;
    }
    .cl174 {
      display: none;
    }
    .cl80 {
      display: none;
    }
    h2 {
      font-size: 24px;
      word-spacing: 2px;
    }
    p {
      font-size: 20px;
    }
  }
  @media only screen and (min-width: 600px) {
    .box-study {
      padding-right: 15px;
      padding-left: 15px;
    }
    .box-study-5 {
      padding-right: 15px;
      padding-left: 15px;
    }

    h2 {
      font-size: 22px;
    }
    p {
      font-size: 16px;
    }
    .box-img {
      width: 100%;
      height: 100%;
    }
    .cl174 {
      width: 100px;
    }
    .cl80 {
      display: none;
    }
    .study {
      margin-bottom: 32px;
    }
    .box-study-5 {
      margin-bottom: 32px;
    }
  }
  @media only screen and (min-width: 768px) {
    h2 {
      font-size: 26px;
    }
    p {
      font-size: 16px;
    }
    .box-study-5 {
      margin-bottom: 40px;
    }
  }
  @media only screen and (min-width: 992px) {
    h2 {
      font-size: 32px;
    }
    p {
      font-size: 20px;
    }
    .cl174 {
      width: 150px;
    }
    .cl80 {
      width: 20px;
    }
    .box-study-5 {
      margin-bottom: 48px;
    }
  }
  @media only screen and (min-width: 1200px) {
    .cl174 {
      width: 130px;
    }
    .box-study-5 {
      margin-bottom: 96px;
    }
  }
  @media only screen and (min-width: 1366px) {
    .box-study {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
    .cl174 {
      width: 174px;
    }
    .cl80 {
      display: block;
    }
  }
  .box-img {
    width: 540px;
    height: 540px;
  }

  span.learn-more-title {
    display: flex;
    &::after {
      content: "\f178";
      font-family: "Font Awesome 5 Pro Regular";
      height: 18px;
      line-height: 0px;
      font-size: 18px;
      color: #101010;
      padding: 0px 0.6rem;
    }
  }
`
