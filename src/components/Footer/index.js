import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Newletter from "../NewLetter/index"
import Modal from "../ModalContact/index"

const FooterStyle = styled.div`
  background-color: ${({ dataBGR }) => dataBGR};
  font-family: "Calibre Medium";
  font-size: 20px;
  .row {
    margin: 0;
  }
  .img {
    width: 202px;
    height: 38px;
  }
  .hover-get-in-touch {
    cursor: pointer;
  }
  .style-icon {
    padding-top: 80px;
  }
  .w-141 {
    width: 141px;
  }
  .w-112 {
    width: 112px;
  }
  .w-64 {
    width: 64px;
  }
  .w-145 {
    width: 145px;
  }
  .text-3 {
    width: 216px;
  }
  .text-3 span {
    font-family: "Calibre Semibold";
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 24px;
  }
  .changes-text {
    font-size: 18px !important;
    a {
      font-weight: 500;
      color: white;
      font-family: "Calibre Medium";
      &:hover {
        text-decoration: none;
      }
    }
  }
  .text-3 p {
    font-family: "Calibre Medium";
    opacity: 0.7;
    color: #ffffff;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 26px;
  }

  .convert-2020 {
    opacity: 0.7;
    color: #ffffff;
    font-family: "Calibre Medium";
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 24px;
  }
  .content-digital {
    display: flex;
  }

  @media only screen and (max-width: 320px) {
    .text-3 {
      width: 135px !important;
    }
    .editText {
      margin-right: 15px !important;
    }
  }
  @media only screen and (max-width: 600px) {
    .img {
      display: block;
      margin: auto;
    }
    .text-3 {
      padding-top: 37px;
    }
    p {
      margin: 0;
    }
    .style-icon {
      padding-top: 20px !important;
    }
    .w-141 {
      width: 600px;
    }
    .editText {
      margin-right: 30px !important;
    }
    .text-3 {
      width: 155px;
    }
    .text-3 p {
      font-size: 16px !important;
      letter-spacing: 0px;
      line-height: 23px;
    }
    .text-3 span {
      font-size: 18px !important;
    }

    .convert-2020 {
      font-size: 16px !important;
    }
    .order-3 {
      order: 5;
    }
    .order-5 {
      order: 3;
      width: 100%;
    }
    .w-112 {
      display: none;
    }
    .row {
      line-height: 24px;

      padding-top: 15px;
      border-top: 1px solid #92939b;
      margin-top: 29px;
    }
  }

  @media only screen and (min-width: 600px) {
    .w-141 {
      width: 600px;
    }
    .w-112 {
      display: none;
    }
    .order-3 {
      order: 5;
    }
    .order-5 {
      order: 3;
    }
    .content-digital {
      margin-top: 30px;
      margin-right: 80px;
    }
    .style-icon {
      padding-top: 30px !important;
    }

    .editText {
      margin-right: 64px !important;
    }
    .none-pd {
      padding-top: 0;
    }
  }

  @media only screen and (min-width: 768px) {
    .w-141 {
      width: 800px;
    }
    .w-112 {
      display: block;
    }
    .order-3 {
      order: 5;
    }
    .order-5 {
      order: 3;
    }
    .none-pd {
      padding-top: 0;
    }
  }

  @media only screen and (min-width: 992px) {
    .w-141 {
      width: 70px;
    }
    .w-112 {
      display: block;
      width: 30px;
    }

    .editText {
      margin-right: 64px !important;
    }
    .content-digital {
      margin-top: 0px;
      margin-right: 0px;
    }
    .text-3 p {
      font-size: 18px;
    }
    .text-3 span {
      font-size: 20px;
    }
    .convert-2020 {
      font-size: 18px;
    }
    .order-3 {
      order: 3;
    }
    .order-5 {
      order: 5;
    }
    .style-icon {
      padding-top: 72px !important;
    }
  }

  @media only screen and (min-width: 1300px) {
    .container {
      padding-left: 0;
      padding-right: 0;
    }
    .w-141 {
      width: 141px;
    }
    .w-112 {
      display: block;
      width: 112px;
    }
    .content-digital {
      margin-top: 0px;
    }
  }
  .text-3 p {
    font-size: 18px;
  }
  .text-3 span {
    font-size: 20px;
  }
  .convert-2020 {
    font-size: 18px;
  }
`

