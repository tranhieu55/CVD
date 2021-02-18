import React from 'react'
import styled from 'styled-components'

export default function ImageSlider(props) {
  return (
    <Image
      data-sal="slide-down"
      data-sal-delay="5000"
      data-sal-easing="ease"
      data-sal-duration="1000"
    >
      <ThreeImage>
        {props.input.fields.map((item, index) => (
          props.input.fields.length > 2 ?
          <ImageBackground key={index}>
            <Images 
              src={item.image_item.url}
              alt={item.image_item.alt}
            ></Images>
          </ImageBackground>
          : <ImagebackgroundTwo key={index}>
              <Images 
              src={item.image_item.url}
              alt={item.image_item.alt}
            ></Images>
          </ImagebackgroundTwo>
        ))}
      </ThreeImage>
    </Image>
  )
}
const Image = styled.div`
    display: flex;
    height: 780px;
    background-color: #f5f5f5;
    margin-bottom: 96px;
  @media only screen and (max-width: 600px) {
      height: 236px;
      max-width: 570px;
      background-color: #f5f5f5;
      margin-bottom: 28px;
  }
  @media (min-width: 601px) {
      margin-bottom: 28px;
      height: 580px;
  }
  @media (min-width: 768px) {
      margin-bottom: 50px;
  }
  @media (min-width: 1200px) {
     margin-bottom: 96px; 
  }
  
  @media (min-width: 1600px) {
      height: 780px;
    }
`
const ThreeImage = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 1240px;
  margin-top: 130px;
  @media (max-width: 320px){
    max-width: 275px !important;
    margin-left: 0px !important;
  }
  @media only screen and (max-width: 600px){
    max-width: 570px;
    margin-top: 33px;
    margin-bottom: 40px;
    margin-left: 20px;
    margin-right: 20px;
  }
  @media (min-width: 601px){
    margin-top: 68px;
  }
  @media (min-width: 1024px){
    margin-top: 40px;
  }
  @media (min-width: 1600px){
    margin-top: 118px;
    padding-left: 113px;
    padding-right: 118px;
    width: 100%;
  }
`

const ImageBackground = styled.div`
  height: 533px;
  max-width: 284px;
  @media (max-width: 320px){
    margin-left: 16.48px !important;
  }
  @media only screen and (max-width: 600px){
    height: 171px;
    margin-top: 0px;
    width: 83.8px;
  }
  @media (min-width: 1600px){
    height: 569px;
    width: 273px;
  }
`
const ImagebackgroundTwo = styled.div`
  height: 533px;
  width: 47% ;
  @media (max-width: 320px){
    margin-left: 16.48px !important;
  }
  @media only screen and (max-width: 600px){
    height: 171px;
    margin-top: 0px;
    width: 83.8px;
  }
`
const Images = styled.img`
  height: 100%;
  width: 100%;
  @media (min-width: 601px){
    height: 84%;
  }
  @media (min-width: 1024px){
    height: 100%;
  }
`