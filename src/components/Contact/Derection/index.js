import React, { useState } from "react"
import styled from "styled-components"

export default function Derection({ input }) {
  const data = input.fields
  const DivIMG = styled.div`
    overflow: hidden;
  `
  const Derections = styled.div`
    margin: 66px 0px 72px 180px;
    @media (max-width: 600px) {
      margin: 512px 16px 24px;
    }
    @media (max-width: 360px) {
      margin: 512px 16px 24px;
    }
    @media (max-width: 320px) {
      margin: 565px 16px 24px;
    }
    @media (min-width: 600px) {
      margin: 66px 0px 72px 16px;
      width: 240px;
    }
    @media (min-width: 768px) {
      margin: 66px 0px 72px 30px;
      width: 296px;
    }
    @media (min-width: 1024px) {
      margin: 66px 0px 72px 50px;
      width: 396px;
    }
    @media (min-width: 1200px) {
      margin: 66px 0px 72px 180px;
      width: 456px;
    }
    @media (min-width: 1440px) {
      margin: 66px 0px 72px 180px;
      width: 556px;
    }
  `
  const Title = styled.h1`
    @media (max-width: 600px) {
      height: 52px;
      font-size: 32px;
      margin-bottom: 24px;
      color: #101010;
      font-family: Calibre Semibold;
      font-weight: 600;
      letter-spacing: 0;
      line-height: 52px;
      border-bottom: 1px solid #e4e4e4;
    }
    @media (min-width: 600px) {
      width: 100%;
      color: #101010;
      font-family: Calibre Semibold;
      font-size: 48px;
      font-weight: 600;
      letter-spacing: 0;
      line-height: 52px;
      border-bottom: 1px solid #e4e4e4;
      margin-bottom: 32px;
      padding-bottom: 10px;
    }
  `
  const Contentleft = styled.div`
    width: 43.2%;
    @media (max-width: 600px) {
      width: 100%;
    }
    @media (min-width: 600px) {
      width: 100%;
    }
    @media (min-width: 1024px) {
      width: 43.2%;
    }
  `
  const ContentRight = styled.div`
    width: 48.9%;
    .googole-map {
      border: none;
    }
    @media (max-width: 600px) {
      width: 100%;
      margin-top: 24px;
      height: 219px;
    }
    @media (min-width: 600px) {
      width: 100%;
      margin-top: 24px;
      height: 219px;
    }
    @media (min-width: 1024px) {
      width: 48.9%;
      margin-top: 0px;
      height: 100%;
    }
  `
  const Content = styled.div`
    width: 100%;
    height: 172px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    @media (max-width: 600px) {
      display: block;
      height: auto;
      margin-bottom: ${props =>
        props.vitri === data.length - 1 ? "0px" : "32px"};
    }
    @media (min-width: 600px) {
      display: block;
      height: auto;
    }
    @media (min-width: 1024px) {
      display: flex;
      height: 172px;
    }
  `
  const TitleLeft = styled.div`
    color: #101010;
    font-family: Calibre Semibold;
    font-size: 22px;
    font-weight: 600;
    letter-spacing: -0.5px;
    line-height: 26px;
  `
  const TextLeft = styled.div`
    color: #222222;
    font-family: Calibre Regular;
    font-size: 20px;
    letter-spacing: 0;
    line-height: 24px;
  `
  const Phone = styled.div`
    color: #222222;
    font-family: Calibre Regular;
    font-size: 20px;
    letter-spacing: 0;
    line-height: 24px;
    margin-bottom: 12px;
  `
  const DivLink = styled.div`
    display: flex;
    margin-top: 12px;
  `
  const Link = styled.a`
    opacity: 0.9;
    color: #555555;
    font-family: Calibre Regular;
    font-size: 20px;
    letter-spacing: 0;
    line-height: 24px;
    text-decoration: underline;
    text-underline-offset: 3px;
    margin-bottom: 0px;
    margin-right: 16px;
    cursor: pointer;

    &:hover,
    &:active,
    &:focus {
      color: #555555;
    }
  `
  return (
    <Derections>
      {input ? (
        <Title>
          {input?.primary?.title?.map(item => (item?.text ? item?.text : item))}
        </Title>
      ) : (
        <></>
      )}
      {data ? (
        data?.map((item, index) => (
          <Content vitri={index}>
            <Contentleft key={index}>
              <TitleLeft>
                {item?.office_title?.map(item =>
                  item?.text ? item?.text : item
                )}
              </TitleLeft>
              <TextLeft>
                {item?.address?.map(item => (item?.text ? item?.text : item))}
              </TextLeft>
              <Phone>
                {item?.office_phone_number?.map(item =>
                  item?.text ? item?.text : item
                )}
              </Phone>
              <DivLink>
                <Link
                  href={`tel: ${
                    item?.office_phone_number[0]?.text
                      ? item?.office_phone_number[0]?.text
                      : ""
                  }`}
                >
                  Call
                </Link>
                <Link
                  href={
                    item?.directions_link?.url ? item?.directions_link?.url : ""
                  }
                >
                  Directions
                </Link>
              </DivLink>
            </Contentleft>
            <ContentRight>
              <iframe
                src={
                  item?.google_maps_link?.url
                    ? item?.google_maps_link?.url +
                      "5e0!3m2!1sen!2s!4v1604548971410!5m2!1sen!2s"
                    : ""
                }
                id="serviceFrameSend"
                width="100%"
                height="100%"
                className="googole-map"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </ContentRight>
          </Content>
        ))
      ) : (
        <></>
      )}
    </Derections>
  )
}
