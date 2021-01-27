import React from 'react'
import styled from 'styled-components'

export default function ImageSlider(props) {
  return (
    <Image
      className="list-image-background"
      data-sal="slide-down"
      data-sal-delay="5000"
      data-sal-easing="ease"
      data-sal-duration="1000"
    >
      <div className="three-image">
        {props.input.fields.map((item, index) => (
          <div className={props.input.fields.length > 2 ? "image-background": 'image-background-two' } key={index}>
            <img
              src={item.image_item.url}
              alt={item.image_item.alt}
            ></img>
          </div>
        ))}
      </div>
    </Image>
  )
}
const Image = styled.div`
    display: flex;
    height: 780px;
    background-color: #f5f5f5;
    margin-bottom: 96px;
    .three-image {
      display: flex;
      justify-content: space-evenly;
      width: 1240px;
      margin-top: 130px;
      .image-background {
        height: 533px;
        max-width: 284px;
        img{
          height: 100%;
          width: 100%
        }
      }
      .image-background-two{
        height: 533px;
        width: 47% ;
        img{
          height: 100%;
          width: 100%
        }
      }
      
    }
  @media (max-width: 992px) {
    .three-image .image-background .image-background-two {
      height: 410px;
    }
  }
  @media (max-width: 320px) {
      .three-image {
        max-width: 275px !important;
        margin-left: 0px !important;
        .image-background {
          margin-left: 16.48px !important;
        }
        .image-background-two{
          margin-left: 16.48px !important;
        }
      }
  }
  @media only screen and (max-width: 600px) {
      height: 236px;
      max-width: 570px;
      background-color: #f5f5f5;
      margin-bottom: 28px;
      .three-image {
        max-width: 570px;
        margin-top: 33px;
        margin-bottom: 40px;
        margin-left: 20px;
        margin-right: 20px;
        .image-background {
          height: 171px;
          margin-top: 0px;
          width: 83.8px;
          img {
            height: 100%;
          }
        }
        .image-background-two{
          height: 171px;
          margin-top: 0px;
          width: 83.8px;
          img {
            height: 100%;
            width: 100%;
          }
        }
      }
    .image-background {
      margin-top: 24px;
    }
    .image-background-two{
      margin-top: 24px;
    }
  }
  @media (min-width: 601px) {
      margin-bottom: 28px;
      height: 580px;
      .three-image {
        margin-top: 22px;
      }
      .image-background {
        img {
          width:100%;
        }
      }
  }
  @media (min-width: 768px) {
      margin-bottom: 50px;
  }
  @media (min-width: 1024px) {
      .three-image {
        margin-top: 40px;
      }
  }
  @media (min-width: 1200px) {
     margin-bottom: 96px; 
  }
  
  @media (min-width: 1600px) {
      height: 780px;
      .three-image {
        margin-top: 118px;
        padding-left: 113px;
        padding-right: 118px;
        width: 100%;
        .image-background {
          height: 569px;
          width: 273px;
        }
      }
    }
`
