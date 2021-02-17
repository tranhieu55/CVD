import React from 'react'
import styled from 'styled-components'
import IMG from '../../Image'
import { Link } from "gatsby"

export default function Other(arrResult, slugCurrent) {
  return (
    <Container
      data-sal="slide-up"
      data-sal-delay="5000"
      data-sal-easing="ease"
      data-sal-duration="1000"
    >
      <div className="title-other">
        <h1 className="text-other">Other case studies</h1>
      </div>
      <div className="row">
        {arrResult.arrResult.map((item, index) => (
          <div
            className="list-image-other"
            key={index}
            tabIndex={slugCurrent}
          >
            <DivIMG
              as={Link}
              to={`/projects/${item.node.relationship_to_project_category._meta.uid}/${item.node._meta.uid}`}
            >
              <IMG
                alt={item.node.project_header_image.alt}
                src={item.node.project_header_image.url}
                objectFit="cover"
                h="500"
              />
              <div className="Shadow"></div>
            </DivIMG>
            <div className="title-img-blog">
              <div className="text-title">
                <span>{item.node.name_category_of_project}</span>
              </div>
              <div className="text-title2">
                <h3>{item.node.project_name.map(item => item.text)}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="tech-slideshow">
        {arrResult.arrResult.map((item, index) => (
          <div
            className={`${index}` === "1" ? "right" : ""}
            key={index}
            tabIndex={slugCurrent}
          >
            <DivIMG
              as={Link}
              to={`/projects/${item.node.relationship_to_project_category._meta.uid}/${item.node._meta.uid}`}
            >
              <IMG
                alt={item.node.project_header_image.alt}
                src={item.node.project_header_image.url}
                objectFit="cover"
                h="206"
              />
              <div className="Shadow"></div>
            </DivIMG>
            <div className="title-img-blog">
              <div className="text-title">
                <span>{item.node.name_category_of_project}</span>
              </div>
              <div className="text-title2">
                <h3>{item.node.project_name.map(item => item.text)}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}
const Container = styled.div`
  max-width: 1240px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 85px;
  margin-bottom: 96px;
  .title-other {
    padding: env(safe-area-inset-top) env(safe-area-inset-right)
      env(safe-area-inset-bottom) env(safe-area-inset-left);
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
        max-width: 494px;
        .title-img-blog {
          left: 42px;
        }
      }
    }
  }
  @media (min-width: 1400px) {
    max-width: 1151px;
    max-width: 557px;
    .row {
      .list-image-other {
        max-height: 433px;
        max-width: 494px;
        .title-img-blog {
          left: 42px;
        }
      }
    }
  }
  @media (min-width: 1600px) {
    max-width: 1240px;
    .row {
      .list-image-other {
        max-height: 433px;
        max-width: 604px;
        .title-img-blog {
          left: 42px;
        }
      }
    }
  }
  @media (min-width: 1800px) {
    max-width: 1380px;
    .row {
      .list-image-other {
        max-height: 433px;
        max-width: 674px;
        .title-img-blog {
          left: 42px;
        }
      }
    }
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