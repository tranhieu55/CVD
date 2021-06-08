import React, { useState } from "react"
import styled from "styled-components"
import ModalVideo from "../ModalVideo/index"
import Modal from "../ModalContact/index"

export default function BannerHomepage(data) {
  const [showModal, setShowModal] = useState(false)
  const openModal = () => {
    setShowModal(prev => !prev)
  }
  const [showModal01, setShowModal01] = useState(false)
  const openModal01 = () => {
    setShowModal01(prev => !prev)
  }
  const background_image_desktop =
    data && data.data?.background_image?.desktop?.url
      ? data.data?.background_image?.desktop?.url
      : ""
  const background_image_mobile =
    data && data.data?.background_image?.mobile?.url
      ? data.data?.background_image?.mobile?.url
      : ""
  return (
    <Container>
      <ImageBannerDK src={background_image_desktop}></ImageBannerDK>
      <ImageBannerMB src={background_image_mobile}></ImageBannerMB>
      <TextBanner>
        <Title>{data && data.data?.page_title[0]?.text}</Title>
        <Buttons>
          {data &&
            data.data?.body[1]?.fields?.map((item, index) => {
              return (
                <ButtonBanner
                  key={index}
                  vitri={index}
                  onClick={index === 1 ? openModal : openModal01}
                >
                  {item.text_button[0]?.text}
                </ButtonBanner>
              )
            })}
        </Buttons>
      </TextBanner>
      <ModalVideo
        showModal={showModal}
        setShowModal={setShowModal}
        openModal={openModal}
        dataVideo={data.data?.body[0]}
      />
      <Modal
        showModal={showModal01}
        setShowModal={setShowModal01}
        openModal={openModal01}
      />
    </Container>
  )
}

const Title = styled.h1`
  height: 275px;
  width: 659px;
  color: #ffffff;
  font-family: Calibre Bold;
  font-size: 104px;
  font-weight: bold;
  letter-spacing: -0.5px;
  line-height: 88px;
  @media (min-width: 600px) {
    height: auto;
    width: 100%;
    color: #ffffff;
    font-family: Calibre Bold;
    font-size: 48px;
    font-weight: bold;
    letter-spacing: -0.5px;
    line-height: 44px;
    padding-top: 24px;
  }
  @media (min-width: 768px) {
    font-size: 52px;
  }
  @media (max-width: 600px) {
    height: auto;
    width: 301px;
    color: #ffffff;
    font-family: Calibre Bold;
    font-size: 49px;
    font-weight: bold;
    letter-spacing: -0.5px;
    line-height: 44px;
    padding-top: 11px;
  }
  @media (max-width: 360px) {
    width: 100%;
    font-size: 43px;
  }
  @media (min-width: 1024px) {
    font-size: 66px;
    height: auto;
    width: 419px;
    line-height: 57px;
  }
  @media (min-width: 1366px) {
    height: 275px;
    width: 659px;
    color: #ffffff;
    font-family: Calibre Bold;
    font-size: 104px;
    font-weight: bold;
    letter-spacing: -0.5px;
    line-height: 88px;
  }
`

const Container = styled.div`
  height: 798px;
  width: 100%;
  position: realative;
  @media (min-width: 600px) {
    display: block;
    height: auto;
  }
  @media (max-width: 600px) {
    margin-top: -72px;
    height: 707px;
    width: 100%;
  }
`
const ImageBannerDK = styled.img`
  height: 100%;
  width: 100%;
  z-index: 0;
  object-fit: cover;
  @media (max-width: 600px) {
    display: none;
  }
`
const ImageBannerMB = styled.img`
  @media (max-width: 600px) {
    height: 100%;
    width: 100%;
    z-index: 0;
    object-fit: cover;
    clip-path: polygon(0 0, 100% 0, 100% 88%, 0% 97%);
  }
  @media (min-width: 601px) {
    display: none;
  }
`

const ButtonBanner = styled.button`
  margin-right: 24px;
  height: 48px;
  width: 148px;
  background: transparent;
  border: 2px solid #fecf09;
  color: #ffffff;
  border-radius: 3px;
  font-family: "Calibre Semibold";
  font-size: 18px;
  font-weight: 600;
  padding-top: 5px;
  :focus {
    outline: none;
  }
  :hover {
    color: #222222;
    background: #fecf09;
    border: 2px solid #fecf09;
  }
  background-color: ${props => (props.vitri === 0 ? "#fecf09" : "transparent")};
  color: ${props => (props.vitri === 0 ? "#222222" : "#ffffff")};
  @media (max-width: 600px) {
    margin-right: ${props => (props.vitri === 0 ? "16px" : "0px")};
    width: ${props => (props.vitri === 1 ? "156px" : "148px")};
  }
  @media (max-width: 360px) {
    margin-right: ${props => (props.vitri === 0 ? "12px" : "0px")};
    width: ${props => (props.vitri === 1 ? "130px" : "130px")};
  }
  @media (min-width: 600px) {
    width: ${props => (props.vitri === 1 ? "216px" : "200px")};
    padding: 5px 6px 0px;
  }
  @media (min-width: 1366px) {
    margin-right: 24px;
    height: 48px;
    width: 148px;
    border: 2px solid #fecf09;
    border-radius: 3px;
  }
`
const TextBanner = styled.div`
  height: 355px;
  width: 659px;
  position: absolute;
  top: 273px;
  padding-left: 167px;
  z-index: 1;
  @media (max-width: 600px) {
    height: auto;
    width: 345px;
    top: 204px;
    padding-left: 24px;
  }
  @media (max-width: 360px) {
    width: 280px;
  }
  @media (min-width: 600px) {
    padding-left: 20px;
    top: 54px;
    height: auto;
    width: 360px;
  }
  @media (min-width: 768px) {
    padding-left: 50px;
    top: 94px;
  }
  @media (min-width: 1024px) {
    padding-left: 50px;
    top: 170px;
    height: auto;
    width: 469px;
  }
  @media (min-width: 1366px) {
    height: 355px;
    width: 659px;
    position: absolute;
    top: 173px;
    padding-left: 67px;
    z-index: 1;
  }
  @media (min-width: 1600px) {
    height: 355px;
    width: 659px;
    position: absolute;
    top: 273px;
    padding-left: 167px;
    z-index: 1;
  }
  @media (min-width: 1920px) {
    top: 3%;
    padding-left: 8%;
  }
  @media (min-width: 2300px) {
    top: 4%;
    left: 5%;
  }
`
const Buttons = styled.div`
  display: flex;
  margin-top: 18px;
`
