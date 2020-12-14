import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import P from "../components/bits/Typography"
import { theme } from "../utils/theme"
import Interested from "../components/Interested"
import IMG from "../components/Image"
import Layout from "../components/Layout"
import H4 from "../components/bits/H4"
import SEO from "../components/utilities/SEO"

const Background = styled.div`
  margin-top: 96px;
  margin-left: 49px;
  P {
    font-family: "Calibre Semibold";
  }
  .text-style {
    font-family: "Calibre Regular";
    font-size: 20px;
    color: #222222;
    line-height: 28px;
  }
  .text-style-bottom {
    font-family: "Calibre Regular";
    font-size: 20px;
    color: #222222;
    line-height: 28px;
  }
  .map-solution {
    display: flex;
    justify-content: space-between;
    margin-bottom: 23px;
    flex-wrap: wrap;
    width: 100%;
    padding-right: 73px;
    div {
      width: 49%;
      color: #101010;
      line-height: 20px;
      h4 {
        font-weight: 500;
        font-size: 20px;
        margin-top: 2px;
        margin-bottom: 0px;
        color: #101010;
        line-height: 20px;
      }
    }
  }

  p {
    position: relative;
    line-height: 22px;
    height: 16px;
    max-width: 150px;
    font-size: 14px;
    margin-bottom: 26px;
    font-weight: 600;
    letter-spacing: 1px;
    &::before {
      position: absolute;
      right: calc(100% + 17px);
      top: 41%;
      display: block;
      content: "";
      width: 64px;
      height: 2px;
      background: ${theme.colors.primaryColor};
    }
  }
  @media (max-width: 1024px) {
    margin-left: 90px;
    padding-bottom: ${({ pdbt }) => `${pdbt}px`};
    .map-solution {
      div {
        padding-top: 10px;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    margin-top: ${({ mt }) => `${mt}px`};
    margin-left: 0px;
    padding-bottom: 0px;
    .map-solution {
      margin-bottom: 33px;
      div {
        padding-top: 0px;
      }
    }
    p {
      letter-spacing: 1px;
    }
    .solution-right {
      width: 46.5% !important;
      height: 32px;
    }
    #solution-down {
      margin-top: 21px;
    }
    p {
      margin-left: 3rem;
      line-height: 21px;
      margin-bottom: ${({ mb }) => `${mb}px`};
      &::before {
        width: 2rem;
      }
    }
    .map-solution {
      padding-right: 0px;
    }
  }
  @media (max-width: 320px) {
    .map-solution {
      div {
        padding-top: 10px;
      }
    }
  }

  @media (min-width: 768px) {
    margin-top: 56px;
    margin-left: 29px;
  }
  @media (min-width: 1024px) {
    margin-top: 96px;
    padding-left: 9%;
  }
  @media (min-width: 1200px) {
    padding-left: 9%;
    padding-right: 30%;
    .text-style-bottom {
      padding-bottom: 60px;
    }
    .map-solution {
      div {
        padding-top: 5px;
      }
    }
  }
  @media (min-width: 1600px) {
    .text-style-bottom {
      padding-bottom: 0px;
    }
    .map-solution {
      div {
        padding-top: 0px;
        h4 {
          margin-top: 0px;
          line-height: 31px;
        }
      }
    }
    margin-top: 96px;
    margin-left: 49px;
    max-width: 789px;
    height: ${({ hb }) => `${hb}px`};
    padding-left: 80px;
    padding-right: 0%;
  }
`

