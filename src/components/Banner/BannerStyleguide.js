import React from "react"

import styled from "styled-components"

import P from "../../components/bits/Typography"
import { theme } from "../../utils/theme"

const Wraper = styled.div`
  width: 100%;
  background-color: ${theme.colors.lightGray};
  span {
    color: #999999;
    display: block;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 600px) {
    span {
      font-size: 12px !important;
    }
    p {
      font-size: 24px;
      margin-top: 14px;
      padding-bottom: 16px;
      line-height: 26px;
      word-spacing: 1.3px;
    }
    .offset-1 {
      margin-left: 0 !important;
    }

    .col-md-10 {
      padding-right: 16px;
      padding-left: 16px;
    }
  }
  @media only screen and (min-width: 600px) {
    .row {
      margin: 0 !important;
    }
    p {
      font-size: 24px;
      margin-top: 24px;
      padding-bottom: 30px;
    }
    .offset-1 {
      margin-left: 0 !important;
    }
  }
  @media only screen and (min-width: 768px) {
    p {
      font-size: 24px;
      margin-top: 24px;
      padding-bottom: 30px;
    }
    .offset-1 {
      margin-left: 70px !important;
    }
  }
  @media only screen and (min-width: 992px) {
    span {
      font-size: 14px;
    }
    p {
      padding-bottom: 0px;
      margin-bottom: 65px;
    }
    .offset-1 {
      margin-left: 84px !important;
    }
  }
  @media only screen and (min-width: 1200px) {
    .offset-1 {
      margin-left: 103px !important;
    }
    .container {
      padding-right: 15px !important;
      padding-left: 15px !important;
    }
    @media only screen and (max-width: 1299px) {
      .container {
        padding-right: 15px !important;
        padding-left: 15px !important;
      }
    }
    @media only screen and (min-width: 1300px) {
      .container {
        padding-right: 0 !important;
        padding-left: 0 !important;
      }
      p {
        font-size: 64px;
        max-width: 825px;
        font-weight: 700;
      }
      .row {
        margin-right: -15px !important;
        margin-left: -15px !important;
      }
    }
    span {
      color: #999999;
      display: block;
      font-size: 14px;
      font-weight: 600;
    }
    .offset-1 {
      margin-left: 8.333333%;
    }
  }
`
const Container = styled.div`
  max-width: 1240px !important;
  padding: env(safe-area-inset-top) env(safe-area-inset-right)
    env(safe-area-inset-bottom) env(safe-area-inset-left);
  @media only screen and (max-width: 600px) {
    margin-bottom: 16px;
    padding-right: 16px !important;
    padding-left: 16px !important;
  }
  @media only screen and (min-width: 600px) {
    margin-bottom: 30px;
  }
  @media only screen and (min-width: 768px) {
    margin-bottom: 30px;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    margin-bottom: 30px;
  }
  @media only screen and (min-width: 1200px) {
    margin-bottom: 57px;
  }
`
const Row = styled.div``
const Col = styled.div``
const BoxTag = styled.div`
  margin-top: 158px;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 600px) {
    margin-top: 85px !important;
  }
  @media only screen and (min-width: 600px) {
    margin-top: 100px;
  }
  @media only screen and (min-width: 768px) {
    margin-top: 100px;
  }
  @media only screen and (min-width: 992px) {
    margin-top: 158px;
  }
  @media only screen and (min-width: 1200px) {
    margin-top: 165px;
    display: flex;
    align-items: center;
  }
`
const SpanBorder = styled.span`
  width: 80px;
  height: 2px;
  background-color: #fecf09;
  margin-right: 24px;
  margin-bottom: 4px;
  @media only screen and (max-width: 600px) {
    width: 32px !important;
    margin-right: 16px !important;
  }
  @media only screen and (min-width: 600px) {
    width: 32px;
  }
  @media only screen and (min-width: 768px) {
    width: 45px;
  }
  @media only screen and (min-width: 992px) {
    width: 60px;
    height: 2px;
    background-color: #fecf09;
    margin-right: 24px;
  }
  @media only screen and (min-width: 1200px) {
    width: 80px;
    height: 2px;
    background-color: #fecf09;
    margin-right: 24px;
  }
`
const SpanText = styled.span`
  letter-spacing: 1px;
  line-height: 16px;
  font-family: "Calibre Semibold";
`
export default function BannerStyleguide() {
  return (
    <Wraper className="contrainer-fluid">
      <Container className="container">
        <Row className="row">
          <Col className="col-md">
            <BoxTag>
              <SpanBorder></SpanBorder>
              <SpanText>PRIVATE</SpanText>
            </BoxTag>
          </Col>
          <Col className="col-md-10 offset-1">
            <P
              coLor="#101010"
              fontFamily="Calibre Semibold"
              mt="24"
              fontSise="64"
              pdb="72"
              lineh="56"
              lett="-1"
            >
              Style Guide
            </P>
          </Col>
        </Row>
      </Container>
    </Wraper>
  )
}
