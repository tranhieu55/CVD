import React from "react"
import styled from "styled-components"
import Card from "../Card"
import H2 from "../H2"
import P from "../Typography"

const LatestInsightsStyle = styled.div`
  h2 {
    font-size: 60px;
    font-weight: bold;
  }
  h4 {
    font-weight: bold;
  }
  .col-md-6 {
    margin-top: 35px;
  }
  .box-title {
    text-align: center;
    margin-top: 80px;
  }
  /* Reposive  */
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    h2 {
      font-size: 36px;
    }
    h4 {
      font-size: 20px;
    }
    p {
      font-size: 16px;
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    h2 {
      font-size: 30px;
    }
    h4 {
      font-size: 18px;
    }
    p {
      font-size: 16px;
    }
  }
  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    h2 {
      font-size: 36px;
    }
    h4 {
      font-size: 20px;
    }
    p {
      font-size: 18px;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    h2 {
      font-size: 40px;
      font-weight: bold;
    }
    h4 {
      font-weight: bold;
    }
    p {
      font-size: 18px;
    }
  }
`

export default function LatestInsights() {
  return (
    <LatestInsightsStyle
      className="container"
      data-sal="slide-up"
      data-sal-delay="2000"
      data-sal-easing="ease"
      data-sal-duration="1000"
    >
      <div className="row">
        <div className="col-md box-title">
          <H2 pdt="80">Out Latest insights</H2>

          <P>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </P>
        </div>
      </div>
      <div className="row">
        <Card />
      </div>
    </LatestInsightsStyle>
  )
}