export const Icon = styled.div`
  text-align: right;
  cursor: pointer;
  img {
    width: 21px;
    height: 21px;
    margin-left: 24px;
    &:hover {
      transition: all 1s ease;
      color: gold;
    }
    opacity: 0.7;
  }
  @media only screen and (max-width: 600px) {
    text-align: left;
    img {
      margin-right: 24px;
      margin-left: 0;
    }
  }
`
const Boxicon = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    color: #bdbdbd;
    font-size: 18px;
  }

  @media only screen and (max-width: 600px) {
    p {
      font-size: 16px;
    }
    .order-1 {
      order: 2;
      height: 24px;
    }
    .order-2 {
      order: 1;
      height: 24px;
      margin-bottom: 22px;
    }
    flex-direction: column;
  }
`
const IphoneX = styled.div`
  padding: env(safe-area-inset-top) env(safe-area-inset-right)
    env(safe-area-inset-bottom) env(safe-area-inset-left);
`
const Container = styled.div`
  max-width: 1240px;
  @media only screen and (max-width: 600px) {
    padding-top: 0 !important;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 31px !important;
  }
  @media only screen and (min-width: 600px) {
    padding-top: 40px !important;
    padding-bottom: 30px !important;
  }
  @media only screen and (min-width: 768px) {
    padding-top: 40px !important;
    padding-bottom: 30px !important;
  }
  @media only screen and (min-width: 992px) {
    padding-top: 78px !important;
    padding-bottom: 76px !important;
  }
`
const ListIcon = styled.div``
const Order = styled.div``
const Row = styled.div``
const BoxImage = styled.div`
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (min-width: 600px) {
    margin: auto;
  }
  @media only screen and (min-width: 992px) {
    margin: 0;
    margin-right: 0px;
  }
  @media only screen and (min-width: 1300px) {
    margin: 0;
  }
`
const BoxOrder = styled.div``
const BoxTextOrder = styled.div`
  width: 164px;
  color: #ffffff;
  font-family: "Calibre Medium";
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 24px;
  @media only screen and (max-width: 600px) {
    padding-top: 26px;
    font-size: 18px;
    line-height: 26px;
  }
  @media only screen and (min-width: 768px) {
    margin-top: 30px;
  }
  @media only screen and (min-width: 992px) {
    margin-top: 0px;
  }
  @media only screen and (min-width: 1300px) {
    margin-top: 0px;
  }
`
const BoxContentDigital = styled.div``
const ListContent = styled.div``
const ListLink = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 30px;
  a {
    color: white;
    text-decoration: none;
    font-size: 20px;
  }
  @media only screen and (max-width: 600px) {
    line-height: 28px;
    a {
      font-size: 18px;
    }
  }
`
const Content = styled.div`
  span {
    color: white;
    font-size: 20px;
    display: block;
    padding-bottom: 5px;
    font-family: "Calibre Semibold";
  }
`

