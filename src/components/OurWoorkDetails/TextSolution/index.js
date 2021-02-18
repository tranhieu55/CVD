import React from 'react'
import styled from 'styled-components'
import H4 from '../../bits/H4'
import P from '../../bits/Typography'
import { theme } from "../../../utils/theme"

export default function TextSolution(props) {
  return (
    <Solution
      hb="264"
      mt="28"
      mb="18"
      data-sal="slide-top"
      data-sal-delay="5000"
      data-sal-easing="ease"
      data-sal-duration="1000"
    >
      <P
        uppercase={true}
        fontWeight={theme.fonts.bold}
        coLor={theme.colors.gray1}
        mrb_rem="2"
      >
        {props.input.primary.title[0].text}
      </P>
      <MapSolution>
        <>
          {props.input.fields.map((item, index) => (
            <div
              key={index}
              className={
                `${index}` === "1" || `${index}` === "3"
                  ? "solution-right"
                  : ""
              }
              id={`${index}` === "3" ? "solution-down" : ""}
            >
              <H4 fontWeight={theme.fonts.bold}>
                {item.title_the_solution[0].text}
              </H4>
            </div>
          ))}
        </>
      </MapSolution>
      <div>
        <h4 className="text-style">
          {props.input.primary.text_description[0].text}
        </h4>
      </div>
    </Solution>
  )
}
const Solution = styled.div`
  margin-left: 49px;
  P {
    font-family: "Calibre Semibold";
  }
  .text-style {
    font-family: "Calibre Regular";
    font-size: 20px;
    color: #222222;
    line-height: 28px;
  }
  .text-style-bottom {
    font-family: "Calibre Regular";
    font-size: 20px;
    color: #222222;
    line-height: 28px;
  }

  p {
    position: relative;
    line-height: 22px;
    height: 16px;
    max-width: 150px;
    font-size: 14px;
    margin-bottom: 26px;
    font-weight: 600;
    letter-spacing: 1px;
    &::before {
      position: absolute;
      right: calc(100% + 17px);
      top: 41%;
      display: block;
      content: "";
      width: 64px;
      height: 2px;
      background: ${theme.colors.primaryColor};
    }
  }
  @media (max-width: 1024px) {
    margin-left: 90px;
    padding-bottom: ${({ pdbt }) => `${pdbt}px`};
  }

  @media only screen and (max-width: 600px) {
    margin-left: 0px;
    padding-bottom: 0px;
    margin-bottom: 30px;
    p {
      letter-spacing: 1px;
    }
    .solution-right {
      width: 46.5% !important;
      height: 32px;
    }
    #solution-down {
      margin-top: 21px;
    }
    p {
      margin-left: 3rem;
      line-height: 21px;
      margin-bottom: ${({ mb }) => `${mb}px`};
      &::before {
        width: 2rem;
      }
    }
    
  }
  
  @media (min-width: 600px) {
    margin-bottom: 30px;
    margin-left: 49px;
    p{
      &::before {
        width: 2rem;
      }
    }
  }
  @media (min-width: 768px) {
    margin-bottom: 50px;
    margin-left: 49px;
    p{
      &::before {
        width: 2rem;
      }
    }
  }
  @media (min-width: 1024px) {
    margin-bottom: 50px;
    margin-left: 29px;
    padding-left: 9%;
    p{
      &::before {
        width: 64px;
      }
    }
  }
  @media (min-width: 1200px) {    
    padding-left: 9%;
    padding-right: 30%;
    .text-style-bottom {
      padding-bottom: 60px;
    }
  }
  @media (min-width: 1600px) {
    margin-bottom: 106px;
    .text-style-bottom {
      padding-bottom: 0px;
    }
    margin-left: 49px;
    max-width: 789px;
    height: ${({ hb }) => `${hb}px`};
    padding-left: 80px;
    padding-right: 0%;
  }
`
const MapSolution = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 23px;
  flex-wrap: wrap;
  width: 100%;
  padding-right: 73px;
  div {
      width: 49%;
      color: #101010;
      line-height: 20px;
      h4 {
        font-weight: 500;
        font-size: 20px;
        margin-top: 2px;
        margin-bottom: 0px;
        color: #101010;
        line-height: 20px;
      }
    }
  @media only screen and (max-width: 600px){
    margin-bottom: 33px;
    padding-right: 0px;
    div {
        padding-top: 0px;
      }
  }
  @media (max-width: 1024px){
    div {
        padding-top: 10px;
      }
  }
  @media (max-width: 320px) {
    div {
        padding-top: 10px;
      }
  }
  @media (min-width: 1200px){
    div {
        padding-top: 5px;
      }
  }
  @media (min-width: 1600px){
    div {
        padding-top: 0px;
        h4 {
          margin-top: 0px;
          line-height: 31px;
        }
      }
  }
`