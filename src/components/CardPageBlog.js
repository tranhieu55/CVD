import { Link } from "gatsby"
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
        <ListPost key={index} className={index % 2 === 0 ? "orderleft" : ""}>
          <Link to={`/blog/${item.post_item._meta.uid}`}>
            <Img
              src={item.post_item.post_image.url}
              vitri={index}
              al={item.post_item.post_image?.alt}
            ></Img>
          </Link>
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
  display: flex;
  flex-wrap: wrap;
  max-width: 1240px;
  margin: auto;
  margin-top: 64px;
  .orderleft {
    margin-right: 28px;
  }
  @media (max-width: 600px) {
    padding: 16px;
    .orderleft {
      margin-right: 0px;
    }
  }
`

const ListPost = styled.div`
  height: 517px;
  width: 606px;
  margin-bottom: 84px;

  @media (max-width: 600px) {
    height: 351px;
    width: 100%;
    margin-bottom: 50px;
  }
  /* @media (min-width: 768px) {
    width: 100%;
    margin-bottom: 16px;
  }
  @media (min-width: 1024px) {
    width: 49%;
    height: 517px;
  } */
`

const Img = styled.img`
  height: 400px;
  margin-left: 32px;
  margin-top: 0px;
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
    width: 100%;
    height: 400px;
    margin-left: 32px;
    margin-top: 0px;
  }
  @media (min-width: 1366px) {
    width: 95%;
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
  @media (max-width: 320px) {
    width: 249px;
  }
  @media (max-width: 600px) {
    height: 72px;
    font-size: 32px;
    font-weight: 600;
    letter-spacing: -0.33px;
    line-height: 26px;
    margin-left: 48px;
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
  font-family: "Calibre Semibold";
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
    font-family: "Calibre Semibold";
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
    margin-top: 33px;
  }
`
