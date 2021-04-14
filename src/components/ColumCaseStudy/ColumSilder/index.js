import React from 'react';

import styled from 'styled-components'
import Sliders from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ColumSilder(props) {
    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
        <Container>
        <Slider>
            <Sliders 
            {...settings}
            >
            {
                props.input.fields.map((item, key) => (
                <ImageSlider key={key}>
                    <Images
                    src={item.item_image.url}
                    alt={item.item_image.alt}
                    ></Images>
                </ImageSlider>
                ))
            }
            </Sliders>
        </Slider>
        </Container>
    </>
  );
}
const Slider = styled.div`
    width: 100%;
    .slick-arrow{
      display: none !important;
    }
    .slick-dots{
        bottom:32px;
    }
    .slick-dots li button:before  {
        font-size: 10px;
        color:#A9A9A9;
    }
    @media only screen and (max-width: 600px) {
    .slick-dots{
        bottom:15px;
    }
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
    .slick-dots{
        bottom:15px;
    }
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
        .slick-dots{
            bottom:32px;
        }

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
  object-fit: cover;
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
  @media (min-width: 1200px){
    padding: 67px 49px !important;
  }
  @media (min-width: 1600px){
    height: 100%;
    width: 100%;
    padding: 117px 137px !important;
  }
`
const Container = styled.div`
width:100%;
margin: 0 auto;
@media only screen and (max-width: 600px) {
}
@media (min-width: 601px) {
  .wrap-header {
    width: 100vw;
  }
}
`