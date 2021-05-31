import React, { useRef, useState } from "react"
import styled from "styled-components"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const HappyClient = ({ input }) => {
  const Titles = input
    ? input.primary?.title_happy_client?.map(item =>
        item?.text ? item?.text : item
      )
    : []

  const [indicator, setindicator] = useState(0)

  function updateSelected(index) {
    setindicator(index)
  }

  const ref = useRef()

  function Nextshowslider() {
    return (
      (ref.current.scrollLeft =
        ref.current.clientWidth > 600
          ? ref.current.scrollLeft + document.getElementsByClassName("sliders")
          : ref.current.scrollLeft + 350)
    )
  }
  function Prevshowslider() {
    return (ref.current.scrollLeft =
      ref.current.clientWidth > 600
        ? ref.current.scrollLeft - 650
        : ref.current.scrollLeft - 350)
  }

  return (
    <HappyClients>
      <Title>{Titles}</Title>
        <OwlCarousel margin={72} responsive={false} autoWidth={true} items={2} className="owl-theme" ref={ref} >
        {input ? input.fields?.map((item, index) => (
          <Slider
            key={index}
            onClick={() => updateSelected(index)}
            indicator={index === indicator}
            className="sliders item"
          >
            <Img alt={item.logo_client?.alt ? item.logo_client?.alt : ""} 
            src={item.logo_client?.url ? item.logo_client?.url : ""}>
            </Img>
            <Text>
              <Content>{item.qoute_of_client?.map(items => items?.text ? items?.text : item)}</Content>
            </Text>
            <Sub>
              <SubTilte>{item.title?.map(items => items?.text ? items?.text : item)}</SubTilte>
              <SubText>{item.sub_title?.map(items => items?.text ? items?.text : item)}</SubText>
            </Sub>
          </Slider>
        )) : <></>}
      </OwlCarousel>
      
      <Opaci></Opaci>
      <Buttonss onClick={() => Prevshowslider()}></Buttonss>
      <Buttons onClick={() => Nextshowslider()}></Buttons>
    </HappyClients>
  )
}

export default HappyClient

const HappyClients = styled.div`
  height: 822px;
  background-color: #f8f8f8;
  position: relative;
  margin-top: 96px;
  clip-path: polygon(0px 0%, 100% 2px, 100% 87%, 0% 100%);
  @media (max-width: 600px) {
    height: 653px;
    margin-top: 24px;
    clip-path: polygon(0px 0%, 100% 2px, 100% 96%, 0% 100%);
  }
  @media (min-width: 600px) {
    clip-path: polygon(0px 0%, 100% 2px, 100% 95%, 0% 100%);
  }
  .owl-carousel{
    position: initial;
  }
  .owl-carousel .owl-stage-outer{
    position : absolute;
  }
  .owl-theme .owl-nav.disabled + .owl-dots{
    margin-top: 10px;
    height: 20px;
    bottom: 19.2%;
    position: absolute;
    left: 30%;
    width: 624px;
    @media(max-width: 767px){
      width: 200px;
      margin: auto;
      bottom: 19.5%;
    }
    @media(max-width: 320px){
      margin-auto;
    }
    @media(min-width: 768px){
      left: 15%;
      width: 350px;
    }
    @media(min-width: 992px){
      left: 10%;
      width: 624px;
      bottom: 19.2%;
    }
    @media (min-width: 1366px){
      left: 30%;
      bottom: 19.2%;
    }
  }
  .owl-theme .owl-dots .owl-dot {
    width: 86px;
    span{
      width: 100%;
      height: 4px;
      margin-left: 0px;
      margin-right: 0px;
      background-color: #EEEEEE;
      border-radius: 2px;
    }
    @media(max-width: 767px){
      width: 16px;
    }
    @media(min-width: 768px){
      width: 32px;
    }
    @media(min-width: 992px){
      width: 46px;
    }
    @media (min-width: 1366px){
      width: 86px;
    }
  }
  .owl-theme .owl-dots .owl-dot.active{
    width: 450px;
    span{
      background-color: #BBBBBB;
    }
    @media(max-width: 767px){
      width: 150px
    }
    @media(min-width: 768px){
      width: 250px;
    }
    @media(min-width: 992px){
      width: 450px;
    }
    @media (min-width: 1366px){
      width: 450px;
    }
  }
  .owl-carousel.owl-loaded{
    height: 406px;
    margin-top: 145px;
    padding-left: 180px;
    @media (max-width: 600px) {
      // margin-top: 64px;
      margin-top: 32px;
      padding-left: 48px;
      height: 354px;
    }
    @media (min-width: 600px) {
      padding-left: 48px;
      height: 354px;
      width: 100%;
    }
    @media (min-width: 1366px) {
      height: 406px;
      margin-top: 145px;
      padding-left: 180px;
    }
    img{
      height: 24px;
      width: 162px;
      @media (max-width: 600px) {
        height: 24px;
        width: 162px;
      }
    }
  }
`

