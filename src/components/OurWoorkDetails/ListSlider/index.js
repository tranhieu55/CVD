import React from 'react'
import styled from 'styled-components'

export default function ListSlider(props) {
  // const data = props.input.fields.map((item, key) => console.log(item.slider_image.alt))
  return (
    <>
      {
        props.input.fields.map((item, key) => (
          <Slider
            className="image-koko"
            data-sal="slide-down"
            data-sal-delay="5000"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            <div key={key}>
              <img
                alt=""
                src={item.slider_image.url}
                alt={item.slider_image.alt}
              ></img>
            </div>
          </Slider>
        ))
      }
    </>
  )
}
const Slider = styled.div`
    width: 100%;
    @media only screen and (max-width: 600px) {
      margin-bottom: 40px;
      div {
        margin-left: 26px;
        margin-right: 24px;
        padding-top: 42px;
        img {
          width: 100%;
        }
      }
    }
    @media (min-width: 601px) {
    margin-bottom: 40px;
      img {
        width: 100%;
      }
    }
    @media (min-width: 768px) {
        margin-bottom: 50px;
    }
    @media (min-width: 1024px) {
        margin-bottom: 50px;
    }
     @media (min-width: 1200px) {
        margin-bottom: 96px;
      div {
        img {
          width: 100%;
        }
      }
    }
     @media (min-width: 1600px) {
      height: 898px;
      background-color: #f5f5f5;
      div {
        margin: 0 auto;
        padding-top: 117px;
        height: 649px;
        max-width: 990px;
        img {
          height: 669px;
          width: 100%;
        }
      }
    }
`
