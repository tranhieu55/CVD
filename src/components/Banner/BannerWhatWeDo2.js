import React from "react"
import styled from "styled-components"
import { theme } from "../../utils/theme"

export default function BannerWhatWeDo2(props) {
  const data = props ? props?.input?.primary : []

  return (
    <Container>
      {data?.image_banner ? <Image>{data?.image_banner?.url}</Image> : <></>}
      <SubTitle>
        <Sub>
          {data.sub_title_banner && data.sub_title_banner.length > 0
            ? data.sub_title_banner.map(element =>
                element.text ? element.text : ""
              )
            : ""}
        </Sub>
        <Title>
          {data.title_banner && data.title_banner.length > 0
            ? data.title_banner.map(element =>
                element.text ? element.text : ""
              )
            : ""}
        </Title>
        <Description>
          {data?.description_banner?.map(item =>
            item?.text ? item?.text : ""
          )}
        </Description>
      </SubTitle>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  margin-bottom: 40px;
  height: 440px;

  @media (max-width: 1366px) {
    height: 380px;
  }
  @media (max-width: 600px) {
    width: 100%;
    height: 338px;
  }
  @media (max-width: 340px) {
    width: 100%;
    height: 358px;
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
    margin: 159px 0 0 284px;
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
    right: calc(100% + 24px);
    top: 36%;
    display: block;
    content: "";
    width: 80px;
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

  @media (min-width: 1600px) {
    &::before {
      right: calc(100% + 24px);
      width: 80;
    }
  }
`
const Title = styled.h2`
  margin: 0;
  color: #101010;
  font-family: Calibre Bold;
  font-size: 64px;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 56px;

  @media (max-width: 600px) {
    color: #101010;
    font-family: Calibre Bold;
    font-size: 40px;
    font-weight: 700;
    letter-spacing: -1px;
    line-height: 38px;
  }
`
const Description = styled.p`
  color: #222222;
  font-family: Calibre Regular;
  font-size: 20px;
  letter-spacing: 0;
  line-height: 28px;

  @media (min-width: 600px) {
    width: 100%;
    max-width: 770px;
  }
  @media (max-width: 375px) {
    width: 343px;
  }
  @media (max-width: 360px) {
    width: 100%;
  }
`