export default function Footer({ dataFooter }) {
  // đây là background footer
  const dataBGR =
    dataFooter && dataFooter.edges[0]?.node?.background_color_of_footer_bottom
      ? dataFooter.edges[0]?.node?.background_color_of_footer_bottom
      : []
  // đây là logoFooter ( alt và url)
  const dataLogo =
    dataFooter && dataFooter.edges[0]?.node?.logo_footer?.url
      ? dataFooter.edges[0]?.node?.logo_footer?.url
      : []

  const dataLogoAlt =
    dataFooter && dataFooter.edges[0]?.node?.logo_footer?.alt
      ? dataFooter.edges[0]?.node?.logo_footer?.alt
      : []
  // dữ liệu order1 map()
  const dataLP = dataFooter
    ? dataFooter.edges[0]?.node?.body?.filter(item =>
        item.type ? item.type === "ourwork_footer" : ""
      )
    : []
  const dataLinkPages = dataFooter
    ? dataLP.filter(item => (item.fields ? item.fields : ""))
    : []

  // dữ liệu addres map()]
  const dataAD = dataFooter
    ? dataFooter.edges[0]?.node?.body?.filter(item =>
        item.type ? item.type === "address" : ""
      )
    : []
  const dataAddress = dataAD.filter(item => (item.fields ? item.fields : ""))

  // dữ liệu data image icon
  const dataIMAGE = dataFooter
    ? dataFooter.edges[0]?.node?.body?.filter(item =>
        item.type ? item.type === "lists_icon_footer" : ""
      )
    : []
  const dataImg = dataFooter
    ? dataIMAGE.filter(item => (item.fields ? item.fields : ""))
    : []
  const [showModal, setShowModal] = useState(false)
  const openModal = () => {
    setShowModal(prev => !prev)
  }

  return (
    <FooterStyle dataBGR={dataBGR} className="container-fulid">
      <IphoneX>
        {dataFooter ? <Newletter dataFooter={dataFooter} /> : <></>}
        <Container className="container">
          <Row className="row">
            {dataLogo && dataLogoAlt ? (
              <BoxImage className="order-1">
                <img alt={dataLogoAlt} className="img" src={dataLogo} />
              </BoxImage>
            ) : (
              <></>
            )}
            <BoxOrder className="w-141 order-2"></BoxOrder>
            <BoxTextOrder className="order-3">
              <ListLink>
                <Link className="none-pd" to="/projects">
                  Our work
                </Link>
                {dataLinkPages[0] ? (
                  dataLinkPages[0]?.fields?.map((item, index) => {
                    return (
                      <>
                        {item &&
                        item?.slug_sub_title[0]?.text === "get-in-touch" ? (
                          <span
                            onClick={openModal}
                            className="hover-get-in-touch"
                          >
                            {item?.sub_title[0]?.text}{" "}
                          </span>
                        ) : (
                          <Link
                            key={index}
                            to={`/${
                              item?.slug_sub_title[0]?.text
                                ? item?.slug_sub_title[0]?.text
                                : ""
                            }`}
                          >
                            {item?.sub_title[0]?.text
                              ? item?.sub_title[0]?.text
                              : ""}
                          </Link>
                        )}
                      </>
                    )
                  })
                ) : (
                  <></>
                )}
              </ListLink>
            </BoxTextOrder>
            <BoxOrder className="w-112 order-4"></BoxOrder>
            <BoxContentDigital className="content-digital order-5">
              {dataAddress[0] ? (
                dataAddress[0]?.fields?.map((item, index) => (
                  <ListContent
                    key={index}
                    className={index === 0 ? "text-3 editText" : "text-3"}
                  >
                    <Content>
                      <span>
                        {item?.city[0]?.text ? item?.city[0]?.text : ""}
                      </span>
                      <p>
                        {item?.address_detail[0]?.text
                          ? item?.address_detail[0]?.text
                          : ""}
                        <br />
                        <span className="changes-text">
                          <a
                            href={`tel: ${
                              item?.phone_office[0]?.text
                                ? item?.phone_office[0]?.text
                                : ""
                            }`}
                          >
                            {item?.phone_office[0]?.text
                              ? item?.phone_office[0]?.text
                              : ""}
                          </a>
                        </span>
                      </p>
                    </Content>
                  </ListContent>
                ))
              ) : (
                <></>
              )}
            </BoxContentDigital>
          </Row>
          <ListIcon className="style-icon">
            <Boxicon className="row">
              <Order className=" order-1">
                <span className="convert-2020">
                  © {new Date().getFullYear()} Convert Digital.{" "}
                </span>
              </Order>
              <Order className=" order-2">
                <Icon>
                  {dataImg[0] ? (
                    dataImg[0]?.fields?.map((item, index) => (
                      <React.Fragment key={index}>
                        <a
                          target={
                            item?.link_to_social_network?.target
                              ? item?.link_to_social_network?.target
                              : ""
                          }
                          href={
                            item?.link_to_social_network?.url
                              ? item?.link_to_social_network?.url
                              : ""
                          }
                        >
                          <img
                            src={
                              item?.icon_item?.url ? item?.icon_item?.url : ""
                            }
                            alt={
                              item?.icon_item?.alt ? item?.icon_item?.alt : ""
                            }
                          />
                        </a>
                      </React.Fragment>
                    ))
                  ) : (
                    <></>
                  )}
                </Icon>
              </Order>
            </Boxicon>
          </ListIcon>
        </Container>
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          openModal={openModal}
        />
      </IphoneX>
    </FooterStyle>
  )
}
