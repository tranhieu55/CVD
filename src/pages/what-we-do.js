import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import IMG from "../components/Image"
import H2 from "../components/bits/H2"
import P from "../components/bits/Typography"
import Interested from "../components/Interested"
import SEO from "../components/utilities/SEO"

const Study = styled.div`
  .study {
    margin-top: 96px;
    margin-bottom: 115px;
  }
  .iphone-X {
    padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
  }
  .box-study-5 {
    display: flex;
    align-items: center;
    margin-bottom: 115px;
  }
  h2 {
    font-weight: 600;
  }
  .study {
    max-width: 1240px !important;
  }
  .card-wedo {
    display: flex;
  }
  .my-border-study {
    width: 64px;
    height: 2px;
    background-color: gold;
    margin-right: 16px;
    margin-bottom: 4px;
  }
  .box-tag-study {
    display: flex;
    align-items: center;
    color: #999999;
    font-size: 14px;
    height: 16px;
  }
  .box-study {
    display: flex;
    align-items: center;
    margin-bottom: 96px;
  }
  .box-content-study {
    width: 446px;
  }
  .cl-order {
    flex-direction: row-reverse;
  }
  .icon-leadmore {
    font-size: 20px;
    font-family: "Calibre Medium";
    font-weight: 500;
    margin-top: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    svg {
      margin-left: 7px;
      margin-bottom: -2px;
    }
  }
  .icon-leadmore span {
    color: #101010;
    line-height: 2px;
    font-size: 20px;
  }
  .icon-leadmore:hover svg {
    transition: all 0.8s ease;
    transform: translateX(15px);
    animation: mymove 0.8s infinite;
  }
  .box-img {
    width: 540px;
    height: 540px;
    transition: 0.6s;
    overflow: hidden;
  }
  .box-img:hover {
    box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px,
      rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
    -moz-box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px;
  }
  img:hover {
    transform: scale(1.05);
  }
  .container {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  .cl174 {
    width: 174px;
  }
  .cl80 {
    width: 80px;
  }
  .txt-study {
    font-family: "Calibre Semibold";
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 1px;
    color: #999999;
    letter-spacing: 1px;
  }

  @keyframes mymove {
    0% {
      transform: translateX(0px);
    }
    50% {
      transform: translateX(5px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @media only screen and (max-width: 600px) {
    .box-study {
      flex-direction: column;
      margin-bottom: 30px;
    }
    .box-tag-study {
      margin-bottom: 10px;
    }
    .icon-leadmore span {
      line-height: 26px;
    }
    h2 {
      line-height: 28px;
      margin-bottom: 4px;
    }
    span.learn-more-title::after {
      line-height: 19px !important;
    }
    .box-study-5 {
      flex-direction: column;
      margin-bottom: 0px;
    }
    .study {
      margin-top: 16px;
      margin-bottom: 25px;
    }
    .box-img {
      padding-left: 16px !important;
      padding-right: 16px !important;
      margin-bottom: 20px;
      width: 100% !important;
      height: 100% !important;
    }
    .cl174 {
      display: none;
    }
    .cl80 {
      display: none;
    }
    h2 {
      font-size: 24px;
      word-spacing: 2px;
    }
    p {
      font-size: 20px;
    }
    .icon-leadmore {
      height: 20px;
      font-size: 20px;
      margin-top: 14px;
    }

    .box-content-study {
      width: 100%;
      padding: 0 17px;
    }
  }
  @media only screen and (min-width: 600px) {
    .box-study {
      padding-right: 15px;
      padding-left: 15px;
    }
    .box-study-5 {
      padding-right: 15px;
      padding-left: 15px;
    }

    h2 {
      font-size: 22px;
    }
    p {
      font-size: 16px;
    }
    .icon-leadmore {
      font-size: 16px;
    }
    .box-img {
      width: 100%;
      height: 100%;
    }
    .cl174 {
      width: 100px;
    }
    .cl80 {
      display: none;
    }
    .study {
      margin-top: 30px;
      margin-bottom: 32px;
    }
    .box-study-5 {
      margin-bottom: 32px;
    }
  }
  @media only screen and (min-width: 768px) {
    h2 {
      font-size: 26px;
    }
    p {
      font-size: 16px;
    }
    .icon-leadmore {
      font-size: 16px;
    }
    .study {
      margin-top: 30px;
      margin-bottom: 40px;
    }
    .box-study-5 {
      margin-bottom: 40px;
    }
  }
  @media only screen and (min-width: 992px) {
    h2 {
      font-size: 32px;
    }
    p {
      font-size: 20px;
    }
    .icon-leadmore {
      font-size: 20px;
    }
    .cl174 {
      width: 150px;
    }
    .cl80 {
      width: 20px;
    }
    .study {
      margin-top: 30px;
      margin-bottom: 40px;
    }
    .box-study-5 {
      margin-bottom: 48px;
    }
  }
  @media only screen and (min-width: 1200px) {
    .cl174 {
      width: 130px;
    }
    .study {
      margin-top: 96px;
      margin-bottom: 40px;
    }
    .box-study-5 {
      margin-bottom: 115px;
    }
  }
  @media only screen and (min-width: 1366px) {
    .box-study {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
    .cl174 {
      width: 174px;
    }
    .cl80 {
      display: block;
    }
  }
  .box-img {
    width: 540px;
    height: 540px;
  }
  .box-tag-study {
    margin-bottom: 12px;
  }

  span.learn-more-title {
    display: flex;
    &::after {
      content: "\f178";
      font-family: "Font Awesome 5 Pro Regular";
      height: 18px;
      line-height: 0px;
      font-size: 18px;
      color: #101010;
      padding: 0px 0.6rem;
    }
  }
`

