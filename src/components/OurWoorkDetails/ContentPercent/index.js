import React from 'react'
import styled from 'styled-components'

export default function ContentPercent(props) {
  return (
    <>
      <Percent className="plus">
        {props.input.fields.map((item, index) => (
          <div key={index}>
            <h1>{item.number_of_statistical[0].text}</h1>
            <h5>{item.description_of_statistical[0].text}</h5>
          </div>
        ))}
      </Percent>
    </>
  )
}
const Percent = styled.div`
    display: flex;
    margin-left: 128px;
    justify-content: space-between;
    margin-right: 128px;
    height: 86px;
    div {
      width: 26%;
      h1 {
        font-weight: bold;
        font-size: 64px;
        text-align: center;
        font-family: "Calibre Semibold";
        line-height: 56px;
        color: #101010;
        font-weight: 600;
        margin-bottom: 0px;
      }
      h5 {
        text-align: center;
        font-size: 18px;
        height: 26px;
        font-family: "Calibre Regular";
        color: #222222;
        line-height: 20px;
      }
    }
    @media only screen and (max-width: 600px) {
      margin-bottom: 24px;
      display: block !important;
      text-align: center;
      margin-left: 37px;
      margin-right: 36px;
      height: 304px;
      div {
        margin-left: 0px !important;
        width: 100%;
        height: 80px;
        margin-bottom: 32px;
        h1 {
          font-size: 48px;
          color: #101010;
          line-height: 36px;
        }
        h5 {
          line-height: 32px;
          margin-bottom: 0px;
        }
      }
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
    .plus {
      div {
        width: 100%;
      }
    }
    .text-aliquam {
      padding-top: 50px;
    }
  }
  @media (min-width: 1200px) {
      display: flex;
      margin:auto;
      margin-bottom: 96px;
      div {
        width: 30%;
      }
  }
  @media (min-width: 1600px) {
        margin:auto;
        margin-bottom: 96px;
        display: flex;
        div {
            width: 270px;
        }
    }
`