const Other = styled.div`
  max-width: 1240px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 85px;
  margin-bottom: 96px;
  .title-other {
    padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
  }
  .text-title {
    margin-bottom: -4px;
  }
  .Shadow {
    position: absolute;
    bottom: 0px;
    height: 210px;
    width: 100%;
    opacity: 0.3;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
  }
  .row {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-right: 0px;
    margin-left: 0px;
  }
  .list-image-other {
    width: 49%;
    height: 433px;
    position: relative;
    .Shadow-destop {
      height: 100%;
      width: 100%;
      opacity: 0.8;
      position: absolute;
    }
  }
  .col-md-6 {
    height: 433px;
  }
  .text-other {
    font-weight: 600;
    line-height: 52px;
    font-size: 48px;
    text-align: center;
    margin-top: 88px;
    font-family: "Calibre Semibold";
    color: #101010;
    margin-bottom: 30px;
  }
  .row {
    margin-top: 19px;
    a {
      height: 100%;
      img {
        height: 100%;
      }
    }
  }
  .tech-slideshow {
    display: none;
  }
  @media (min-width: 768px) {
    max-width: 585px;
    .title-img-blog {
      .text-title2 {
        h3 {
          font-size: 30px;
        }
      }
    }
  }
  @media (min-width: 1024px) {
    max-width: 900px;
    .row {
      .list-image-other {
        max-height: 320px;
        .title-img-blog {
          left: 20px;
          h3 {
            font-size: 36px;
          }
        }
      }
    }
  }

  @media (min-width: 1200px) {
    max-width: 1024px;
    .row {
      .list-image-other {
        max-height: 433px;
        .title-img-blog {
          left: 42px;
        }
      }
    }
  }
  @media (min-width: 1400px) {
    max-width: 1151px;
  }
  @media (min-width: 1600px) {
    max-width: 1240px;
    .row {
      .list-image-other {
        max-height: 433px;
        .title-img-blog {
          left: 42px;
        }
      }
    }
  }
  @media (min-width: 1800px) {
    max-width: 1380px;
  }
  @media (max-width: 320px) {
    .title-other {
      margin-left: 25px !important;
    }
  }
  @media (max-width: 600px) {
    margin-top: 70px;
    overflow-x: scroll;
    padding-left: 16px;
    margin-bottom: 32px;
    .Shadow-mobile {
      height: 240px;
      width: 100% !important;
      opacity: 0.8;
    }
    .Shadow {
      height: 100px;
      width: 100%;
      opacity: 0.3;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
    }
    .title-other {
      height: 32px;
      margin-left: 36px;
      margin-top: 20px;
      margin-bottom: 29px;
      letter-spacing: -0.5px;
    }
    .row {
      display: none;
      margin-top: 24px;
    }
    .text-other {
      font-size: 32px;
      margin-top: 0px;
      font-family: "Calibre Semibold";
      text-align: left;
      margin-bottom: 0px;
      font-weight: 600;
      line-height: 52px;
    }
    .tech-slideshow {
      display: flex;
      width: 100%;
      height: 206px;
      margin-top: 4px;
      position: relative;
      overflow-x: scroll;
      overflow-y: hidden;
      div {
        width: 290px;
        position: absolute;
        padding-right: 0px;
        padding-left: 0px;
      }
      .title-img-blog {
        bottom: 31px;
        left: 25px;
        height: 45px;
        span {
          font-size: 14px;
        }
        h3 {
          font-size: 28px;
        }
        .text-title2 {
          margin-top: 16px;
        }
      }
      .right {
        margin-left: 306px;
      }
    }
  }
  @media (max-width: 768px) {
    max-width: 585px;
    margin-bottom: 34px;
    .row {
      height: 340px;
      .list-image-other {
        height: 340px;
      }
    }
    .title-img-blog {
      left: 25px !important;
    }
  }

  .title-img-blog {
    position: absolute;
    z-index: 2;
    bottom: 33px;
    left: 42px;
    cursor: pointer;
    /* color:red; */
    span {
      font-weight: bold;
      color: gold;
      text-shadow: 1px 1px #000;
    }
    h3 {
      color: white;
      font-size: 36px;
      font-weight: bold;
      margin: 0;
      padding: 0;
      text-shadow: 1px 1px #000;
    }
  }
`

