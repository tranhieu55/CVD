import React from "react"
import styled from "styled-components"
import moment from "moment"

function ArticleTile({ input }) {
  return (
    <BlockBlog>
      <IMG>
        <img
          src={
            input?.post_item?.post_image?.url
              ? input?.post_item?.post_image?.url
              : ""
          }
          alt={
            input?.post_item?.post_image?.alt
              ? input?.post_item?.post_image?.alt
              : ""
          }
        />
      </IMG>
      <CreateAt>
        {input?.post_item?.date_created
          ? moment(input?.post_item?.date_created).format("LL")
          : ""}
      </CreateAt>
      <Title>
        {input?.post_item?.title[0]?.text
          ? input?.post_item?.title[0]?.text
          : ""}
      </Title>
      <ReadMore href="">Read more</ReadMore>
    </BlockBlog>
  )
}

export default ArticleTile

const BlockBlog = styled.div`
  width: 50vw;
  max-width: 605px;

  @media (max-width: 1211px) {
    width: 90vw;
  }

  @media (max-width: 600px) {
    width: 100%;
    padding-left: 16px;
    padding-right: 16px;
  }
  @media (max-width: 375px) {
    max-width: 343px;
    padding: 0;
  }

  @media (max-width: 370px) {
    padding-left: 7.5px;
    padding-right: 7.5px;
  }
  @media (max-width: 350px) {
    padding-left: 14px;
    padding-right: 14px;
  }
`

const IMG = styled.div`
  width: 100%;
  height: 400px;
  margin-bottom: 33px;
  background-color: gray;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 600px) {
    margin-bottom: 18px;
  }
  @media (max-width: 425px) {
    height: 240px;
  }
`

const CreateAt = styled.span`
  color: #999999;
  font-family: Calibre Semibold;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 16px;
  position: relative;
  margin-left: 80px;
  height: 16px;
  text-transform: uppercase;

  &::after {
    position: absolute;
    right: calc(100% + 16px);
    top: 35%;
    display: block;
    content: "";
    width: 64px;
    height: 2px;
    background: #fecf09;
  }
  @media (max-width: 600px) {
    margin-left: 48px;
    font-size: 12px;
    line-height: 14px;

    &::after {
      width: 32px;
    }
  }
`

const Title = styled.h4`
  margin-bottom: 16px;
  margin-top: 4px;
  font-size: 32px;
  line-height: 32px;
  letter-spacing: -0.5px;
  color: #111111;
  font-family: Calibre Semibold;
  text-align: left;
  font-weight: 600;

  @media (max-width: 600px) {
    margin-top: 7px;
    margin-bottom: 8px;
    font-size: 24px;
    line-height: 24px;
    letter-spacing: -0.25px;
    color: #101010;
  }
`

const ReadMore = styled.a`
  color: #101010;
  font-family: Calibre Medium;
  font-size: 20px;
  line-height: 20px;
  margin: 0;
  font-weight: 500;
  letter-spacing: 0;
  position: relative;

  &:active,
  &:hover,
  &:visited {
    color: #101010;
    text-decoration: none;
  }

  &::after {
    content: "\f178";
    color: #101010;
    font-family: "Font Awesome 5 Pro Regular";
    font-size: 20px;
    letter-spacing: 0;
    line-height: 21px;
    text-align: center;
    position: absolute;
    top: -2px;
    left: calc(100% + 6px);
  }
`