export const query = graphql`
  query queryWhatWeDoPage {
    prismic {
      allWhatwedo_pages {
        edges {
          node {
            meta_title
            meta_description
            keywords
            body {
              ... on PRISMIC_Whatwedo_pageBodyWhat_we_do_item {
                fields {
                  item_title
                  item_image
                  item_description
                }
              }
            }
          }
        }
      }
    }
  }
`
const WhatWeDo = ({ data }) => {
  const pageData = data.prismic.allWhatwedo_pages.edges[0].node.body[0].fields
  const dataSEO = data.prismic.allWhatwedo_pages.edges[0].node
  return (
    <Layout location="/we-do">
      <SEO props={dataSEO} />
      <Study>
        <div className="container study">
          <div className='iphone-X'>
            {pageData.map((item, index = 1) => (
              <div
                key={index}
                className={` ${index % 2 === 0 ? "" : "cl-order"} ${index === 4 ? "box-study-5" : "box-study"
                  }`}
                data-sal="zoom-in"
                data-sal-delay="2000"
                data-sal-easing="ease"
                data-sal-duration="1000"
              >
                <div className="box-img img-fluid">
                  <IMG
                    objectFit="cover"
                    src={item.item_image.url}
                    alt={item.item_image.alt}
                  />
                </div>
                <div className="cl174"></div>
                <div className=" box-content-study">
                  <div className="box-tag-study">
                    <span className="my-border-study"></span>
                    <span className="txt-study">
                      {" "}
                      {index + 1}/{pageData.length}
                    </span>
                  </div>
                  <H2
                    mrb="6"
                    lineh="32"
                    col="#101010"
                    letsp="-0.5"
                    fz="32"
                    fontFamily="Calibre Semibold"
                  >
                    {item.item_title.map(x => x.text)}
                  </H2>
                  <P
                    lineh="28"
                    coLor="#222222"
                    fontFamily="Calibre Regular"
                    fontSise="20"
                  >
                    {item.item_description.map(x => x.text)}
                  </P>
                  <div className="icon-leadmore">
                    <span className="learn-more-title">Learn more</span>
                  </div>
                </div>
                <div className="cl80"></div>
              </div>
            ))}
          </div>
        </div>
      </Study>
      <Interested />
    </Layout>
  )
}

export default WhatWeDo
