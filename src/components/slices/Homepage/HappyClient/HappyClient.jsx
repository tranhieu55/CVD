import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const isBrowser = typeof window !== "undefined";

const HappyClient = ({ input }) => {
  const Titles = input
    ? input.primary?.title_happy_client?.map(item =>
        item?.text ? item?.text : item
      )
    : []

  const [indicator, setindicator] = useState(0)

  const ref = useRef();
  console.log(ref);

  // function Nextshowslider() {
  //   return (ref.current.container.scrollLeft =
  //     ref.current.container.clientWidth > 600
  //       ? ref.current.container.scrollLeft + 650
  //       : ref.current.container.scrollLeft + 350)
  // }
  // function Prevshowslider() {
  //   return (ref.current.container.scrollLeft =
  //     ref.current.container.clientWidth > 600
  //       ? ref.current.container.scrollLeft - 650
  //       : ref.current.container.scrollLeft - 350)
  // }
  const [hienthi, setHienThi] = useState(false)
  
  useEffect(() => {
    if(isBrowser){
      setHienThi(!hienthi)
    }else setHienThi(hienthi)
  }, [])
  return (
    <HappyClients>
      <Title>{Titles}</Title>
      {hienthi === 'false' ? <></> : 
        <OwlCarousel margin={72} responsive={false} autoWidth={true} items={2} nav={true} navContainerClass={'demo'}  className="owl-theme" ref={ref}>
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
      }
      <Opaci></Opaci>
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
  .owl-prev{
    color: #d3d3d3;
    border: none;
    background-color: #ffffff;
    padding: 0px 13px;
    :focus{
      outline: none;
    }
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
  }
  .owl-next{
    color: #d3d3d3;
    border: none;
    background-color: #ffffff;
    padding: 0px 13px;
    :focus{
      outline: none;
    }
    :hover {
      color: #aaabab;
    }
    &::before {
      content: "\f178";
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
  .owl-carousel{
    position: initial;
  }
  .owl-carousel .owl-stage-outer{
    position : absolute;
  }
  .owl-theme .owl-dots{
    margin-top: 10px;
    height: 20px;
    bottom: 19.2%;
    position: absolute;
    left: 21%;
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
      left: 21%;
      bottom: 19.2%;
    }
  }
  .demo{
    margin-top: 10px;
    height: 20px;
    bottom: 20%;
    position: absolute;
    left: 30%;
    width: 120px;
    @media(max-width: 767px){
      width: 120px;
      margin: auto;
      bottom: 20%;
      left: 70%
    }
    @media(max-width: 600px){
      bottom: 10%;
      width: 120px;
      left: 37%;
    }
    @media(max-width: 320px){
      margin: 0 auto;
    }
    @media(min-width: 768px){
      left: 70%;
      width: 120px;
    }
    @media(min-width: 992px){
      left: 80%;
      width: 120px;
      bottom: 20%;
    }
    @media(min-width: 1200px){
      left: 70%;
    }
    @media (min-width: 1366px){
      left: 84%;
      bottom: 20%;
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

