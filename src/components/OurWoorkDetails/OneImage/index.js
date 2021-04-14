import React from 'react'
import styled from 'styled-components'
import Sliders from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function OneImage(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Container>
      <Slider
        data-sal="slide-down"
        data-sal-delay="5000"
        data-sal-easing="ease"
        data-sal-duration="1000"
      >
        <Sliders {...settings}>
              <ImageSlider >
                <Images
                  src={props.input.primary.image.url}
                  alt={props.input.primary.image.alt}
                ></Images>
              </ImageSlider> 
        </Sliders>
      </Slider>
    </Container>
  )
}
const Slider = styled.div`
    width: 100%;
    .slick-arrow{
      display: none !important;
    }
    .slick-dots{
      display: none !important;
    }
    @media only screen and (max-width: 600px) {
      margin-bottom: 40px;
      height: 272px;
      background-color: #f5f5f5;
      .slick-slider{
        height: 100%;
        .slick-list{
          height: 100%;
          .slick-track{
            height: 100%;
            div{
              height: 100%;
            }
          }
        }
      }
    }
    @media (min-width: 601px) {
    margin-bottom: 40px;
    height: 403px;
    background-color: #f5f5f5;
    .slick-slider{
      height: 100%;
      .slick-list{
        height: 100%;
        .slick-track{
          height: 100%;
          div{
            height: 100%;
          }
        }
      }
    }
    }
    @media (min-width: 768px) {
        margin-bottom: 50px;
    }
    @media (min-width: 1024px) {
        margin-bottom: 50px;
        height: 650px;
    }
     @media (min-width: 1200px) {
        margin-bottom: 96px;
    }
     @media (min-width: 1600px) {
      height: 898px;
      background-color: #f5f5f5;
      div {
        margin: 0 auto;
        height: 100%;
      }
    }
`
const ImageSlider = styled.div`
  @media only screen and (max-width: 600px){
    height: 100%;
  }
  @media (min-width: 601px){
    height: 100%;
  }
  @media (min-width: 1600px){
    height: 649px;
  }
`
const Images = styled.img`
  @media only screen and (max-width: 600px){
    height: 100%;
    width: 100%;
    padding: 37px 25px;
    object-fit: cover;
  }
  @media (min-width: 601px){
    height: 100%;
    width: 100%;
    padding: 37px 25px;
  }
  @media (min-width: 768px){
    padding: 47px 61px !important;
  }
  @media (min-width: 992px){
    padding: 11px 112px !important; 
  }
  @media (min-width: 1024px){
    padding: 58px 25px !important;
  }
  @media (min-width: 1200px){
    padding: 67px 126px !important;
  }
  @media (min-width: 1400px){
    padding: 26px 131px !important;
  }
  @media (min-width: 1600px){
    height: 100%;
    width: 100%;
    padding: 117px 137px !important;
  }
`
const Container = styled.div`
max-width: 1240px;
margin: 0 auto;
@media only screen and (max-width: 600px) {
  margin 0px 16px;
}
@media (min-width: 601px) {
  .wrap-header {
    width: 100vw;
  }
  max-width: 585px;
}
@media (min-width: 992px) {
  max-width: 780px;
}
@media (min-width: 1024px) {
  max-width: 900px;
}
@media (min-width: 1200px) {
  max-width: 1024px;
}

@media (min-width: 1400px) {
  max-width: 1151px;
}

@media (min-width: 1600px) {
  max-width: 1240px;
}

@media (min-width: 1800px) {
  max-width: 1380px;
}
`
    