const Title = styled.h1`
  height: 72px;
  color: #101010;
  font-family: Calibre Bold;
  font-size: 80px;
  font-weight: bold;
  letter-spacing: -2px;
  line-height: 72px;
  text-align: center;
  padding-top: 100px;
  margin-bottom: 0px;
  @media (max-width: 600px) {
    height: 121px;
    font-size: 40px;
    font-weight: bold;
    letter-spacing: -1px;
    line-height: 38px;
    text-align: center;
    padding: 52px 32px 0px;
  }
  @media (max-width: 320px) {
    font-size: 40px;
    padding: 52px 47px 0px;
  }
  @media (min-width: 601px) {
    padding: 100px 32px 0px;
  }
  @media (min-width: 768px) {
    padding: 100px 0px 0px;
  }
`
const Slider = styled.div`
  // height: 254px;
  // width: 548px;
  // margin-right: 72px;
  // margin-top: 47px;
  // overflow: none;
  // @media (max-width: 600px) {
  //   margin-top: 0px;
  //   margin-right: ${props => (props.indicator === 4 ? "0px" : "64px")};
  // }
  // @media (max-width: 320px) {
  //   width: 265px;
  // }
`
const Slides = styled.div`
  
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    height: 4px;
    width: 624px;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #d5d5d5;
    border-radius: 10px;
    margin-right: calc((100vw - 624px) / 2);
    margin-left: calc((100vw - 624px) / 2);
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #bbbbbb;
    border-radius: 10px;
    width: 30%;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }

  
`
const Img = styled.img`
  height: 24px;
  width: 162px;
  @media (max-width: 600px) {
    height: 24px;
    width: 162px;
  }
`
const Text = styled.div`
  width: 548px;
  padding-top: 32px;
  padding-bottom: 14px;
  @media (max-width: 600px) {
    width: 282px;
    padding-top: 14px;
    padding-bottom: 16px;
  }
  @media (max-width: 320px) {
    width: 265px;
    padding-right: 15px;
  }
`
const Content = styled.span`
  color: #222222;
  font-family: Calibre Regular;
  font-size: 20px;
  letter-spacing: 0;
  line-height: 28px;
  @media (max-width: 600px) {
    font-size: 18px;
    letter-spacing: 0;
    line-height: 18px;
  }
`

const SubTilte = styled.div`
  color: #222222;
  font-family: Calibre Semibold;
  font-size: 20px;
  letter-spacing: 0;
  line-height: 22px;
  @media (max-width: 600px) {
    font-size: 18px;
    letter-spacing: 0;
    line-height: 20px;
  }
`
const SubText = styled.div`
  color: #555555;
  font-family: Calibre Regular;
  font-size: 20px;
  letter-spacing: 0;
  line-height: 22px;
  @media (max-width: 600px) {
    font-size: 18px;
    letter-spacing: 0;
    line-height: 20px;
  }
`
const Sub = styled.div`
  height: 44px;
  width: 121px;
`
const Opaci = styled.div`
  height: 348px;
  width: 248px;
  background: linear-gradient(90deg, rgba(252, 252, 252, 0) 0%, #f8f8f8 100%);
  position: absolute;
  top: 238px;
  right: 0px;
  @media (max-width: 992px) {
    display: none;
  }
`

const Buttons = styled.div`
  position: absolute;
  top: 636px;
  right: 171px;
  color: #d3d3d3;
  :hover {
    color: #aaabab;
  }
  &::after {
    content: "\f178";
    font-family: "Font Awesome 5 Pro Regular";
    height: 24px;
    width: 28px;
    font-size: 32px;
    font-weight: 300;
    letter-spacing: 0;
    line-height: 24px;
    text-align: center;
    margin-left: 24px;
  }
  @media (max-width: 600px) {
    top: 570px;
    right: 40%;
    &::after {
      height: 24px;
      width: 28px;
    }
  }
  @media (min-width: 600px) {
    right: 23%;
  }
  @media(min-width: 992px){
    right: 14%
  }
  @media (min-width: 1366px) {
    position: absolute;
    top: 636px;
    right: 171px;
    &::after {
      content: "\f178";
      font-family: "Font Awesome 5 Pro Regular";
      height: 24px;
      width: 28px;
      font-size: 32px;
      font-weight: 300;
      letter-spacing: 0;
      line-height: 24px;
      text-align: center;
      margin-left: 24px;
    }
  }
`
const Buttonss = styled.div`
  position: absolute;
  top: 636px;
  right: 217px;
  color: #d3d3d3;
  :hover {
    color: #aaabab;
  }
  &::before {
    content: "\f177";
    height: 24px;
    width: 28px;
    font-family: "Font Awesome 5 Pro Regular";
    font-size: 32px;
    font-weight: 300;
    letter-spacing: 0;
    line-height: 24px;
    text-align: center;
  }
  @media (max-width: 600px) {
    top: 570px;
    right: 54%;
    &::before {
      height: 24px;
      width: 28px;
    }
  }
  @media (min-width: 600px) {
    right: 30%;
  }
  @media(min-width: 992px){
    right: 20%
  }
  @media (min-width: 1366px) {
    position: absolute;
    top: 636px;
    right: 217px;
    &::before {
      content: "\f177";
      height: 24px;
      width: 28px;
      font-family: "Font Awesome 5 Pro Regular";
      font-size: 32px;
      font-weight: 300;
      letter-spacing: 0;
      line-height: 24px;
      text-align: center;
    }
  }
`
