import React from "react"
import styled from "styled-components"

const IntagramStyle = styled.div`
  h2 {
    font-weight: 900;
    font-size: 40px;
    padding: 10px 0px;
  }
  .border-bottom {
    display: inline-block;
    width: 50px;

    border-bottom: 3px solid gold !important;
  }
  .tag {
    color: gray;
    padding-left: 20px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 1px;
  }
  .carousel-inner {
    display: flex;
  }
  .card {
    width: 100%;
    height: 200px;
    background-color: #cccccc;
    color: black;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .carousel-indicators {
    display: none;
  }
  img {
    margin-top: 30px;
    width: 100%;
    /* height: 360px; */
    object-fit: none;
  }

  /* Reponsive */
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    h2 {
      font-size: 30px;
      padding-bottom: 0px;
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

export default function Instagram() {
  return (
    <IntagramStyle
      className="container-fluid"
      data-sal="slide-up"
      data-sal-delay="2000"
      data-sal-easing="ease"
      data-sal-duration="1000"
    >
      <div>
        <span className="border-bottom"></span>
        <span className="tag">#Creaftedbyconvert</span>
        <h2>Latest from Instagram</h2>
      </div>
      <div className="row">
        <div className="col-sm-6 col-md-3 col-lg-6 col-xl-3">
          <img
            alt=""
            className="img-fluid"
            src="https://images.unsplash.com/photo-1602302347331-d03360fc5f2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          />
        </div>
        <div className="col-sm-6 col-md-3 col-lg-6 col-xl-3">
          <img
            alt=""
            className="img-fluid"
            src="https://images.unsplash.com/photo-1602171037999-32d8a6b227f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          />
        </div>
        <div className="col-sm-6 col-md-3 col-lg-6  col-xl-3">
          <img
            alt=""
            className="img-fluid"
            src="https://images.unsplash.com/photo-1602416994306-77246a12d3c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          />
        </div>
        <div className="col-sm-6 col-md-3 col-lg-6 col-xl-3">
          <img
            alt=""
            className="img-fluid"
            src="https://images.unsplash.com/photo-1602197165411-bcf986d773f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          />
        </div>
      </div>
    </IntagramStyle>
  )
}
