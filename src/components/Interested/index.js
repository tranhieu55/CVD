import React from "react"
import styled from "styled-components"
import { theme } from "../../utils/theme"
import ButtonCustom from "../ButtonCustom"
import P from "../../components/bits/Typography"

const InterestedStyle = styled.div`
  clip-path: polygon(0px 16%, 101% 2px, 100% 100%, 0% 100%);
  background-color: #101010;
  width: 100%;
  color: white;
  margin: -2px auto;
  .button-header {
    .get-in-touch {
      height: 20px;
      color: #ffffff;
      /* font-family: 'Calibre Semibold'; */
      font-size: 20px;
      font-weight: 600;
      letter-spacing: 0;
      line-height: 24px;
      text-align: center;
    }
  }
  h2 {
    font-size: 64px;
    font-weight: bold;
    margin-bottom: 0px;
    max-width: 500px;
    margin: auto;
    font-family: 'Calibre Bold';
  }
  p {
    /* font-size: 24px; */
    letter-spacing: 0px;
    margin-bottom: 32px;
  }
  .box-btn {
    position: relative;
  }
  .my-btn-back:hover::before {
    transform: translate(270px);
    opacity: 0.5;
    overflow: hidden;
  }
  .my-btn::before {
    background-color: white;
    content: "";
    height: 155px;
    left: -75px;
    opacity: 0.7;
    position: absolute;
    top: -50px;
    -webkit-transform: rotate(60deg);
    transform: rotate(35deg);
    transition: all 0.2s ease;
    width: 50px;
    z-index: 1;
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    clip-path: polygon(0 8%, 100% 0%, 100% 100%, 0% 100%);
    h2 {
      font-size: 32px;
      max-width: 260px;
      margin: auto;
      line-height: 33px;
      font-family: 'Calibre Bold';
      letter-spacing: -0.5px;
    }
    p {
      padding: 5px 24px;
      margin-bottom: 10px;
      font-size: 20px;
      line-height: 24px;
    }
  }
  .button-header {
    &::before {
      content: "";
    }
  }

  .button-header span:nth-child(1) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, #fff, transparent);
    animation: animate1 2s linear infinite;
  }
  @keyframes animate1 {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
  .button-header span:nth-child(2) {
    position: absolute;
    top: 0;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, #fff, transparent);
    animation: animate2 2s linear infinite;
    animation-delay: 1s;
  }
  @keyframes animate2 {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100%);
    }
  }
  .button-header span:nth-child(3) {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to left, #fff, transparent);
    animation: animate3 2s linear infinite;
  }
  @keyframes animate3 {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  .button-header span:nth-child(4) {
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(to top, #fff, transparent);
    animation: animate4 2s linear infinite;
    animation-delay: 1s;
  }

  @keyframes animate4 {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(-100%);
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    h2 {
      font-size: 40px;
      max-width: 320px;
      margin: auto;
      font-family: 'Calibre Bold';
    }
    p {
      font-size: 20px;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    h2 {
      font-size: 40px;
      max-width: 325px;
      margin: auto;
      font-family: 'Calibre Bold';
    }
    p {
      margin-top: 20px;
      font-size: 24px;
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    h2 {
      font-size: 64px;
      max-width: 500px;
      margin: auto;
      font-family: 'Calibre Bold';
    }
    p {
      font-size: 24px;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    h2 {
      font-size: 64px;
      max-width: 500px;
      margin: auto;
      font-family: "Calibre Bold";
      color: #ffffff;
      font-weight: bold;
      line-height: 54px;
      font-family: 'Calibre Bold';
      letter-spacing: -1px;
    }
    p {
      font-size: 24px;
      margin-top: 6px;
      color: #ffffff;
      margin-bottom: 28px;
    }
  }
`
const BoxInterested = styled.div`
  padding-top: 175px;
  padding-bottom: 108px;
  max-width: 700px;
  margin: auto;
  text-align: center;
  @media only screen and (max-width: 600px) {
    padding-top: 69px;
    padding-bottom: 48px;
  }
  @media only screen and (min-width: 1200px) {
    padding-top: 187px;
    padding-bottom: 108px;
  }
  @media (min-width: 1600px){
    padding-top: 175px;
    padding-bottom: 108px;
  }
`
const Span = styled.span``
const BoxBtn = styled.div``
const H2 = styled.h2``
export default function Interested(props) {
  return (
    <InterestedStyle>
      <BoxInterested>
        <H2 lett="-1" fz="64" lineh="54" fontFamily="Calibre Bold">
          Interested in working with us?
        </H2>
        <P lineh="30" fontFamily="Calibre Regular" mrb="30">
          Send us a message and we'll get back to you as soon as possible
        </P>
        <BoxBtn>
          <ButtonCustom
            className="my-btn-back  my-btn button-header"
            bgColor={theme.colors.black}
            textColor={theme.colors.white}
            variant="primary"
            fz="20"
            pd1="16"
            pd2="31.5"
            lineh="24"
          >
            <Span></Span>
            <Span></Span>
            <Span></Span>
            <Span></Span>
            <H2 className="get-in-touch">Get in touch</H2>
          </ButtonCustom>
        </BoxBtn>
      </BoxInterested>
    </InterestedStyle>
  )
}
