import React from "react"
import styled from "styled-components"
import { theme } from "../../utils/theme"
import IMG from "../Image"

const BannerStyle = styled.div`
  width: 100%;
  background-color: ${theme.colors.secondaryColor};
  height: 100vh;
  color: white;
  display: flex;
  align-items: center;
  .Shadow {
    height: 100%;
    width: 100%;
    opacity: 0.4;
    position: absolute;
  }
  .title-banner {
    position: absolute;
    width: 70vw;
    padding: 250px;
    padding-top: 400px;
    h4 {
      text-transform: uppercase;
      letter-spacing: 6px;
    }
  }
  .img-fluid {
    max-width: 100%;
    height: 100vh;
    width: 100vw;
    object-fit: cover;
  }
  h1 {
    padding-top: 80px;
    font-weight: bold;
    font-size: 150px;
  }
  .col-md-8 {
    padding-top: 80px;
  }
  .col-md-4 {
    padding-top: 80px;
  }
  .box-button {
    margin-top: 40px;
  }

  /* Reponsive */
  /* Extra small devices (phones, 600px and down) */
  @media (max-width: 992px) {
    max-height: 400px;
    .image-banner {
      max-height: 400px;
      .img-fluid {
        max-height: 400px;
      }
    }
    .title-banner {
      width: 95vw;
      padding: 320px 60px 250px;
      img {
        margin-top: 20px;
      }
      .text-banner {
        h1 {
          padding-top: 54px;
        }
      }
    }
  }
  @media only screen and (max-width: 600px) {
    height: 400px;
    margin-bottom:24px;
    .Shadow {
      height: 100%;
      width: 100%;
      opacity: 0.4;
      position: absolute;
    }
    h1 {
      padding-top: 40px;
      font-size: 36px;
    }
    .col-md-4 {
      padding-top: 20px;
    }
    .col-md-8 {
      padding-top: 40px;
      padding-left: 0px;
      padding-right: 0px;
    }
    .image-banner {
      height: 400px;
      .img-fluid {
        height: 100% !important;
        object-fit: cover;
      }
    }
    .title-banner {
      padding-left: 24px;
      padding-top: 446px;
      padding-right: 0px;
      img {
        margin-top: 12px;
      }
      p {
        font-size: 18px;
        font-family: "Calibre Semibold";
        margin-bottom: 0px;
        line-height: 20px;
      }
      h1 {
        font-size: 32px;
        font-family: "Calibre Bold";
        letter-spacing: -0.5px;
        padding-top: 54px;
        margin-bottom: 0px;
        line-height: 34px;
      }
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 601px) {
    margin-bottom:30px;
    h1 {
      padding-top: 0px;
      font-size: 36px;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    /* height: 346px; */
    margin-bottom:50px;
    .img-fluid {
      object-fit: cover;
      height: 346px;
    }
    h1 {
      padding-top: 0px;
      font-size: 50px;
    }
    .title-banner {
      margin: 43px 80px 0px;
      padding: 0px;
      width: 70%;
      img {
        margin-top: 16px;
      }
    }
    .text-banner {
      margin-top: 0px;
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    .text-banner {
      margin-top: 80px;
    }
    h1 {
      font-weight: 600;
      font-size: 64px;
    }
  }
  @media (min-width: 1024px) {
    height: 446px;
    margin-bottom:50px;
    .img-fluid {
      height: 446px;
    }
    .title-banner {
      margin: 57px 40px 0px;
      padding: 0px;
      padding-top: 0px;
    }
  }
  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    height: 664px;
    margin-bottom:96px;
    .image-banner {
      height: 664px;
      .img-fluid {
        height: 100%;
      }
    }
    h1 {
      font-size: 64px;
      font-weight: 900;
    }
    .title-banner {
      width: 60%;
      margin-left: 17%;
      margin-top: 7%;
      padding: 0%;
      img {
        margin-top: 13px;
      }
      p {
        font-size: 18px;
        font-family: "Calibre Semibold";
        font-size: 18px;
        margin-bottom: 16px;
        line-height: 22px;
        font-weight: 600;
      }
      .text-banner {
        width: 606px;
        height: 120px;
        margin-top: 89px;
        h1 {
          font-family: "Calibre Bold";
          font-size: 64px;
          font-weight: bold;
          line-height: 60px;
          margin-bottom: 0px;
        }
      }
    }
  }
  @media only screen and (min-width: 1600px) {
    max-height: 796.8px;
    .title-banner {
      margin-top: 72px;
      max-width: 606px;
      height: 248px;
      margin-left: 286px;
    }
    .image-banner {
      max-height: 796.8px;
      .img-fluid {
        max-height: 100%;
        object-fit: cover;
      }
    }
  }
`
function BannerCaseStudy({
  nameProject,
  logoProject,
  nameCategoryOfWorkItem,
  backgroundWorkItemSrc,
  backgroundWorkItemAlt,
}) {
  console.log(nameProject)
  return (
    <BannerStyle className="container-study">
      <div className="image-banner">
        <img
          alt="a"
          className="img-fluid"
          src={backgroundWorkItemSrc}
          alt={backgroundWorkItemAlt}
        ></img>
      </div>
      <div className="Shadow"></div>
      <div className="title-banner">
        <div style={{ height: "19px" }}>
          <p style={{ color: "#fecf09" }}>{nameCategoryOfWorkItem}</p>
        </div>
        <IMG
          src={logoProject.url}
          w={logoProject.dimensions.width}
          h={logoProject.dimensions.height}
        />
        <div className="text-banner">
          <h1
            data-sal="slide-up"
            data-sal-delay="4000"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            {nameProject}
          </h1>
        </div>
      </div>
    </BannerStyle>
  )
}

export default BannerCaseStudy