const Study = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  border-bottom: 1px solid #e4e4e4;
  .type-aliquam-h5 {
    font-family: "Calibre Regular";
  }
  .list-image-background {
    display: flex;
    height: 780px;
    background-color: #f5f5f5;
    margin-top: 96px;
    .three-image {
      display: flex;
      justify-content: space-evenly;
      width: 1240px;
      margin-top: 130px;
      .image-background {
        height: 533px;
        max-width: 284px;
      }
    }
  }
  .title-img-blog {
    position: absolute;
    z-index: 2;
    bottom: 40px;
    left: 40px;
    cursor: pointer;
    /* color:red; */
    span {
      font-weight: 600;
      color: #fecf09;
      font-size: 16px;
      font-family: "Calibre Semibold";
      line-height: 16px;
    }
    h3 {
      color: white;
      font-size: 40px;
      font-weight: bold;
      font-family: "Calibre Bold";
      margin: 0;
      padding: 0;
      line-height: 32px;
    }
  }
  .image-koko {
    margin-top: 96px;
    width: 100%;
  }
  .image-background {
    max-width: 1240px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .plus {
    display: flex;
    margin-left: 128px;
    justify-content: space-between;
    margin-right: 128px;
    margin-top: 107px;
    height: 86px;
    div {
      width: 26%;
      h1 {
        font-weight: bold;
        font-size: 64px;
        text-align: center;
        font-family: "Calibre Semibold";
        line-height: 56px;
        color: #101010;
        font-weight: 600;
        margin-bottom: 0px;
      }
      h5 {
        text-align: center;
        font-size: 18px;
        height: 26px;
        font-family: "Calibre Regular";
        color: #222222;
        line-height: 20px;
      }
    }
  }
  .text-aliquam {
    text-align: center;
  }
  @media (max-width: 992px) {
    max-width: 780px;
    .list-image-background .three-image .image-background {
      height: 410px;
    }
    .text-aliquam {
      padding-top: 60px;
    }
  }
  @media (max-width: 320px) {
    .list-image-background {
      .three-image {
        max-width: 275px !important;
        margin-left: 0px !important;
        .image-background {
          margin-left: 16.48px !important;
        }
      }
    }
  }
  @media only screen and (max-width: 600px) {
    margin-left: 16px;
    margin-right: 16px;
    margin-top: 24px;
    margin-bottom: -70px;
    padding-bottom: 20px;
    .text-aliquam {
      padding-top: 0px;
    }
    .list-image-background {
      height: 236px;
      max-width: 570px;
      background-color: #f5f5f5;
      margin-top: 24px;
      .three-image {
        max-width: 570px;
        margin-top: 33px;
        margin-bottom: 40px;
        margin-left: 20px;
        margin-right: 20px;
        .image-background {
          height: 171px;
          margin-top: 0px;
          width: 83.8px;
          img {
            height: 100%;
          }
        }
      }
    }
    .image-background {
      margin-top: 24px;
    }
    .type-aliquam {
      max-width: 570px;
      color: #222222;
      font-family: "Calibre Semibold";
      font-size: 24px;
      font-weight: 600;
      letter-spacing: 0;
      line-height: 28px;
      text-align: center;
    }
    .type-aliquam-h5 {
      letter-spacing: 0px;
      font-size: 18px;
      line-height: 24px;
    }
    .text-aliquam {
      margin-top: 40px;
    }
    .plus {
      margin-top: 55px;
      display: block !important;
      text-align: center;
      margin-left: 37px;
      margin-right: 36px;
      height: 304px;
      div {
        margin-left: 0px !important;
        width: 100%;
        height: 80px;
        margin-bottom: 32px;
        h1 {
          font-size: 48px;
          color: #101010;
          line-height: 36px;
        }
        h5 {
          line-height: 32px;
          margin-bottom: 0px;
        }
      }
    }
    .image-koko {
      margin-top: 14px;
      div {
        margin-left: 26px;
        margin-right: 24px;
        padding-top: 42px;
        padding-bottom: 39px;
        img {
          width: 100%;
        }
      }
    }
  }
  @media (min-width: 601px) {
    .wrap-header {
      width: 100vw;
    }
    max-width: 585px;
    .plus {
      margin-left: 0px;
      margin-right: 0px;
    }
    .image-koko {
      img {
        width: 100%;
      }
    }
    .list-image-background {
      height: 580px;
      .three-image {
        margin-top: 80px;
      }
    }
  }
  @media (min-width: 1024px) {
    max-width: 900px;
    .plus {
      div {
        width: 100%;
      }
    }
    .list-image-background {
      .three-image {
        margin-top: 40px;
      }
    }
    .text-aliquam {
      padding-top: 50px;
    }
  }
  @media (min-width: 1200px) {
    max-width: 1024px;
    .plus {
      display: flex;
      div {
        width: 30%;
      }
    }
    .image-koko {
      div {
        padding-top: 89px;
        img {
          width: 100%;
        }
      }
    }
    .text-aliquam {
      margin-top: 96px;
      padding-top: 0px;
    }
  }

  @media (min-width: 1400px) {
    max-width: 1151px;
  }

  @media (min-width: 1600px) {
    max-width: 1240px;
    padding-bottom: 80px;
    .list-image-background {
      height: 780px;
      .three-image {
        margin-top: 118px;
        padding-left: 113px;
        padding-right: 118px;
        width: 100%;
        .image-background {
          height: 569px;
          width: 273px;
        }
      }
    }
    .plus {
      display: flex;
      margin-left: 129px;
      margin-right: 129px;
      div {
        width: 270px;
      }
    }
    .image-koko {
      margin-top: 83px;
      height: 898px;
      background-color: #f5f5f5;
      div {
        margin: 0 auto;
        padding-top: 117px;
        height: 649px;
        max-width: 990px;
        img {
          height: 669px;
          width: 100%;
        }
      }
    }
    .text-aliquam {
      max-width: 804px;
      max-height: 110px;
      margin-left: 221px;
      margin-bottom: 113px;
      margin-top: 102px;
      h1 {
        font-family: "Calibre Semibold";
        font-size: 32px;
        color: #222222;
        letter-spacing: 0;
        line-height: 38px;
        text-align: center;
        margin-bottom: 5px;
        font-weight: 600 !important;
      }
      h5 {
        font-family: "Calibre Regular";
        font-size: 18px;
        margin-bottom: 0px;
        font-weight: 400;
        line-height: 33px;
        color: #262626;
        padding-right: 18px;
      }
    }
  }

  @media (min-width: 1800px) {
    max-width: 1380px;
  }
`
const DivIMG = styled.div`
  height: 100%;
  overflow: hidden;
  transition: all 200ms ease-in;
  position: relative;
  display: inline-block;
  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    background-color: gold;
    height: 5px;
    transition: all 0.4s ease-in;
  }
  :hover {
    ::after {
      width: 100%;
    }
  }
