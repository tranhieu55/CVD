import React from 'react'
import styled from 'styled-components'

export default function TextQoute(props) {
  return (
    <Qoute
      data-sal="slide-down"
      data-sal-delay="5000"
      data-sal-easing="ease"
      data-sal-duration="1000"
    >
      <TypeAliquam>
        {props.input.primary.title_quote[0].text}
      </TypeAliquam>
      <TypeAliquams>
        {props.input.primary.author_of_quote[0].text}
      </TypeAliquams>

    </Qoute>
  )
}
const Qoute = styled.div`
    text-align: center;
  @media only screen and (max-width: 600px) {
      margin-bottom: 56px;
  }
  @media (min-width: 600px) {
    margin-bottom:56px;
  }
  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
  @media (min-width: 1200px) {
    margin-bottom:116px;
    padding-top: 0px;
  }
  @media (min-width: 1600px) {
      max-width: 804px;
      max-height: 110px;
      margin-left: 221px;
      margin-bottom: 116px;
  }

`
const TypeAliquam = styled.h1`
  font-weight: "bold";
  font-family: "Calibre Semibold"; 
  @media only screen and (max-width: 600px){
    max-width: 570px;
    color: #222222;
    font-family: "Calibre Semibold";
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 28px;
    text-align: center;
  }
  @media (min-width: 1600px){
    font-family: "Calibre Semibold";
    font-size: 32px;
    color: #222222;
    letter-spacing: 0;
    line-height: 38px;
    text-align: center;
    margin-bottom: 5px;
    font-weight: 600 !important;
  }
`
const TypeAliquams = styled.h5`
  @media only screen and (max-width: 600px){
    letter-spacing: 0px;
    font-size: 18px;
    line-height: 24px;
  }
  @media (min-width: 1600px){
    font-family: "Calibre Regular";
    font-size: 18px;
    margin-bottom: 0px;
    font-weight: 400;
    line-height: 33px;
    color: #262626;
    padding-right: 18px;
  }
`