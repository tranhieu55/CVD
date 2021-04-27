import moment from "moment"
import React from "react"
import styled from "styled-components"

const OurLaster = ({ input }) => {
  console.log({ input })
  const datatime = input.fields.map(item =>
    moment(item.post_item?.date_created).format("LL")
  )
  console.log("hieutt", { datatime })
  return (
    <OurLasters>
      {input.fields.map((item, index) => (
        <ListPost key={index}>
          <Img
            src={item.post_item.post_image.url}
            vitri={index}
            al={item.post_item.post_image?.alt}
          ></Img>
          <SubTitle vitri={index}>
            {moment(item.post_item?.date_created).format("LL")}
          </SubTitle>
          <TitlePost>{item.post_item?.title[0].text}</TitlePost>
        </ListPost>
      ))}
    </OurLasters>
  )
}

export default OurLaster

const OurLasters = styled.div`
  height: 716px;
  position: relative;
  margin: 96px 184px 0px;
  @media (max-width: 600px) {
    height: 862px;
    margin: 32px 16px 37px;
  }
  @media (max-width: 360px) {
    margin: 32px 16px 57px;
  }
  @media (min-width: 600px) {
    height: 1243px;
    margin: 50px 16px 37px;
  }
  @media (min-width: 1024px) {
    height: 716px;
    margin: 50px 16px 37px;
  }
  @media (min-width: 1600px) {
    max-width: 1240px;
    margin: auto;
  }
`

const ListPost = styled.div`
  height: 517px;
  width: 606px;
  @media (max-width: 600px) {
    height: 351px;
    width: 100%;
    margin-bottom: 20px;
  }
  @media (min-width: 768px) {
    width: 100%;
    margin-bottom: 16px;
  }
  @media (min-width: 1024px) {
    width: 49%;
    height: 517px;
  }
`

const Img = styled.img`
  width: ${props => (props.vitri === 1 ? "80%" : "100%")};
  height: ${props => (props.vitri === 1 ? "360px" : "400px")};
  margin-left: 32px;
  margin-top: ${props => (props.vitri === 1 ? "20px" : "0px")};
  object-fit: cover;
  @media (max-width: 600px) {
    width: 100%;
    height: 240px;
    margin-left: 0px;
  }
  @media (min-width: 768px) {
    width: 100%;
    margin-left: 0px;
  }
  @media (min-width: 1024px) {
    width: ${props => (props.vitri === 1 ? "80%" : "100%")};
    height: ${props => (props.vitri === 1 ? "360px" : "400px")};
    margin-left: 32px;
    margin-top: ${props => (props.vitri === 1 ? "20px" : "0px")};
  }
  @media (min-width: 1366px) {
    width: ${props => (props.vitri === 1 ? "80%" : "95%")};
  }
`
const TitlePost = styled.h4`
  height: 64px;
  color: #111111;
  font-family: Calibre Semibold;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.5px;
  line-height: 32px;
  margin-left: 80px;
  @media (max-width: 600px) {
    height: 72px;
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.25px;
    line-height: 26px;
    margin-left: 48px;
  }
  @media (max-width: 320px) {
    width: 249px;
  }
`
const Content = styled.div`
  height: 520px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 600px) {
    height: 723px;
    width: 100%;
    display: block;
  }
  @media (min-width: 600px) {
    width: 100%;
    display: block;
  }
  @media (min-width: 1024px) {
    height: 520px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`
const SubTitle = styled.h4`
  position: relative;
  height: 16px;
  width: 154px;
  color: #999999;
  font-family: Calibre Semibold;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 16px;
  margin-left: 80px;
  margin-top: 33px;
  &::after {
    position: absolute;
    right: calc(100% + 17px);
    top: 31%;
    display: block;
    content: "";
    width: 63px;
    height: 2px;
    background: #fecf09;
  }
  @media (max-width: 600px) {
    height: 14px;
    font-family: Calibre;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 14px;
    margin-left: 50px;
    margin-top: 16px;
    &::after {
      width: 32px;
      right: calc(100% + 19px);
    }
  }
  @media (min-width: 768px) {
    margin-left: 112px;
  }
  @media (min-width: 1366px) {
    margin-left: 80px;
    margin-top: ${props => (props.vitri === 1 ? "53px" : "33px")};
  }
`
