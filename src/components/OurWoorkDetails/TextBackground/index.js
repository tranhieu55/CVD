import React from 'react'
import styled from "styled-components"
import P from '../../bits/Typography'
import { theme } from "../../../utils/theme"

export default function TextBackground(props) {
  const data = props.input.primary
  return (
    <Background
      hb="205"
      mt="0"
      mb="21"
      data-sal="flip-top"
      data-sal-delay="5000"
      data-sal-easing="ease"
      data-sal-duration="1000"
    >
      <P
        uppercase={true}
        fontWeight={theme.fonts.bold}
        coLor={theme.colors.gray1}
        mrb_rem="2"
        fontSise="14"
      >
        {data.title[0].text}
      </P>
      <h4 className="text-style">
        {data.text_description[0].text}
      </h4>
    </Background>
  )
}
const Background = styled.div`
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
  .map-solution {
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
    .map-solution {
      div {
        padding-top: 10px;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    margin-left: 0px;
    padding-bottom: 0px;
    margin-bottom: 24px;
    .map-solution {
      margin-bottom: 33px;
      div {
        padding-top: 0px;
      }
    }
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
    .map-solution {
      padding-right: 0px;
    }
  }
  @media (max-width: 320px) {
    .map-solution {
      div {
        padding-top: 10px;
      }
    }
  }
  @media (min-width: 600px) {
    margin-left: 49px;
    margin-bottom: 30px;
    p{
      &::before {
        width: 2rem;
      }
    }
  }
  @media (min-width: 768px) {
    margin-left: 49px;
    margin-bottom: 30px;
    p{
      &::before {
        width: 2rem;
      }
    }
  }
  @media (min-width: 1024px) {
    padding-left: 9%;
    margin-left: 29px;
    p{
      &::before {
        width: 64px;
      }
    }
  }
  @media (min-width: 1200px) {
    margin-bottom: 96px;
    padding-left: 9%;
    padding-right: 30%;
    .text-style-bottom {
      padding-bottom: 60px;
    }
    .map-solution {
      div {
        padding-top: 5px;
      }
    }
  }
  @media (min-width: 1600px) {
    .text-style-bottom {
      padding-bottom: 0px;
    }
    .map-solution {
      div {
        padding-top: 0px;
        h4 {
          margin-top: 0px;
          line-height: 31px;
        }
      }
    }
    margin-left: 49px;
    max-width: 789px;
    height: ${({ hb }) => `${hb}px`};
    padding-left: 80px;
    padding-right: 0%;
  }
`