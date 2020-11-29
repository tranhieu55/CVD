import React from "react"
import styled from "styled-components"
import CardFlatform from "../CardFlatform"

const ListTrademarkStyle = styled.div`
  position: relative;
  .container {
    padding-top: 80px;
  }
  h2 {
    font-weight: 900;
    font-size: 36px;
  }
  h4 {
    padding-top: 120px;
    color: gold;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 900;
  }
  .box-border {
    position: relative;
  }
  .border1 {
    border-left: 3px solid gold;
    height: 150px;
  }
  .border-dots {
    position: absolute;
    left: -6px;
    bottom: 0;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: gold;
  }

  .list-trademark {
    display: flex;
    justify-content: space-between;
    img {
      width: 150px;
    }
  }
  .box-img-trandemark {
    display: flex;
  }
  /* reponsive  */
  /* Extra small devices (phones, 600px and down)  */
  @media only screen and (max-width: 600px) {
    .box-img-trandemark {
      display: flex;
      flex-direction: column;
    }
    .border1 {
      height: 290px;
    }
  }

  /*     
      Small
      devices
      (portrait tablets and large phones, 600px and up) */

  @media only screen and (min-width: 600px) {
    .box-img-trandemark {
      display: flex;
      flex-direction: column;
    }
    .border1 {
      height: 290px;
    }
  }
  /* 
    
      Medium
      devices
      (landscape tablets, 768px and up)
       */
  @media only screen and (min-width: 768px) {
    .box-img-trandemark {
      display: flex;
      flex-direction: column;
    }
    .border1 {
      height: 290px;
    }
  }

  /* Large
      devices
      (laptops/desktops, 992px and up) */

  @media only screen and (min-width: 992px) {
    .box-img-trandemark {
      display: flex;
      flex-direction: row;
    }
    .border1 {
      height: 150px;
    }
  }

  /* Extra
      large
      devices
      (large laptops and desktops, 1200px and up)
       */
  @media only screen and (min-width: 1200px) {
    .box-img-trandemark {
      display: flex;
      flex-direction: row;
    }
    .border1 {
      height: 150px;
    }
  }
`
const Content = styled.div`
  padding: 200px 0px;
  background-color: #f8f8f8;
  clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 100%);
  h2 {
    font-weight: 900;
    font-size: 60px;
  }
  p {
    padding-top: 20px;
    font-size: 20px;
  }
  .btn-learn-more {
    background-color: transparent;
    color: black;
  }
  .btn-learn-more:hover {
    background-color: gold;
    color: white;
  }
  .col-md-4 {
    margin-top: 50px;
    p {
      font-size: 16px;
    }
  }
  @media only screen and (max-width: 600px) {
    h2 {
      font-size: 36px;
    }
    p {
      font-size: 16px;
    }
  }
  @media only screen and (min-width: 600px) {
    h2 {
      font-size: 36px;
    }
    p {
      font-size: 18px;
    }
  }
  @media only screen and (min-width: 768px) {
    img {
      width: 200px;
    }
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`

export default function ListTrademark() {
  return (
    <>
      <ListTrademarkStyle className="container-fluid">
        <div
          className="container"
          data-sal="slide-up"
          data-sal-delay="2000"
          data-sal-easing="ease"
          data-sal-duration="1000"
        >
          <h2 className="text-center">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum
          </h2>
          <div className="text-center">
            <h4>we love our clients</h4>
          </div>
          <div className="list-trademark">
            <div className="box-img-trandemark">
              <div>
                <img
                  alt=""
                  src="https://www.convertdigital.com.au/wp-content/uploads/2018/04/puma.png"
                />
              </div>
              <div>
                <img
                  alt=""
                  src="https://www.convertdigital.com.au/wp-content/uploads/2018/04/puma.png"
                />
              </div>
              <div>
                <img
                  alt=""
                  src="https://www.convertdigital.com.au/wp-content/uploads/2018/04/puma.png"
                />
              </div>
            </div>

            <div className="box-border">
              <div className="border1">
                <div className="border-dots"></div>
              </div>
            </div>
            <div className="box-img-trandemark">
              <div>
                <img
                  alt=""
                  src="https://www.convertdigital.com.au/wp-content/uploads/2018/04/puma.png"
                />
              </div>
              <div>
                <img
                  alt=""
                  src="https://www.convertdigital.com.au/wp-content/uploads/2018/04/puma.png"
                />
              </div>
              <div>
                <img
                  alt=""
                  src="https://www.convertdigital.com.au/wp-content/uploads/2018/04/puma.png"
                />
              </div>
            </div>
          </div>
        </div>
      </ListTrademarkStyle>
      <Content className="container-fluid">
        <div className="container">
          <div className="text-center">
            <h2>Which platform solution is best for your business?</h2>
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages
            </p>
            <p>Which platform solution is best for your business?</p>
          </div>
          <div className="row">
            <CardFlatform />
          </div>
        </div>
      </Content>
    </>
  )
}
