import React from "react"
import Sliders from "react-slick"
import styled from "styled-components"

export default function SliderIntagram({ input }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <Container>
      <Slider>
        {input ? (
          <Sliders {...settings}>
            {input?.fields?.map((item, key) => (
              <ImageSlider key={key}>
                <Images
                  src={item?.image_slice?.url ? item?.image_slice?.url : ""}
                  alt={item?.image_slice?.alt ? item?.image_slice?.alt : ""}
                ></Images>
              </ImageSlider>
            ))}
          </Sliders>
        ) : (
          <></>
        )}
      </Slider>
    </Container>
  )
}
const Slider = styled.div`
  div {
    z-index: 1;
  }
  button {
    margin: 0 12px;
    z-index: 100;
    width: 52px;
    height: 52px;
    background-color: white;
    border-radius: 50%;
    opacity: 0.5;
    &:hover {
      background-color: white;
      opacity: 1;
    }
    &:focus {
      background-color: white;
      opacity: 1;
    }
  }
  @media (max-width:992px) {
    button {
      display: none!important;
    }
  }
  @media (min-width:992px) {
    button {
      display: block!important;
    }
  }
  width: 100%;
  .slick-next {
    right: 0px;
  }
  .slick-prev {
    left: 0;
  }
  .slick-next:before {
    content: "\f061";
    font-family: "Font Awesome 5 Pro Regular";
    color: #101010;
    font-size: 18px;
    opacity: 1;
  }
  .slick-prev:before {
    content: "\f060";
    font-family: "Font Awesome 5 Pro Regular";
    color: #101010;
    font-size: 18px;
    opacity: 1;
  }
  .slick-dots {
    bottom: 32px;
  }

  .slick-dots li {
    width: 10px;
    height: 10px;
  }
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
    .slick-dots li button {
      padding-bottom: 3px;
      padding-right: 3px;
      padding-top: 2.5px;
      padding-left: 0px;
    }
    .slick-dots li button:before {
      left: -1.5px;
      top: -6.5px;
      font-size: 8px;
    }
    .slick-dots li.slick-active button:before {
      font-size: 8px;
      left: -1.5px;
      top: -6.5px;
    }
    margin-bottom: 40px;
    height: 245px;
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
      bottom: 10px;
    }
    margin-bottom: 40px;
    height: 403px;
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
  @media (max-width: 1024px) {
    .slick-dots {
     display:none !important;

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
      bottom: 31px;
    }
    height: 800px;
    div {
      margin: 0 auto;
      height: 780px !important;
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
    padding: 0px;
    object-fit: cover;
  }
  @media (min-width: 601px) {
    height: 100%;
    width: 100%;
    padding: 0px;
  }
  @media (min-width: 768px) {
    padding: 0px !important;
    height: 100%;
    width: 100%;
  }
  @media (min-width: 992px) {
    padding: 0px !important;
    height: 100%;
    width: 100%;
  }
  @media (min-width: 1200px) {
    padding: 0px !important;
    height: 100%;
    width: 100%;
  }
  @media (min-width: 1600px) {
    height: 100%;
    width: 100%;
    padding: 0px !important;
  }
`
const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  @media only screen and (max-width: 600px) {
  }
  @media (min-width: 601px) {
    .wrap-header {
      width: 100vw;
    }
  }
`
