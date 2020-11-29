import React from "react"
import styled from "styled-components"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons"

const HappyStyle = styled.div`
  background-color: #f8f8f8;
  padding: 80px 0px;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
  h2 {
    text-align: center;
    font-size: 60px;
    font-weight: bold;
  }
  .t {
    display: flex;
  }
  .cygnett {
    color: #f2530f;
    text-shadow: 1px 0.5px;
    letter-spacing: 3px;
    font-size: 32px;
  }
  .title-happy {
    margin-top: 40px;
  }
  .bottom-active {
    width: 465px;
    border-bottom: 5px solid #bbbbbb;
    display: inline-block;
    border-radius: 10px;
  }
  .bottom-active-opacity {
    width: 175px;
    border-bottom: 5px solid #eeeeee;
    display: inline-block;
    border-radius: 10px;
  }
  .col-md-4 {
    margin-top: 40px;
    p {
      color: #222222;
    }
  }
  .box-next {
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
  }
  .icon-arrrow {
    text-align: right;
    display: inline;
    i {
      padding-left: 30px;
      color: gray;
      size: 30px;
      cursor: pointer;
    }
  }
  .grainneday {
    font-weight: bold;
  }
  /* Reposive  */
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    h2 {
      font-size: 36px;
    }
    h3 {
      font-size: 20px;
    }
    .cygnett {
      font-size: 20px;
    }
    p {
      font-size: 16px;
    }
    .bottom-active {
      width: 200px;
      border-bottom: 5px solid #bbbbbb;
      display: inline-block;
      border-radius: 10px;
    }
    .bottom-active-opacity {
      width: 50px;
      border-bottom: 5px solid #eeeeee;
      display: inline-block;
      border-radius: 10px;
    }
    .box-next {
      margin-top: 50px;
      display: initial;
      text-align: center;
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    h2 {
      font-size: 30px;
    }
    h3 {
      font-size: 20px;
    }
    .cygnett {
      font-size: 18px;
    }
    p {
      font-size: 16px;
    }
    .bottom-active {
      width: 250px;
    }
    .bottom-active-opacity {
      width: 50px;
    }
    .box-next {
      margin-top: 50px;
      display: initial;
      text-align: center;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    .box-next {
      margin-top: 50px;
      display: flex;
      justify-content: space-around;
    }
  }
  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    .box-next {
      margin-top: 50px;
      display: flex;
      justify-content: space-around;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    h2 {
      font-size: 40px;
    }
    h3 {
      font-size: 30px;
    }
    .cygnett {
      font-size: 20px;
    }
    p {
      font-size: 16px;
    }
  }
`
export default function HappyClient() {
  return (
    <HappyStyle className="container-fluid">
      <div
        className="container"
        data-sal="slide-up"
        data-sal-delay="2000"
        data-sal-easing="ease"
        data-sal-duration="1000"
      >
        <h2>Happy clients , happy life.</h2>
        <div className="row">
          <div className="col-md-4">
            <h3 className="cygnett">CYGNETT</h3>
            <p>
              "By gaining a thorough understanding of your requirements first,
              we place our technical experts alongside our Design and UX
              specialists to collectively engineer solutions that champion both
              function and form. When it comes to eCommerce development we
              foster an environment of innovation where nothing is impossible."
            </p>
            <span className="grainneday">Grainne Day</span> <br />
            <span>Owner , Cygnett</span>
          </div>
          <div className="col-md-4">
            <h3>Réalisation</h3>
            <p>
              "By gaining a thorough understanding of your requirements first,
              we place our technical experts alongside our Design and UX
              specialists to collectively engineer solutions that champion both
              function and form. When it comes to eCommerce development we
              foster an environment of innovation where nothing is impossible."
            </p>
            <span className="grainneday">Grainne Day</span> <br />
            <span>Owner , Cygnett</span>
          </div>
          <div className="col-md-4">
            <h3>Réalisation</h3>
            <p>
              "By gaining a thorough understanding of your requirements first,
              we place our technical experts alongside our Design and UX
              specialists to collectively engineer solutions that champion both
              function and form. When it comes to eCommerce development we
              foster an environment of innovation where nothing is impossible."
            </p>
            <span className="grainneday">Grainne Day</span> <br />
            <span>Owner , Cygnett</span>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md box-next">
            <div>
              <span className="bottom-active"></span>
              <span className="bottom-active-opacity"></span>
            </div>

            {/* <div className="icon-arrrow">
              <i>
                <FontAwesomeIcon icon={faArrowLeft} />
              </i>
              <i>
                <FontAwesomeIcon icon={faArrowRight} />
              </i>
            </div> */}
          </div>
        </div>
      </div>
    </HappyStyle>
  )
}