`

export const query = graphql`
  query queryAllOurwork {
    prismic {
      allOurwork_items {
        edges {
          node {
            ourworkitem_name
            name_category_of_ourworkitem
            ourworkitem_image
            relationship_to_categoryourwork {
              ... on PRISMIC_Category_ourwork {
                _meta {
                  uid
                }
              }
            }
            _meta {
              uid
            }
          }
        }
      }
    }
  }
`
const OurWorkDetail = props => {
  let dataOurWorkItem = props.pathContext.dataLayout.node

  let slugCurrent = props.pathContext.slug
  let allProjects = props.data.prismic.allOurwork_items.edges

  let removeProjectInPageCurrent = allProjects.filter(
    item => item.node._meta.uid !== slugCurrent
  )

  let arrRandom = []
  while (arrRandom.length < 2) {
    let r = Math.floor(Math.random() * removeProjectInPageCurrent.length)
    if (arrRandom.indexOf(r) === -1) arrRandom.push(r)
  }

  const arrResult = arrRandom.map(x => removeProjectInPageCurrent[x])

  return (
    <Layout
      location="/case-study"
      // pass to banner project
      nameProject={dataOurWorkItem.ourworkitem_name.map(item => item.text)}
      logoProject={dataOurWorkItem.ourworkitem_logo}
      nameCategoryOfWorkItem={dataOurWorkItem.name_category_of_ourworkitem}
      descriptionOfWorkItem={dataOurWorkItem.ourworkitem_description.map(
        item => item.text
      )}
      backgroundWorkItemSrc={dataOurWorkItem.ourworkitem_image.url}
      backgroundWorkItemAlt={dataOurWorkItem.ourworkitem_image.alt}
    >
      <SEO props={dataOurWorkItem} />
      <Study>
        <Background
          hb="205"
          mt="0"
          mb="21"
          data-sal="flip-top"
          data-sal-delay="5000"
          data-sal-easing="ease"
          data-sal-duration="1000"
        >
          <P
            uppercase={true}
            fontWeight={theme.fonts.bold}
            coLor={theme.colors.gray1}
            mrb_rem="2"
            fontSise="14"
          >
            background
          </P>
          {dataOurWorkItem.background_description.length > 0 ? (
            <h4 className="text-style">
              {dataOurWorkItem.background_description.map(item => item.text)}
            </h4>
          ) : (
              ""
            )}
        </Background>

        {/* List ảnh background */}
        <div
          className="list-image-background"
          data-sal="slide-down"
          data-sal-delay="5000"
          data-sal-easing="ease"
          data-sal-duration="1000"
        >
          <div className="three-image">
            {dataOurWorkItem.list_background_images.map((item, index) => (
              <div className="image-background" key={index}>
                <img
                  src={item.list_background_images_item.url}
                  alt={item.list_background_images_item.alt}
                ></img>
              </div>
            ))}
          </div>
        </div>

        <Background
          hb="264"
          mt="28"
          mb="18"
          data-sal="slide-top"
          data-sal-delay="5000"
          data-sal-easing="ease"
          data-sal-duration="1000"
        >
          <P
            uppercase={true}
            fontWeight={theme.fonts.bold}
            coLor={theme.colors.gray1}
            mrb_rem="2"
          >
            the solution
          </P>
          <div className="map-solution">
            {dataOurWorkItem.solution_lists.length > 0 ? (
              <>
                {dataOurWorkItem.solution_lists.map((item, index) => (
                  <div
                    key={index}
                    className={
                      `${index}` === "1" || `${index}` === "3"
                        ? "solution-right"
                        : ""
                    }
                    id={`${index}` === "3" ? "solution-down" : ""}
                  >
                    <H4 fontWeight={theme.fonts.bold}>
                      {item.solution_lists_item}
                    </H4>
                  </div>
                ))}
              </>
            ) : (
                ""
              )}
          </div>
          <div>
            {dataOurWorkItem.solution_description.length > 0 ? (
              <h4 className="text-style">
                {dataOurWorkItem.solution_description.map(item => item.text)}
              </h4>
            ) : (
                ""
              )}
          </div>
        </Background>

        {dataOurWorkItem.statistical_ourwork_item.length > 1 ? (
          <div className="plus">
            {dataOurWorkItem.statistical_ourwork_item.map((item, index) => (
              <div key={index}>
                <h1>{item.title_number_statistical.map(item => item.text)}</h1>
                <h5>{item.description__statistical.map(item => item.text)}</h5>
              </div>
            ))}
          </div>
        ) : (
            ""
          )}

        {dataOurWorkItem.solution_image ? (
          <div
            className="image-koko"
            data-sal="slide-down"
            data-sal-delay="5000"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            <div>
              <img
                alt=""
                src={dataOurWorkItem.solution_image.url}
                alt={dataOurWorkItem.solution_image.alt}
              ></img>
            </div>
          </div>
        ) : (
            ""
          )}

        <div
          className="text-aliquam"
          data-sal="slide-down"
          data-sal-delay="5000"
          data-sal-easing="ease"
          data-sal-duration="1000"
        >
          {dataOurWorkItem.quote_description.length > 0 ? (
            <h1
              className="type-aliquam"
              style={{ fontWeight: "bold", fontFamily: "Calibre Semibold" }}
            >
              “{dataOurWorkItem.quote_description.map(item => item.text)}”
            </h1>
          ) : (
              ""
            )}
          {dataOurWorkItem.quote_author.length > 0 ? (
            <h5 className="type-aliquam-h5">
              {dataOurWorkItem.quote_author.map(item => item.text)}
            </h5>
          ) : (
              ""
            )}
        </div>
        <Background
          pdbt="60"
          mt="56"
          mb="19"
          data-sal="slide-top"
          data-sal-delay="5000"
          data-sal-easing="ease"
          data-sal-duration="1000"
        >
          <P
            uppercase={true}
            fontWeight={theme.fonts.bold}
            coLor={theme.colors.gray1}
            mrb_rem="2"
          >
            features
          </P>
          {dataOurWorkItem.features_description.length > 0 ? (
            <h4 className="text-style-bottom">
              {dataOurWorkItem.features_description.map(item => item.text)}
            </h4>
          ) : (
              ""
            )}
        </Background>
      </Study>
      <Other
        data-sal="slide-up"
        data-sal-delay="5000"
        data-sal-easing="ease"
        data-sal-duration="1000"
      >
        <div className="title-other">
          <h1 className="text-other">Other case studies</h1>
        </div>
        <div className="row">
          {arrResult.map((item, index) => (
            <div
              className="list-image-other"
              key={index}
              tabIndex={slugCurrent}
            >
              <DivIMG
                as={Link}
                to={`/projects/${item.node.relationship_to_categoryourwork._meta.uid}/${item.node._meta.uid}`}
              >
                <IMG
                  alt={item.node.ourworkitem_image.alt}
                  src={item.node.ourworkitem_image.url}
                  objectFit="cover"
                  h="500"
                />
                <div className="Shadow"></div>
              </DivIMG>
              <div className="title-img-blog">
                <div className="text-title">
                  <span>{item.node.name_category_of_ourworkitem}</span>
                </div>
                <div className="text-title2">
                  <h3>{item.node.ourworkitem_name.map(item => item.text)}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="tech-slideshow">
          {arrResult.map((item, index) => (
            <div
              className={`${index}` === "1" ? "right" : ""}
              key={index}
              tabIndex={slugCurrent}
            >
              <DivIMG
                as={Link}
                to={`/projects/${item.node.relationship_to_categoryourwork._meta.uid}/${item.node._meta.uid}`}
              >
                <IMG
                  alt={item.node.ourworkitem_image.alt}
                  src={item.node.ourworkitem_image.url}
                  objectFit="cover"
                  h="206"
                />
                <div className="Shadow"></div>
              </DivIMG>
              <div className="title-img-blog">
                <div className="text-title">
                  <span>{item.node.name_category_of_ourworkitem}</span>
                </div>
                <div className="text-title2">
                  <h3>{item.node.ourworkitem_name.map(item => item.text)}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Other>
      <Interested />
    </Layout>
  )
}

export default OurWorkDetail
