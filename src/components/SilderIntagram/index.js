import React from "react"
import Sliders from "react-slick"
import styled from "styled-components"

export default function SliderIntagram({ input }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
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
    @media (max-width: 600px) {
      width: 35px;
      height: 35px;
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
    @media (max-width: 600px) {
      font-size: 12px;
    }
  }
  .slick-prev:before {
    content: "\f060";
    font-family: "Font Awesome 5 Pro Regular";
    color: #101010;
    font-size: 18px;
    opacity: 1;
    @media (max-width: 600px) {
      font-size: 12px;
    }
  }
  .slick-dots {
    display: block !important;
    border-radius: 15px;
    display: flex !important;
    justify-content: center;
    align-items: center;
    background-color: #eeeeee;
    max-width: 624px;
    margin: auto;
    left: 0;
    right: 0;
    position: absolute;
    bottom: -10px;
    list-style: none;
    padding: 0;
    height: 4px;
  }
  .slick-dots li {
    position: relative;
    display: inline-block;
    height: 4px;
    padding: 0;
    cursor: pointer;
    width: 100%;
    margin: 0;
  }
  .slick-dots li button {
    display: none !important;
  }
  ul {
    .slick-active {
      background-color: #bbbbbb;
      border-radius: 15px;
    }
  }
  @media (max-width: 768px) {
    ul {
      max-width: 302px !important;
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
    height: 780px;
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
    margin-bottom: 66px;
  }
  @media (min-width: 601px) {
    .wrap-header {
      width: 100vw;
    }
  }
`
