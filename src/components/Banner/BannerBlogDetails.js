import moment from "moment"
import React from "react"
import styled from "styled-components"
import { theme } from "../../utils/theme"

export default function BannerBlogDetails({ input, location }) {
  const data = input ? input?.primary : []

  return (
    <Container bottom={location && location === "/banner" ? true : false}>
      {data?.image_banner ? <Image>{data?.image_banner?.url}</Image> : <></>}
      {data ? (
        <SubTitle>
          <Sub color={data?.color_subTitle ? data?.color_subTitle : "#999999"}>
            {moment(data?.date_created1)?.format("LL")}
          </Sub>
          <Title color={data?.color_title ? data?.color_title : "#101010"}>
            {data?.title_banner?.map(item => item.text)}
          </Title>
        </SubTitle>
      ) : (
        <></>
      )}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 365px;
  background-color: #f8f8f8;
  margin-bottom: ${({ bottom }) => (bottom ? "108px" : 0)};

  @media (max-width: 600px) {
    width: 100%;
    height: 282px;
    background-color: #f8f8f8;
    margin-bottom: ${({ bottom }) => (bottom ? "81px" : 0)};
  }
  @media (min-width: 600px) {
    width: 100%;
    height: 365px;
    background-color: #f8f8f8;
  }
  @media (min-width: 1040px) and (max-width: 1366px) {
    height: 337px;
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
    padding-top: 90px;
    width: 100%;
    margin: 0px;
    margin-left: 16px;
    padding-right: 20px;
  }
  @media (max-width: 375px) {
    width: 343px;
  }
  @media (max-width: 360px) {
    padding-top: 90px;
    padding-right: 0;
    width: 292px;
  }
  @media (min-width: 600px) {
    padding-top: 86px;
    padding-left: 68px;
    padding-right: 10px;
  }
  @media (min-width: 768px) {
    padding-top: 107px;
    padding-left: 77px;
    padding-right: 20px;
  }
  @media (min-width: 1024px) {
    padding-top: 117px;
    padding-left: 77px;
    padding-right: 40px;
  }
  @media (min-width: 1200px) {
    padding-top: 137px;
    padding-left: 160px;
    padding-right: 95px;
  }
  @media (min-width: 1372px) {
    padding-top: 159px;
    padding-left: 220px;
    padding-right: 192px;
  }
  @media (min-width: 1600px) {
    padding: 176px 264px 44px 260px;
    height: 100%;
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
  margin-bottom: 30px;
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
    margin-bottom: 15px;
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
  color: ${({ color }) => (color ? color : "#101010")};
  font-family: "Calibre";
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
