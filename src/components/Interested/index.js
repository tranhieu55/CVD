import React, { useState } from "react"
import styled from "styled-components"
import P from "../../components/bits/Typography"
import ButtonCustom from "../ButtonCustom"
import { theme } from "../../utils/theme"
import Modal from "../ModalContact/index"

const InterestedStyle = styled.div`
  clip-path: polygon(0px 16%, 101% 2px, 100% 100%, 0% 100%);
  background-color: ${({ dataBGR }) => dataBGR};
  width: 100%;
  color: white;
  margin: -2px auto;
  position: relative;
  .modals {
    @media (min-width: 768px) {
      height: 100%;
      width: 605px;
      border-radius: 5px;
      background-color: #ffffff;
      box-shadow: 8px 8px 30px 0 rgba(0, 0, 0, 0.07);
      margin: auto;
    }
  }
  .button-header {
    .get-in-touch {
      height: 20px;
      color: #ffffff;
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
    margin-bottom: 0px;
    max-width: 500px;
    margin: auto;
    font-family: "Calibre Semibold";
  }
  p {
    /* font-size: 24px; */
    letter-spacing: 0px;
    margin-bottom: 32px;
  }
  .box-btn {
    position: relative;
  }
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    clip-path: polygon(0 8%, 100% 0%, 100% 100%, 0% 100%);
    h2 {
      font-size: 32px;
      max-width: 260px;
      margin: auto;
      line-height: 33px;
      font-family: "Calibre Semibold";
      letter-spacing: -0.5px;
    }
    p {
      padding: 5px 24px;
      margin-bottom: 10px;
      font-size: 20px;
      line-height: 24px;
    }
  }
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    h2 {
      font-size: 40px;
      max-width: 320px;
      margin: auto;
      font-family: "Calibre Semibold";
    }
    p {
      font-size: 20px;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    h2 {
      font-size: 40px;
      max-width: 325px;
      margin: auto;
      font-family: "Calibre Semibold";
    }
    p {
      margin-top: 20px;
      font-size: 24px;
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    h2 {
      font-size: 64px;
      max-width: 500px;
      margin: auto;
      font-family: "Calibre Semibold";
    }
    p {
      font-size: 24px;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    h2 {
      font-size: 64px;
      max-width: 500px;
      margin: auto;
      font-family: "Calibre Semibold";
      color: #ffffff;
      font-weight: bold;
      line-height: 54px;
      letter-spacing: -1px;
    }
    p {
      font-size: 24px;
      margin-top: 6px;
      color: #ffffff;
      margin-bottom: 28px;
    }
  }
`
const BoxInterested = styled.div`
  padding-top: 175px;
  padding-bottom: 108px;
  max-width: 700px;
  margin: auto;
  text-align: center;
  @media only screen and (max-width: 600px) {
    padding-top: 69px;
    padding-bottom: 48px;
  }
  @media only screen and (min-width: 1200px) {
    padding-top: 187px;
    padding-bottom: 108px;
  }
  @media (min-width: 1600px) {
    padding-top: 175px;
    padding-bottom: 108px;
  }
`
const BoxBtn = styled.div`
  button:hover {
    .get-in-touch {
      color: #101010; // task CDNS-102: hover state button name should NOT change to white when hovering
    }
  }
`
const H2 = styled.h2``
export default function Interested({ dataFooter }) {
  const dataBTG = dataFooter
    ? dataFooter.edges[0]?.node?.body?.filter(item =>
        item?.type ? item?.type === "cta" : ""
      )
    : []
  const dataBGR = dataBTG[0]
    ? dataBTG[0]?.primary?.background_color_cta_block
    : []
  const dataInterested = dataBTG[0]?.primary?.subtitle[0]?.text
    ? dataBTG[0]?.primary?.subtitle[0]?.text
    : ""
  const dataInterestedTitle = dataBTG[0]?.primary?.title[0]?.text
    ? dataBTG[0]?.primary?.title[0]?.text
    : ""

  const [showModal, setShowModal] = useState(false)
  const openModal = () => {
    setShowModal(prev => !prev)
  }
  return (
    <>
      <InterestedStyle dataBGR={dataBGR ? dataBGR : ""}>
        <BoxInterested>
          <H2 lett="-1" fz="64" lineh="54" fontFamily="Calibre">
            {dataInterestedTitle ? dataInterestedTitle : ""}
          </H2>
          <P lineh="30" fontFamily="Calibre Regular" mrb="30">
            {dataInterested ? dataInterested : ""}
          </P>
          <BoxBtn>
            <ButtonCustom
              variant="primary"
              onClick={openModal}
              className="my-btn-back  my-btn button-header w3-button w3-black"
              bgColor={theme.colors.transparent}
              textColor={theme.colors.white}
              variant="primary"
              fz="20"
              wt="166"
              pd1="16"
              pd2="31.5"
              lineh="24"
              Block={true}
              margin="auto"
            >
              <H2 className="get-in-touch">Get in touch</H2>
            </ButtonCustom>
          </BoxBtn>
        </BoxInterested>
      </InterestedStyle>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        openModal={openModal}
      />
    </>
  )
}
