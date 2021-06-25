import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const OurLaster = ({ input }) => {
  const Titles = input
    ? input.primary?.title?.map(item => (item?.text ? item?.text : ""))
    : []
  const Messaging = input
    ? input.primary?.messaging?.map(item => (item?.text ? item?.text : ""))
    : []

  return (
    <OurLasters>
      <Title>{Titles}</Title>
      <Messagings>{Messaging}</Messagings>
      <Content>
        {input ? (
          input.fields?.map((item, index) => (
            <ListPost
              key={index}
              as={Link}
              to={
                item?.posts
                  ? `/blog/${
                      item.posts?._meta?.uid ? item.posts?._meta?.uid : ""
                    }`
                  : ``
              }
              vitri={index}
            >
              <Img
                src={
                  item?.posts
                    ? item?.posts?.post_image?.url
                      ? item?.posts?.post_image?.url
                      : ""
                    : ""
                }
                vitri={index}
              ></Img>
              <SubTitle vitri={index}>JUNE 25, 2019</SubTitle>
              <TitlePost vitri={index}>
                {item?.posts
                  ? item?.posts?.title?.map(item =>
                      item?.text ? item?.text : ""
                    )
                  : ""}
              </TitlePost>
            </ListPost>
          ))
        ) : (
          <></>
        )}
      </Content>
    </OurLasters>
  )
}

export default OurLaster

const OurLasters = styled.div`
  height: 716px;
  position: relative;
  margin: 96px 184px 0px;
  @media (max-width: 600px) {
    height: auto;
    margin: 32px 16px 27px;
  }
  @media (max-width: 360px) {
    margin: 32px 16px 27px;
  }
  @media (min-width: 600px) {
    height: auto;
    margin: 50px 16px 37px;
  }
  @media (min-width: 1024px) {
    height: 716px;
    margin: 50px 32px 37px;
  }
  @media (min-width: 1200px) {
    margin: 50px 57px 37px;
  }
  @media (min-width: 1240px) {
    margin: 96px 87px 37px;
  }
  @media (min-width: 1366px) {
    margin: 50px 87px 37px;
  }
  @media (min-width: 1500px) {
    margin: 96px 117px 37px;
  }
  @media (min-width: 1600px) {
    margin: 96px 184px 0px;
  }
`

const Title = styled.h1`
  height: 72px;
  width: 100%;
  color: #101010;
  font-family: Calibre Bold;
  font-size: 80px;
  font-weight: bold;
  letter-spacing: -2px;
  line-height: 72px;
  text-align: center;
  margin: 0 auto;
  @media (max-width: 600px) {
    font-size: 40px;
    font-weight: bold;
    letter-spacing: -1px;
    line-height: 54px;
    text-align: center;
    height: 38px;
    width: 100%;
  }
`
const Messagings = styled.h4`
  color: #222;
  font-family: Calibre Regular;
  font-size: 24px;
  letter-spacing: 0;
  line-height: 30px;
  text-align: center;
  margin: 16px 152px 48px;
  @media (max-width: 600px) {
    font-size: 20px;
    letter-spacing: 0;
    line-height: 24px;
    text-align: center;
    margin: 5px 0px 24px;
  }
  @media (min-width: 600px) {
    margin: 16px 50px 48px;
  }
  @media (min-width: 1024px) {
    margin: 16px 210px 48px;
  }
  @media (min-width: 1600px) {
    margin: 0px 210px 48px;
  }
`

const ListPost = styled.div`
  height: 517px;
  width: 606px;
  &:hover {
    text-decoration: none;
  }

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
    width: ${props => (props.vitri === 0 ? "49.2%" : "45.8%")};
    height: 517px;
  }
`

const Img = styled.img`
  width: ${props => (props.vitri === 1 ? "80%" : "100%")};
  height: ${props => (props.vitri === 1 ? "360px" : "400px")};
  margin-left: ${props => (props.vitri === 1 ? "24px" : "32px")};
  margin-top: ${props => (props.vitri === 1 ? "20px" : "0px")};
  object-fit: cover;
  @media (max-width: 600px) {
    width: 100%;
    height: 240px;
    margin-left: 0px;
  }
  @media (min-width: 600px) {
    width: 90%;
  }
  @media (min-width: 768px) {
    width: 100%;
    margin-left: 0px;
  }
  @media (min-width: 1024px) {
    width: ${props => (props.vitri === 1 ? "94.5%" : "93.5%")};
    height: ${props => (props.vitri === 1 ? "360px" : "400px")};
    margin-left: ${props => (props.vitri === 1 ? "24px" : "32px")};
    margin-top: ${props => (props.vitri === 1 ? "20px" : "0px")};
  }
  @media (min-width: 1366px) {
    width: ${props => (props.vitri === 1 ? "96%" : "95%")};
  }
  @media (min-width: 1600px) {
    width: ${props => (props.vitri === 1 ? "96%" : "95%")};
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
  margin-left: ${props => (props.vitri === 1 ? "48px" : "30px")};
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
const Content = styled.span`
  height: 520px;
  width: 100%;
  display: flex;
  /* justify-content: space-between; */
  @media (max-width: 600px) {
    height: auto;
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
  @media (min-width: 1600px) {
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
  margin-left: ${props => (props.vitri === 1 ? "48px" : "113px")};
  margin-top: 33px;
  &::after {
    position: absolute;
    right: calc(100% + 17px);
    top: 31%;
    display: block;
    content: "";
    width: ${props => (props.vitri === 1 ? "32px" : "64px")};
    height: 2px;
    background: #fecf09;
  }
  @media (max-width: 600px) {
    height: 14px;
    font-family: Calibre Semibold;
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
    margin-left: ${props => (props.vitri === 1 ? "49px" : "113px")};
  }
  @media (min-width: 1024px) {
    margin-left: ${props => (props.vitri === 1 ? "49px" : "113px")};
    margin-top: ${props => (props.vitri === 1 ? "53px" : "32px")};
  }
  @media (min-width: 1366px) {
    margin-left: ${props => (props.vitri === 1 ? "48px" : "113px")};
    margin-top: ${props => (props.vitri === 1 ? "53px" : "33px")};
  }
`
