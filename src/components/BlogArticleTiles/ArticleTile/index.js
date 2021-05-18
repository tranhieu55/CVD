import React from "react"
import styled from "styled-components"

function ArticleTile({ input }) {
  return (
    <BlockBlog>
      <IMG>
        <img src="" alt="" />
      </IMG>
      <CreateAt>June 25, 2019</CreateAt>
      <Title>
        Five easy tricks to satisfy customers before they ask for help
      </Title>
      <ReadMore>Read more</ReadMore>
    </BlockBlog>
  )
}

export default ArticleTile

const BlockBlog = styled.div`
  width: 30vw;
  max-width: 394px;

  @media (max-width: 992px) {
    width: 40vw;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`

const IMG = styled.div`
  width: 100%;
  height: 508px;
  margin-bottom: 16px;
  background-color: gray;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 600px) {
    height: 485px;
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
    &::after {
      width: 61.08px;
    }
  }
`

const Title = styled.h4`
  margin-bottom: 4px;
  margin-top: 8px;
  font-size: 32px;
  line-height: 32px;
  letter-spacing: -0.5px;
  color: #101010;
  font-family: Calibre Semibold;
  text-align: left;

  @media (max-width: 600px) {
    margin-top: 6px;
    margin-bottom: 2px;
  }
`

const ReadMore = styled.p`
  color: #222222;
  font-family: Calibre Regular;
  font-size: 18px;
  line-height: 24px;
  margin: 0;
`
