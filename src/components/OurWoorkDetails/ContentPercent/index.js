import React from 'react'
import styled from 'styled-components'

export default function ContentPercent(props) {
  return (
    <>
      <Percent className="plus">
        {props.input.fields.map((item, index) => (
          <Content key={index}>
            <TiTle>{item.number_of_statistical[0].text}</TiTle>
            <TextPercent>{item.description_of_statistical[0].text}</TextPercent>
          </Content>
        ))}
      </Percent>
    </>
  )
}
const TiTle = styled.h1`
  font-weight: bold;
  font-size: 64px;
  text-align: center;
  font-family: "Calibre Semibold";
  line-height: 56px;
  color: #101010;
  font-weight: 600;
  margin-bottom: 0px;
  @media only screen and (max-width: 600px){
    font-size: 48px;
    color: #101010;
    line-height: 36px;
  }
`
const TextPercent = styled.h5`
  text-align: center;
  font-size: 18px;
  height: 26px;
  font-family: "Calibre Regular";
  color: #222222;
  line-height: 20px;
  @media only screen and (max-width: 600px){
    line-height: 32px;
    margin-bottom: 0px;
  }
`
const Content = styled.div`
   width: 26%;
      @media only screen and (max-width: 600px) {
        margin-left: 0px !important;
        width: 100%;
        height: 80px;
        margin-bottom: 32px;
      }
      @media (min-width: 1024px){
        width: 100%;
      }
      @media (min-width: 1200px){
        width: 30%;
      }
      @media (min-width: 1600px){
        width: 270px;
      }
`
const Percent = styled.div`
    display: flex;
    margin-left: 128px;
    justify-content: space-between;
    margin-right: 128px;
    height: 86px;
    @media only screen and (max-width: 600px) {
      margin-bottom: 24px;
      display: block !important;
      text-align: center;
      margin-left: 37px;
      margin-right: 36px;
      height: 304px;
    }
    @media (min-width: 601px) {
      margin-left: 0px;
      margin-right: 0px;
      margin-bottom: 50px;
  }
   @media (min-width: 768px) {
       margin-bottom: 50px;
  }
  @media (min-width: 1024px) {
    margin-bottom: 50px;
    max-width: 900px;
    .text-aliquam {
      padding-top: 50px;
    }
  }
  @media (min-width: 1200px) {
      display: flex;
      margin-bottom: 96px;
  }
  @media (min-width: 1600px) {
        max-width: 986px;
        margin: 0 auto 86px;
        display: flex;
    }
`