import React from "react"
import styled from "styled-components"
import { theme } from "../../utils/theme"
import ButtonCustom from "../ButtonCustom"
import P from "../Typography"

const WhatwedoStyle = styled.div`
  padding: 150px 0px;
  background-color: #101010;
  h2 {
    font-size: 40px;
    font-weight: 900;
    color: white;
    padding-bottom: 50px;
  }
  p {
    font-size: 18px;
    color: white;
  }
  li {
    color: #8b8b8b;
    padding-left: 10px;
    list-style-type: none;
    font-size: 22px;
    margin-top: 20px;
  }
  .active {
    color: white;
    list-style-type: disc;
  }
  .brg-text {
    border-radius: 62% 38% 67% 33% / 35% 67% 33% 65%;
    background-color: #272727;
  }
  /* reponsive */
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    p {
      margin-top: 30px;
    }
    button {
      width: 100%;
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    p {
      margin-top: 30px;
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
  }
`

export default function Whatwedo() {
  return (
    <WhatwedoStyle className="container-fluid">
      <div
        className="container"
        data-sal="slide-up"
        data-sal-easing="ease"
        data-sal-duration="500"
      >
        <h2>What we do</h2>
        <div
          className="row"
          data-sal="slide-up"
          data-sal-easing="ease"
          data-sal-duration="500"
        >
          <div className="col-md-6">
            <li className="active"> Web development startegy</li>
            <li>Web & user Expreience Design</li>
            <li className="">System Integrations</li>
            <li className="">Web development</li>
            <li className="">Partner Program</li>
          </div>
          <div className="col-md-6 brg-text">
            <P>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s
            </P>
            <br />
            <ButtonCustom
              wt="184"
              ht="48"
              fz="18"
              lineh="48"
              bgColor={theme.colors.transparent}
              textColor={theme.colors.white}
            >
              Learn more
            </ButtonCustom>
          </div>
        </div>
      </div>
    </WhatwedoStyle>
  )
}
