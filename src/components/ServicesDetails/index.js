import React from "react"
import styled from "styled-components"
import H2 from "../H2"
import H3 from "../H3"
import P from "../Typography"

const BoxService = styled.div`
  .container {
    max-width: 1240px !important;
  }
`
const ServiceStyle = styled.div`
  padding: 88px 0px;
  font-family: Calibre Regular;
  font-size: 20px;
  p {
    span {
      display: block;
    }
  }

  /* Reponsive */
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    h2 {
      text-align: center;
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
  }
`

export default function ServicesDetails() {
  return (
    <BoxService
      className="container box-service"
      // data-sal="slide-up"
      // data-sal-delay="2000"
      // data-sal-easing="ease"
      // data-sal-duration='1000'
    >
      <ServiceStyle className="">
        <H2 fz="64" fw="900" fontFamily="Calibre Regular">
          Our Service
        </H2>
        <div className="row">
          <div className="col-sm-6 col-md-3 col-lg-4 col-xl-3">
            <H3>Web Desgin</H3>
            <P fontFamily="Calibre Regular">
              <span>Wireframing</span>
              <span>Hi-Fidelity Design</span>
              <span>Visual eCommerce Audit</span>
              <span>User Experience Report</span>
            </P>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-4 col-xl-3">
            <H3>Web Development</H3>
            <P fontFamily="Calibre Regular">
              <span>Magento Development</span>
              <span>Shopify Development</span>
              <span>BigCommerce Development</span>
            </P>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-4 col-xl-3">
            <H3>Integrations</H3>
            <P fontFamily="Calibre Regular">
              <span>Marketing</span>
              <span>Inventory</span>
              <span>Loyalty</span>
              <span>Subscriptions</span>
            </P>
          </div>

          <div className="col-sm-6 col-md-3 col-lg-4 col-xl-3">
            <H3>Web Migrations</H3>
            <P fontFamily="Calibre Regular">
              <span>Magento 1 to Magento 2</span>
              <span>Item 2</span>
              <span>Item 3</span>
              <span>Item 4</span>
            </P>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-4 col-xl-3">
            <H3>Conversion Rate Optimisation (CRO)</H3>
            <P fontFamily="Calibre Regular">
              <span>A/B Testing</span>
              <span>Usability Audit</span>
              <span>eCommenrce Data Report</span>
              <span>User Testing</span>
            </P>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-4 col-xl-3">
            <H3>Partnerships</H3>
            <P fontFamily="Calibre Regular">
              <span>Shopitfy Expert</span>
              <span>BigCommerce Elite Partner</span>
              <span>Marketing Automation</span>
              <span>Loyalty</span>
            </P>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-4 col-xl-3">
            <H3>Client Success</H3>
            <P fontFamily="Calibre Regular">
              <span>eCommenrce Strategy</span>
              <span>Roadmapping</span>
              <span>Workshops</span>
              <span>Website Support</span>
            </P>
          </div>
        </div>
      </ServiceStyle>
    </BoxService>
  )
}
