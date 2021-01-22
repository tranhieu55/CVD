import React from "react"
import styled from "styled-components"

import { graphql, useStaticQuery } from "gatsby"
import P from "../../components/bits/Typography"
import { theme } from "../../utils/theme"

const WraperBannerWhatWeDo = styled.div`
  width: 100%;
  background-color: ${theme.colors.lightGray};
  .my-border {
    width: 80px;
    height: 2px;
    background-color: #fecf09;
    margin-right: 24px;
  }
  .box-tag {
    margin-top: 158px;
    display: flex;
    align-items: center;
  }
  span {
    color: #999999;
    display: block;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
  }
  .wrapper {
    max-width: 1240px !important;
    padding: env(safe-area-inset-top) env(safe-area-inset-right)
      env(safe-area-inset-bottom) env(safe-area-inset-left);
  }

  .my-border-txt {
    letter-spacing: 1px;
    line-height: 16px;
    font-family: "Calibre Semibold";
  }
  .my-border {
    margin-bottom: 4px;
  }
  @media only screen and (max-width: 600px) {
    .my-border {
      width: 32px !important;
      margin-right: 16px !important;
    }
    .wrapper {
      margin-bottom: 16px;
      padding-right: 16px !important;
      padding-left: 16px !important;
    }
    span {
      font-size: 12px !important;
    }
    p {
      font-size: 24px;
      margin-top: 14px;
      padding-bottom: 16px;
      line-height: 26px;
      word-spacing: 1.3px;
    }
    .offset-1 {
      margin-left: 0 !important;
    }
    .box-tag {
      margin-top: 85px !important;
    }
    .col-md-10 {
      padding-right: 16px;
      padding-left: 16px;
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    .wrapper {
      margin-bottom: 30px;
    }
    .row {
      margin: 0 !important;
    }
    .my-border {
      width: 32px;
    }
    p {
      font-size: 24px;
      margin-top: 24px;
      padding-bottom: 30px;
    }
    .offset-1 {
      margin-left: 0 !important;
    }
    .box-tag {
      margin-top: 100px;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    .wrapper {
      margin-bottom: 30px;
    }
    .my-border {
      width: 45px;
    }
    p {
      font-size: 24px;
      margin-top: 24px;
      padding-bottom: 30px;
    }
    .box-tag {
      margin-top: 100px;
    }
    .offset-1 {
      margin-left: 70px !important;
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    .wrapper {
      margin-bottom: 30px;
    }
    .my-border {
      width: 60px;
      height: 2px;
      background-color: gold;
      margin-right: 24px;
    }
    .box-tag {
      margin-top: 158px;
    }
    span {
      font-size: 14px;
    }
    p {
      padding-bottom: 0px;
      margin-bottom: 96px;
    }
    .offset-1 {
      margin-left: 84px !important;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    .wrapper {
      margin-bottom: 96px;
    }
    .offset-1 {
      margin-left: 103px !important;
    }
    .container {
      padding-right: 15px !important;
      padding-left: 15px !important;
    }
    @media only screen and (max-width: 1299px) {
      .container {
        padding-right: 15px !important;
        padding-left: 15px !important;
      }
    }
    @media only screen and (min-width: 1300px) {
      .container {
        padding-right: 0 !important;
        padding-left: 0 !important;
      }
      p {
        font-size: 32px;
        max-width: 825px;
      }
      .row {
        margin-right: -15px !important;
        margin-left: -15px !important;
      }
    }
    .my-border {
      width: 80px;
      height: 2px;
      background-color: gold;
      margin-right: 24px;
    }
    .box-tag {
      margin-top: 165px;
      display: flex;
      align-items: center;
    }
    span {
      color: #999999;
      display: block;
      font-size: 14px;
      font-weight: 600;
    }
    .offset-1 {
      margin-left: 8.333333%;
    }
  }
`

const BannerWhatWeDo = () => {
  const data = useStaticQuery(graphql`
    query queryBannerWhatWeDo {
      prismic {
        allWhatwedo_pages {
          edges {
            node {
              banner_text
            }
          }
        }
      }
    }
  `)

  return (
    <WraperBannerWhatWeDo
      className="contrainer-fluid"
      data-sal="slide-up"
      data-sal-delay="2000"
      data-sal-easing="ease"
      data-sal-duration="1000"
    >
      <div className="container wrapper">
        <div className="row">
          <div className="col-md ">
            <div className="box-tag">
              <span className="my-border"></span>
              <span className="my-border-txt">What We Do</span>
            </div>
          </div>
          <div className="col-md-10 offset-1">
            <P
              coLor="#111111"
              fontFamily="Calibre Semibold"
              mt="24"
              fontSise="32"
              pdb="96"
              lineh="36"
              lett="-0.5"
            >
              {data.prismic.allWhatwedo_pages.edges[0].node.banner_text[0].text}
            </P>
          </div>
        </div>
      </div>
    </WraperBannerWhatWeDo>
  )
}
export default BannerWhatWeDo
