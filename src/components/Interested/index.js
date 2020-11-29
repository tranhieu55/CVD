import React, { useState } from "react"
import { Form, Modal } from "react-bootstrap"
import styled from "styled-components"
import { theme } from "../../utils/theme"
import ButtonCustom from "../ButtonCustom"
import H2 from "../H2"
import P from "../Typography"

const InterestedStyle = styled.div`
  clip-path: polygon(0 15%,100% 0,100% 100%,0% 100%);
  background-color: #101010;
  width: 100%;
  color: white;
  margin: -2px auto;
  .button-header{
    .get-in-touch{
      height: 20px;
    width: 99px;
    color: #FFFFFF;
    font-family: 'Calibre Semibold';
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 24px;
    text-align: center;
  }
  }
  h2 {
    font-size: 64px;
    font-weight: bold;
    margin-bottom:0px;
    max-width:500px;
    margin:auto;
  }
  p {
    /* font-size: 24px; */
    letter-spacing: 0px;
    margin-bottom: 32px;
  }
  .boxInterested {
    padding-top: 162px;
    padding-bottom: 108px;
    max-width:700px;
    margin:auto;
    text-align:center;
  }
  .box-btn {
    position: relative;
  }
  .my-btn-back:hover::before {
    transform: translate(270px);
    opacity: 0.5;
    overflow: hidden;
}
  .my-btn::before{
    background-color: white;
    content: "";
    height: 155px;
    left: -75px;
    opacity: 0.7;
    position: absolute;
    top: -50px;
    -webkit-transform: rotate(60deg);
    transform: rotate(35deg);
    transition: all 0.2s ease;
    width: 50px;
    z-index: 1;
  }
  

  
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    clip-path: polygon(0 8%, 100% 0%, 100% 100%, 0% 100%);
    h2 {
      font-size: 32px;
      max-width:250px;
      margin:auto;
      line-height: 33px;
    }
    p {
      padding: 5px 24px;
      margin-bottom: 11px;
      font-size: 20px;
      line-height: 24px;
    }
    .boxInterested {
      padding-top: 73px;
      padding-bottom: 48px;
    }
   
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    h2 {
      font-size: 40px;
      max-width:320px;
      margin:auto;
    }
    p {
      font-size: 20px;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    h2 {
      font-size: 40px;
      max-width:325px;
      margin:auto;
    }
    p {
      margin-top:20px;
      font-size: 24px;
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    h2 {
      font-size: 64px;
      max-width:500px;
      margin:auto;
    }
    p {
      font-size: 24px;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    h2 {
      font-size: 64px;
      max-width:500px;
      margin:auto;
      font-family: 'Calibre Bold';
      color: #FFFFFF;
      font-weight: bold;
      line-height: 54px;
    }
    p {
      font-size: 24px;
      margin-top:6px;
      color: #FFFFFF;
      margin-bottom: 28px;
    }
    .boxInterested {
    padding-top: 173px;
    padding-bottom: 108px;
  }
  }


`

const BoxModal = styled.div`
  h2 {
    font-weight: bold;
  }
  .btn-w {
    color: gold;
  }
`

export default function Interested(props) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <InterestedStyle>
      <div className='boxInterested'>
        <H2 lett='-1' fz="64" lineh='54' fontFamily="Calibre Bold">
          Interested in working with us?
      </H2>
        <P lineh='30' fontFamily="Calibre Regular" mrb="30">Send us a message and we'll get back to you as soon as possible</P>
        <div className=''>
          <ButtonCustom className='my-btn-back my-btn button-header'
            bgColor={theme.colors.black}
            textColor={theme.colors.white}
            variant="primary"
            onClick={handleShow}
            fz='20'
            fw='600'
            wt='166'
            lineh='24'
            ht='56'
            wspace="nowrap"

          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <h2 className='get-in-touch'>Get in touch</h2>
          </ButtonCustom>
        </div>
        <BoxModal>
          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>
                <H2>Get in touch</H2>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
              </Form.Group>
              <ButtonCustom
                className='my-btn-back my-btn button-header'
                bgColor={theme.colors.primaryColor}
                textColor={theme.colors.black}
                variant="primary"
                onClick={handleShow}
                fontFamily="Calibre Regular"
                pd1="15"
                pd2="30.5"
                fz='20'
              // lineh='56'
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <h2 className='get-in-touch'>Get in touch</h2>
              </ButtonCustom>
            </Modal.Body>
          </Modal>
        </BoxModal>
      </div>
    </InterestedStyle>
  )
}
