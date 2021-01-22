import React from 'react'
import styled from 'styled-components'

export default function TextQoute(props) {
  return (
    <Qoute
      className="text-aliquam"
      data-sal="slide-down"
      data-sal-delay="5000"
      data-sal-easing="ease"
      data-sal-duration="1000"
    >
      <h1
        className="type-aliquam"
        style={{ fontWeight: "bold", fontFamily: "Calibre Semibold" }}
      >
        {props.input.fields.map(item => (item.content_quote).map(x => x.text))}
      </h1>
      <h5 className="type-aliquam-h5">
        {props.input.fields.map(item => (item.outher).map(x => x.text))}
      </h5>

    </Qoute>
  )
}
const Qoute = styled.div`
    text-align: center;
  @media only screen and (max-width: 600px) {
      margin-bottom:30px;
    .type-aliquam {
      max-width: 570px;
      color: #222222;
      font-family: "Calibre Semibold";
      font-size: 24px;
      font-weight: 600;
      letter-spacing: 0;
      line-height: 28px;
      text-align: center;
    }
    .type-aliquam-h5 {
      letter-spacing: 0px;
      font-size: 18px;
      line-height: 24px;
    }
  }
  @media (min-width: 600px) {
    margin-bottom:30px;
  }
  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
  @media (min-width: 1200px) {
    margin-bottom:96px;
    padding-top: 0px;
  }
  @media (min-width: 1600px) {
      max-width: 804px;
      max-height: 110px;
      margin-left: 221px;
      h1 {
        font-family: "Calibre Semibold";
        font-size: 32px;
        color: #222222;
        letter-spacing: 0;
        line-height: 38px;
        text-align: center;
        margin-bottom: 5px;
        font-weight: 600 !important;
      }
      h5 {
        font-family: "Calibre Regular";
        font-size: 18px;
        margin-bottom: 0px;
        font-weight: 400;
        line-height: 33px;
        color: #262626;
        padding-right: 18px;
      }
  }

`
