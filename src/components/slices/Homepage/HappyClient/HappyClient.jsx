import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import OwlCarousel from "react-owl-carousel"
import "owl.carousel/dist/assets/owl.carousel.css"
import "owl.carousel/dist/assets/owl.theme.default.css"

const isBrowser = typeof window !== "undefined"

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
  console.log(ref)

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
    if (isBrowser) {
      setHienThi(!hienthi)
    } else setHienThi(hienthi)
  }, [])
  return (
    <HappyClients>
      <Title>{Titles}</Title>
      {hienthi === "false" ? (
        <></>
      ) : (
        <OwlCarousel
          margin={72}
          responsive={false}
          autoWidth={true}
          items={2}
          navContainerClass={"demo"}
          className="owl-theme"
          ref={ref}
        >
          {input ? (
            input.fields?.map((item, index) => (
              <Slider
                key={index}
                onClick={() => updateSelected(index)}
                indicator={index === indicator}
                className="sliders item"
                dieukien={item.logo_client?.alt ? item.logo_client?.alt : ""}
              >
                <Img
                  alt={item.logo_client?.alt ? item.logo_client?.alt : ""}
                  src={item.logo_client?.url ? item.logo_client?.url : ""}
                  dieukien={item.logo_client?.alt ? item.logo_client?.alt : ""}
                ></Img>
                <Text>
                  <Content>
                    {item.qoute_of_client?.map(items =>
                      items?.text ? items?.text : item
                    )}
                  </Content>
                </Text>
                <Sub>
                  <SubTilte>
                    {item.title?.map(items =>
                      items?.text ? items?.text : item
                    )}
                  </SubTilte>
                  <SubText>
                    {item.sub_title?.map(items =>
                      items?.text ? items?.text : item
                    )}
                  </SubText>
                </Sub>
              </Slider>
            ))
          ) : (
            <></>
          )}
        </OwlCarousel>
      )}
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
    background-color: rgb(248, 248, 248);
    padding: 0px 13px;
    span{
      display: none;
    }
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
    background-color: rgb(248, 248, 248);
    padding: 0px 13px;
    span{
      display: none;
    }
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
      bottom: 19.2%;
    }
    @media(max-width: 600px){
      bottom: 14.5%;
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
      left: 28.5%;
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
      bottom: 6%;
      width: 120px;
      left: 34%;
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
      left: 83%;
      bottom: 20%;
    }
  }
  .owl-theme .owl-dots .owl-dot {
    width: 58px;
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
      width: 50px;
    }
    @media(min-width: 992px){
      width: 58px;
    }
    @media (min-width: 1366px){
      width: 58px;
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
  margin-top: ${props => props.dieukien === 'logo client' ? '47px' : '40px'};;
`

const Img = styled.img`
  height: ${props => props.dieukien === 'logo client' ? '24px' : '33px'};
  width: ${props => props.dieukien === "logo client" ? '162px' : '156px'} !important;
  @media (max-width: 600px) {
    height: ${props => props.dieukien === 'logo client' ? '24px' : '33px'};
    width: ${props => props.dieukien === "logo client" ? '162px' : '156px'} !important;
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
