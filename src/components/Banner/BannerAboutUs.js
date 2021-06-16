import React from "react"
import styled from "styled-components"
import { theme } from "../../utils/theme"

export default function BannerAboutUs({ input, location }) {
  const data = input ? input?.primary : []

  return (
    <Container bottom={location && location === "/banner" ? true : false}>
      {data?.image_banner ? <Image>{data?.image_banner?.url}</Image> : <></>}
      <SubTitle>
        <Sub color={data?.color_sub_title ? data?.color_sub_title : "#999999"}>
          {data?.title_banner?.map(item => (item?.text ? item?.text : ""))}
        </Sub>
        <Title color={data?.color_text ? data?.color_text : "#111111"}>
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
  background-color: #f8f8f8;
  height: 402px;

  margin-bottom: ${({ bottom }) => (bottom ? "108px" : 0)};

  @media (max-width: 600px) {
    width: 100%;
    height: 312px;
    background-color: #f8f8f8;
    margin-bottom: ${({ bottom }) => (bottom ? "81px" : 0)};
  }

  @media (min-width: 600px) {
    width: 100%;
    background-color: #f8f8f8;
  }
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  position: realtive;
`
const SubTitle = styled.div`
  position: absolute;
  margin: 0;
  padding: 0;

  @media (max-width: 600px) {
    margin-top: 85px;
    margin-left: 16px;
    margin-right: 20px;
  }
  @media (min-width: 600px) {
    margin-top: 86px;
    margin-left: 68px;
    padding-right: 20px;
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
    max-width: 844px;
    padding-right: 0;
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
  color: ${({ color }) => (color ? color : "#111111")};
  font-family: Calibre Semibold;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.5px;
  line-height: 36px;

  @media (max-width: 600px) {
    color: #101010;
    font-family: Calibre Semibold;
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.25px;
    line-height: 26px;
  }
  @media (max-width: 374px) {
    font-size: 24px;
  }
`
