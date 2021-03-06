import { Link } from "gatsby"
import moment from "moment"
import React, { useContext } from "react"
import styled from "styled-components"
import { OurWorkStateContext } from "../context/ourwork/OurWorkContextProvider"

const OurLaster = ({ input }) => {
  const datatime = input.fields?.map(item =>
    moment(item.post_item?.date_created).format("LL")
  )

  const data = input && input.fields ? input.fields : ""
  const state = useContext(OurWorkStateContext)
  const { listSelected } = state

  const listPartners = listSelected.includes("all")
    ? data
    : data.filter(x => {
        return listSelected.includes(
          x.post_item?.post_category?._meta?.uid
            ? x.post_item?.post_category?._meta?.uid
            : ""
        )
      })
  return (
    <OurLasters>
      {listPartners?.map((item, index) => (
        <ListPost key={index} className={index % 2 === 0 ? "orderleft" : ""}>
          <Link
            to={`/blog/${
              item?.post_item?._meta?.uid ? item?.post_item?._meta?.uid : ""
            }`}
          >
            <Img
              src={
                item?.post_item?.post_image?.url
                  ? item?.post_item?.post_image?.url
                  : ""
              }
              vitri={index}
              al={
                item?.post_item?.post_image?.alt
                  ? item?.post_item?.post_image?.alt
                  : ""
              }
            ></Img>
          </Link>
          <SubTitle vitri={index}>
            {item?.post_item?.date_created
              ? moment(item?.post_item?.date_created).format("LL")
              : ""}
          </SubTitle>
          <TitlePost>
            {item?.post_item?.title?.map(item => item.text)
              ? item?.post_item?.title?.map(item => item.text)
              : ""}
          </TitlePost>
          <Read
            href={`/blog/${
              item?.post_item?._meta?.uid ? item?.post_item?._meta?.uid : ""
            }`}
          >
            Read more
          </Read>
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
  .orderleft {
    margin-right: 28px;
  }
  @media (max-width: 600px) {
    padding: 16px;
    padding-bottom: 0;
    margin-bottom: 14px;
    .orderleft {
      margin-right: 0px;
    }
  }
  @media (min-width: 600px) {
    margin-bottom: 0px;
    margin-top: 32px;
    .orderleft {
      margin-right: 0px;
      margin: auto;
      margin-bottom: 50px;
    }
  }
  @media (min-width: 1366px) {
    margin-top: 64px;
    .orderleft {
      margin: unset;
      margin-right: 28px;
      margin-bottom: 80px;
    }
    margin-bottom: 26px;
  }
`

const ListPost = styled.div`
  height: 517px;
  width: 606px;
  margin-bottom: 80px;
  a:hover {
    text-decoration: none;
  }

  @media (max-width: 374px) {
    margin-bottom: 36px !important;
  }
  @media (max-width: 600px) and (max-height: 350px) {
    margin-bottom: 16px !important;
  }
  @media (max-width: 600px) {
    height: 351px;
    width: 100%;
    margin-bottom: 16px;
  }
  @media (min-width: 600px) {
    margin: auto;
    margin-bottom: 50px;
  }
  @media (min-width: 768px) {
    /* padding: 0 16px; */
  }
  @media (min-width: 1366px) {
    margin: unset;
  }
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
  @media (min-width: 600px) {
    margin-left: 16px;
  }
  @media (min-width: 768px) {
    width: 100%;
    margin-left: 0px;
  }
  @media (min-width: 1024px) {
    width: 100%;
    height: 400px;
    margin-top: 0px;
  }
  @media (min-width: 1200px) {
    /* margin-left: 32px;
    width: 95%; */
  }
  @media (min-width: 1366px) {
    /* margin-left: 0px; */
    width: 100%;
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
  @media (max-width: 374px) {
    font-size: 24px !important;
  }
  @media (max-width: 600px) and (max-height: 350px) {
    font-size: 26px !important;
    line-height: 23px !important;
  }
  @media (max-width: 600px) {
    font-weight: 600;
    letter-spacing: -0.25px;
    line-height: 24px;
    color: #101010;
    font-size: 24px;
    height: auto;
  }
  @media (min-width: 600px) {
    margin-left: 17px;
  }
  @media (min-width: 768px) {
    margin-left: 0px;
  }
  @media (min-width: 1200px) {
    margin-left: 0px;
  }
  @media (min-width: 1366px) {
    margin-left: 0px;
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
  text-transform: uppercase;
  &::after {
    position: absolute;
    right: calc(100% + 17px);
    top: 20%;
    display: block;
    content: "";
    width: 63px;
    height: 2px;
    background: #fecf09;
  }
  @media (max-width: 600px) and (max-height: 350px) {
    margin-top: 20px !important;
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
  @media (min-width: 600px) {
    &::after {
      width: 45px;
    }
  }
  @media (min-width: 768px) {
    margin-left: 80px;
    &::after {
      width: 63px;
    }
  }
  @media (min-width: 1366px) {
    margin-left: 80px;
    margin-top: 37px;
  }
`
const Read = styled.a`
  margin-bottom: 0px;
  color: #101010;
  font-family: Calibre Medium;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 20px;
  cursor: pointer;
  &::after {
    content: "\f178";
    font-family: "Font Awesome 5 Pro Regular";
    height: 18px;
    line-height: 16px;
    font-size: 18px;
    color: #101010;
    padding: 0px 0.6rem;
  }
  @media (min-width: 600px) {
    margin-left: 17px;
  }
  @media (min-width: 768px) {
    margin-left: 0px;
  }
  @media (min-width: 1200px) {
    margin-left: 0px;
  }
  @media (min-width: 1366px) {
    margin-left: 0px;
  }
`
