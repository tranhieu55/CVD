import React from "react"

import styled from "styled-components"
import Sliders from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function ColumSilder(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <>
      <Container>
        <Slider>
          <Sliders {...settings}>
            {props.input.fields.map((item, key) => (
              <ImageSlider key={key}>
                <Images
                  src={item.item_image.url}
                  alt={item.item_image.alt}
                ></Images>
              </ImageSlider>
            ))}
          </Sliders>
        </Slider>
      </Container>
    </>
  )
}
const Slider = styled.div`
  width: 100%;
  .slick-arrow {
    display: none !important;
  }
  .slick-dots {
    bottom: 32px;
  }

  .slick-dots li {
    width: 10px;
    height: 10px;
  }
  /* ul.slick-dots > li.slick-active - li > button > ::before  */
  .slick-dots li.slick-active button {
    background-color: #a9a9a9;
    border: 1px solid #a9a9a9;
  }

  .slick-dots li button {
    border: 1px solid #e4e4e4;
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  // dot active
  .slick-dots li.slick-active button:before {
    font-size: 10px;
    color: #a9a9a9;
    opacity: unset;
  }

  // dot none active
  .slick-dots li button:before {
    font-size: 10px;
    color: #ffffff;
    opacity: unset;
    width: 100%;
    height: 100%;
    left: 0px;
    top: -4px;
    border-color: #e4e4e4;
  }

  @media only screen and (max-width: 600px) {
    .slick-dots {
      bottom: -26px;
    }
    .slick-dots li {
      width: 8px;
      height: 8px;
      border: 1px solid #a9a9a9;
      border-radius: 50%;
    }
    .slick-dots li button{
      padding-bottom : 3px;
      padding-right: 3px;
      padding-top: 2.5px;
      padding-left: 0px;
    }
    .slick-dots li button:before{
      left: -1.5px;
      top: -6.5px;
      font-size: 8px;
    } 
    .slick-dots li.slick-active button:before{
      font-size: 8px;
      left: -1.5px;
      top: -6.5px;
    }
    margin-bottom: 40px;
    height: 245px;
    background-color: #f1f1f1;
    .slick-slider {
      height: 100%;
      .slick-list {
        height: 100%;
        .slick-track {
          height: 100%;
          div {
            height: 100%;
          }
        }
      }
    }
  }

  @media (min-width: 601px) {
    .slick-dots {
      bottom: 25px;
    }
    margin-bottom: 40px;
    height: 403px;
    background-color: #f1f1f1;
    .slick-slider {
      height: 100%;
      .slick-list {
        height: 100%;
        .slick-track {
          height: 100%;
          div {
            height: 100%;
          }
        }
      }
    }
  }
  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
  @media(min-width: 890px){
    .slick-dots {
      bottom: 15px;
    }
  }
  @media (min-width: 1024px) {
    .slick-dots {
      bottom: 30px;
    }
    margin-bottom: 50px;
    height: 650px;
  }
  @media (min-width: 1200px) {
    margin-bottom: 96px;
    .slick-dots {
      bottom: 32px;
    }
  }
  @media (min-width: 1600px) {
    .slick-dots {
      bottom: 50px;
    }
    height: 800px;
    background-color: #F1F1F1;
    div {
      margin: 0 auto;
      height: 100%;
    }
  }
`
const ImageSlider = styled.div`
  @media only screen and (max-width: 600px) {
    height: 100%;
  }
  @media (min-width: 601px) {
    height: 100%;
  }
  @media (min-width: 1600px) {
    height: 649px;
  }
`
const Images = styled.img`
  object-fit: cover;
  @media only screen and (max-width: 600px) {
    height: 100%;
    width: 100%;
    padding: 37px 25px;
    object-fit: cover;
  }
  @media (min-width: 601px) {
    height: 100%;
    width: 100%;
    padding: 37px 25px;
  }
  @media (min-width: 768px) {
    padding: 47px 61px !important;
  }
  @media (min-width: 992px) {
    padding: 40px 112px !important;
  }
  @media (min-width: 1200px) {
    padding: 67px 49px !important;
  }
  @media (min-width: 1600px) {
    height: 100%;
    width: 100%;
    padding: 117px 137px !important;
  }
`
const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  @media only screen and (max-width: 600px) {
  }
  @media (min-width: 601px) {
    .wrap-header {
      width: 100vw;
    }
  }
`
