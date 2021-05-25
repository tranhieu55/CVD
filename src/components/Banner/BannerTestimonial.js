import React from "react"
import styled from "styled-components"

export default function BannerTestimonial({ title, subTitle }) {
  return (
    <Container>
      <Content>
        <Text>{subTitle}</Text>
        <Title>{title}</Title>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  height: 292px;
  width: 100%;
  background-color: #f8f8f8;
  margin-bottom: 78px;
  @media (max-width: 600px) {
    height: 209px;
    margin-bottom: 30px;
  }
`
const Content = styled.div`
  padding-top: 158px;
  padding-left: 260px;
  @media (max-width: 600px) {
    padding-top: 85px;
    padding-left: 17px;
    padding-right: 59px;
  }
  @media (min-width: 600px) {
    padding-left: 45px;
    width: 100%;
  }
  @media (min-width: 768px) {
    padding-left: 100px;
  }
  @media (min-width: 992px) {
    padding-left: 180px;
  }
  @media (min-width: 1200px) {
    padding-left: 260px;
  }
  @media (min-width: 992px) and (max-width: 1100px) {
    padding-left: 40px;
  }
  @media (min-width: 1366px) and (max-width: 1440px) {
    padding-left: 40px;
  }
`
const Text = styled.p`
  color: #999999;
  font-family: Calibre Semibold;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 16px;
  position: relative;
  margin-bottom: 24px;
  color: #999999;
  &::before {
    position: absolute;
    right: calc(100% + 16px);
    top: 30%;
    display: block;
    content: "";
    width: 64px;
    height: 2px;
    background: #fecf09;
  }
  @media (max-width: 600px) {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 14px;
    color: #999999;
    margin-bottom: 10px;
    margin-left: 48px;
    &::before {
      width: 32px;
    }
  }
  @media (min-width: 600px) {
    margin-left: 80px;
  }
  @media (min-width: 769px) {
    margin-left: 0px;
  }
  @media (min-width: 992px) and (max-width: 1100px) {
    margin-left: 80px;
  }
  @media (min-width: 1366px) and (max-width: 1440px) {
    margin-left: 80px;
  }
`
const Title = styled.h1`
  color: #101010;
  font-family: Calibre Bold;
  font-size: 64px;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 56px;
  @media (max-width: 600px) {
    font-size: 40px;
    font-weight: bold;
    letter-spacing: -1px;
    line-height: 38px;
  }
`
