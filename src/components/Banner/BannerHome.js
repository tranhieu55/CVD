import React from "react"
import styled from "styled-components"
import Image05 from "../../images/bannerHomeimg.png"
import { theme } from "../../utils/theme"
import ButtonCustom from "../ButtonCustom"

const BannerStyle = styled.div`
  width: 100%;
  background-color: ${theme.colors.secondaryColor};
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);

  height: 100vh;
  color: white;
  display: flex;
  align-items: center;
  /* font-family: "Calibre Regular"; */
  h1 {
    font-family: "Calibre Regular Italic";
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
  @media only screen and (max-width: 600px) {
    h1 {
      padding-top: 20px;
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
    img {
      height: 200px;
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    h1 {
      padding-top: 0px;
      font-size: 36px;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    h1 {
      padding-top: 0px;
      font-size: 30px;
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    h1 {
      padding-top: 80px;
      font-weight: 600;
      font-size: 64px;
    }
  }
  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    h1 {
      padding-top: 40px;
      font-size: 64px;
      font-weight: 900;
    }
  }
`
function BannerHome() {
  return (
    <BannerStyle className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1>Lest's build your next web experience.</h1>
            <div className="box-button">
              <ButtonCustom
                fz="18"
                wt="184"
                ht="48"
                lineh="48"
                mr="30"
                mb="20"
                bgColor={theme.colors.primaryColor}
              >
                Get in touch{""}
              </ButtonCustom>
              <ButtonCustom
                wt="184"
                ht="48"
                fz="18"
                lineh="48"
                textColor={theme.colors.white}
                bgColor={theme.colors.secondaryColor}
              >
                View projects
              </ButtonCustom>
            </div>
          </div>
          <div className="col-md-4">
            <img alt="a" className="img-fluid" src={Image05} />
          </div>
        </div>
      </div>
    </BannerStyle>
  )
}

export default BannerHome
