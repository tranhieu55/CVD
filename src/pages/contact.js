import React from 'react';
import { Form } from "react-bootstrap"
import styled from "styled-components"
import ImageMaps from "../images/maps.png";
import IMG from "../components/Image/index";
import H2 from "../components/bits/H2"
import P from "../components/bits/Typography/index";

import ButtonCustom from "../components/ButtonCustom/index";
import { theme } from "../utils/theme"
import "bootstrap/dist/css/bootstrap.min.css"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faPhone
// } from '@fortawesome/free-solid-svg-icons';
import Layout from '../components/Layout';


export default function Index() {
  const Index = styled.div`
    position: relative;
    z-index: 1;
    .container-fluid {
      color: white;
      background-color: #101010;
      clip-path: polygon(0 0, 100% 0%, 100% 90%, 0% 100%);
    }

    z-index: 1;
    .my-form {
      padding: 30px;
      z-index: 11111;
      position: absolute;
      top: 100px;
      right: 200px;
      background-color: white;
      box-shadow: 1px 2px 20px rgba(0, 0, 0, 0.3);
    }
    h2 {
      font-size: 60px;
      font-weight: 900;
    }
    P {
      font-size: 20px;
    }
    .btn-color {
      background-color: gold;
      color: black;
    }
    p {
      font-size: 18px;
    }
    .box-content-maps {
      display: flex;
      justify-content: space-between;
      padding-top: 20px;
    }
    h4 {
      font-size: 22px;
      font-weight: bold;
    }
    u {
      padding-right: 20px;
      color: gray;
    }
    .container {
        padding-top:100px;
        padding-bottom:100px;
    }
    .reponsive-moblie {
        margin-bottom:30px;
    }
    /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
   .my-form {
    padding: 30px;
      position: static;
      top: 0;
      right: 0;
   }
   .box-content-maps {
      flex-direction:column;
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    .my-form {
    padding: 30px;
      position: static;
      top: 0;
      right: 0;
   }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    .my-form {
      position: absolute;
      top: 100px;
      right: 30px;
      box-shadow: 1px 2px 20px rgba(0, 0, 0, 0.3);
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    .my-form {
      position: absolute;
      top: 100px;
      right: 30px;
      box-shadow: 1px 2px 20px rgba(0, 0, 0, 0.3);
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    .my-form {
      right: 200px;
    }
  }
  `
  const DivIMG = styled.div`
  overflow:hidden;
  `
  return (
    <Layout location="/contact">
    <Index>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Get in touch</h2>
              <P>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                            </P>
              <ButtonCustom
                bgColor={theme.colors.black}
                textColor={theme.colors.white}
                mt="30"
                mr="30"
              >
                Live chat
                            </ButtonCustom>
              <span>
                {/* <FontAwesomeIcon icon={faPhone} /> */}
                                (03)90703463
                            </span>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
      <div className="col-md-4 my-form">
        <Form.Group>
          <Form.Control size="lg" type="text" placeholder="Name*" />
          <br />
          <Form.Control size="lg" type="email" placeholder="Email*" />
          <br />
          <Form.Control size="lg" type="text" placeholder="Large text" />
          <br />
          <Form.Control size="lg" type="text" placeholder="Company" />
          <br />
          <Form.Control
            size="lg"
            type="text"
            placeholder="Current Website URL"
          />
          <br />
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="4"
            placeholder="Message/Requirement"
          />
          <br />
          <ButtonCustom className="btn-color">Submit</ButtonCustom>
        </Form.Group>
      </div>
      <div className="container">
        <H2>Offices</H2>
        <div className="row">
          <div className="col-md-6">
            <hr />
            <div className="box-content-maps">
              <div className='reponsive-moblie'>
                <h4>Melboune</h4>
                <p>
                  Level 2, 58-62 Rupert St <br />
                                    Collingwood VIC 3066
                                    <br />
                                    Australia <br />
                                    (03) 9070 3463
                                    <br />
                </p>
                <u>Call</u>
                <u>Directions</u>
              </div>
              <DivIMG>
                <IMG className="img-fluid" w="220" h="180" src={ImageMaps} />
              </DivIMG>
            </div>
            <div className="box-content-maps">
              <div className='reponsive-moblie'>
                <h4>Melboune</h4>
                <p>
                  Level 2, 58-62 Rupert St <br />
                  Collingwood VIC 3066
                  <br />
                  Australia <br />
                  (03) 9070 3463
                  <br />
                </p>
                <u>Call</u>
                <u>Directions</u>
              </div>
              <DivIMG>
                <IMG className="img-fluid" w="220" h="180" src={ImageMaps} />
              </DivIMG>
            </div>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </Index>
    </Layout>
  )
}
