import moment from "moment"
import React from "react"
import styled from "styled-components"
import { theme } from "../../utils/theme"

export default function BannerCaseStudy2(props) {
  const data = props ? props?.input?.primary : []
  console.log({ input: props.input })
  return (
    <Container>
      {data?.image_banner ? <Image>{data?.image_banner?.url}</Image> : <></>}
      <SubTitle>
        <Sub>
          {data?.title_banner?.map(item => (item?.text ? item?.text : ""))}
        </Sub>
        <Title>
          {data?.description_banner?.map(item =>
            item?.text ? item?.text : ""
          )}
        </Title>
      </SubTitle>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 293px;
  background-color: #f8f8f8;
  margin-bottom: 40px;
  @media (max-width: 600px) {
    width: 100%;
    height: 282px;
    background-color: #f8f8f8;
  }
  @media (min-width: 600px) {
    width: 100%;
    height: 293px;
    background-color: #f8f8f8;
  }
  @media (min-width: 1040px) and (max-width: 1366px) {
    height: 293px;
  }
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  position: realtive;
`
const SubTitle = styled.div`
  position: absolute;
  @media (max-width: 600px) {
    padding-top: 85px;
    padding-left: 16px;
    padding-bottom: 21px;
  }
  @media (min-width: 600px) {
    padding-top: 86px;
    padding-left: 68px;
    padding-right: 20px;
  }
  @media (min-width: 768px) {
    padding-top: 107px;
    padding-left: 77px;
  }
  @media (min-width: 1024px) {
    padding-top: 117px;
    padding-left: 77px;
  }
  @media (min-width: 1200px) {
    padding-top: 137px;
    padding-left: 160px;
  }
  @media (min-width: 1372px) {
    padding-top: 159px;
    padding-left: 220px;
  }
  @media (min-width: 1600px) {
    padding: 159px 20px 38px 260px;
  }
`
const Sub = styled.p`
  color: #999999;
  font-family: Calibre Semibold;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 16px;
  position: relative;
  margin-bottom: 24px;
  text-transform: uppercase;
  &::before {
    position: absolute;
    right: calc(100% + 17px);
    top: 36%;
    display: block;
    content: "";
    width: 64px;
    height: 2px;
    background: ${theme.colors.primaryColor};
  }
  @media (max-width: 600px) {
    font-size: 12px;
    line-height: 14px;
    margin-bottom: 6px;
    margin-left: 51px;
    &::before {
      position: absolute;
      right: calc(100% + 17px);
      top: 36%;
      display: block;
      content: "";
      width: 32px;
      height: 2px;
      background: ${theme.colors.primaryColor};
    }
  }
  @media (min-width: 600px) {
    &::before {
      position: absolute;
      right: calc(100% + 10px);
      top: 36%;
      display: block;
      content: "";
      width: 36px;
      height: 2px;
      background: ${theme.colors.primaryColor};
    }
  }
  @media (min-width: 1200px) {
    &::before {
      position: absolute;
      right: calc(100% + 17px);
      top: 36%;
      display: block;
      content: "";
      width: 64px;
      height: 2px;
      background: ${theme.colors.primaryColor};
    }
  }
`
const Title = styled.h1`
  color: #101010;
  font-family: Calibre Bold;
  font-size: 64px;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 56px;
  margin-bottom: 0px;
  @media (max-width: 600px) {
    font-size: 40px;
    font-weight: bold;
    letter-spacing: -1px;
    line-height: 38px;
  }
  @media (max-width: 360px) {
    font-size: 38px;
  }
`
