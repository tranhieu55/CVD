import React from "react"
import styled from "styled-components"
import { theme } from "../../utils/theme"

export default function BannerCaseStudy2({ input, location }) {
  const data = input ? input?.primary : []

  return (
    <Container bottom={location && location === "/banner" ? true : false}>
      {data?.image_banner ? <Image>{data?.image_banner?.url}</Image> : <></>}
      <SubTitle>
        <Sub color={data?.color_sub_title ? data?.color_sub_title : "#999999"}>
          {data?.title_banner?.map(item => (item?.text ? item?.text : ""))}
        </Sub>
        <Title color={data?.color_text ? data?.color_text : "#101010"}>
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
  margin-bottom: ${({ bottom }) => (bottom ? "108px" : 0)};

  @media (max-width: 600px) {
    height: 202px;
    margin-bottom: ${({ bottom }) => (bottom ? "81px" : 0)};
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
    margin-top: 85px;
    margin-left: 16px;
  }
  @media (min-width: 600px) {
    margin-top: 86px;
    margin-left: 68px;
  }
  @media (min-width: 768px) {
    margin-top: 107px;
    margin-left: 77px;
  }
  @media (min-width: 1024px) {
    margin-top: 117px;
    margin-left: 77px;
  }
  @media (min-width: 1200px) {
    margin-top: 137px;
    margin-left: 160px;
  }
  @media (min-width: 1372px) {
    margin-top: 159px;
    margin-left: 220px;
  }
  @media (min-width: 1600px) {
    margin: 159px 0 0 260px;
  }
`
const Sub = styled.p`
  color: ${({ color }) => (color ? color : "#999999")};
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
    margin-bottom: 8px;
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
  color:  color={data?.color_text ? data?.color_text : "#101010"} ;
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
