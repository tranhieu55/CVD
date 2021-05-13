import React, { useState } from "react"
import styled from "styled-components"
import images from "../../images/small-cross@2x.png"

const ModalVideo = ({ showModal, setShowModal, dataVideo }) => {
  const [isOpen, setIsOpen] = useState(null)
  function setLabels(index) {
    if (isOpen === index) {
      setIsOpen(null)
    } else {
      setIsOpen(index)
    }
  }
  console.log("hello", dataVideo)
  return (
    <>
      {showModal ? (
        <Container>
          <Modal showModal={showModal}>
            <div
              className="close01"
              onClick={() => setShowModal(prev => !prev)}
            >
              <ButtonClose src={images}></ButtonClose>
            </div>
            <Content>
              <video controls="controls">
                <source
                  src={dataVideo.fields[0]?.video_modal?.url}
                  type="video/mp4"
                />
              </video>
            </Content>
          </Modal>
        </Container>
      ) : null}
    </>
  )
}

export default ModalVideo

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-item: center;
  position: fixed;
  top: 0px;
  background: rgba(15, 21, 52, 0.8);
  z-index: 10000;
  overflow-y: auto;
`

const ButtonClose = styled.img`
  position: absolute;
  height: 10px;
  width: 10px;
  font-size: 10px;
  @media (max-width: 320px) {
    top: 12px;
    right: 5px;
  }
  @media (max-width: 600px) {
    top: 8px;
    right: 5px;
    font-size: 10px;
  }
  @media (min-width: 600px) {
    top: 22px;
    right: 16px;
  }
  @media (min-width: 768px) {
    top: 18px;
    right: 16px;
  }
  @media (min-width: 1200px) {
    top: 72px;
    right: 38px;
  }
`
const Content = styled.div`
  video {
    width: 100%;
    background-color: rgba(15, 21, 52, 0.8);
    @media (min-width: 600px) {
      margin-bottom: 20px;
    }
    @media (min-width: 1200px) {
      margin-bottom: 62px;
      height: 869px;
    }
  }
`
const Modal = styled.div`
  .close01 {
    cursor: pointer;
    text-align: right;
    @media (min-width: 1200px) {
      margin-bottom: 17px;
    }
  }
  .close01::before {
    content: "CLOSE VIDEO";
    color: white;
    margin-right: 16px;
    font-family: "Calibre Bold";
    font-size: 16px;
    z-index: 1123;
    @media (max-width: 600px) {
      margin-right: 25px;
    }
  }
  width: 100%;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 8px 8px 30px 0 rgba(0, 0, 0, 0.07);
  position: relative;
  margin: auto;
  background-color: transparent;
  z-index: 1;
  @media (max-width: 374px) and (max-height: 569px) {
    height: auto !important;
  }
  @media (max-width: 600px) {
    margin-left: 5px;
    margin-right: 5px;
  }
  @media (min-width: 600px) {
    padding-top: 10px;
    padding-left: 16px;
    padding-right: 16px;
  }
  @media (min-width: 1200px) {
    height: 869px;
    padding-top: 63px;
    padding-bottom: 62px;
    padding-left: 38px;
    padding-right: 38px;
  }
`
