import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import ButtonCustom from "../../ButtonCustom"
import Image01 from "../../../images/cancel@2x.png"

function CardPartnerDetails({ setShowDetails, data }) {
  // get data from props
  const dataButton = data && data !== null ? data?.button_popup[0]?.text : ""
  const dataButtonUrl = data && data !== null ? data.partner_url?.url : "#"
  const dataButtonTarget = data && data !== null ? data.partner_url?.target : ""
  const dataDescription =
    data && data !== null ? data?.description1[0]?.text : ""
  const dataLogoUrl = data && data !== null ? data?.partner_logo?.url : ""
  const dataLogoAlt = data && data !== null ? data?.partner_logo?.alt : ""
  const dataTitle = data && data !== null ? data?.partner_name[0]?.text : ""

  // cd

  return (
    <>
      {data && data !== null ? (
        <Wrapper>
          <Container>
            <Close onClick={() => setShowDetails()}>
              <img src={Image01} />
            </Close>
            <DivIMG>
              <img src={dataLogoUrl} alt={dataLogoAlt} />
            </DivIMG>
            <Title>{dataTitle}</Title>
            <Descriptions>{dataDescription}</Descriptions>
            <ViewMore as={Link} to={dataButtonUrl} target={dataButtonTarget}>
              <ButtonCustom wt={180} cc={64} bgColor={"#FECF09"} Block={true}>
                <LabelButton>{dataButton}</LabelButton>
              </ButtonCustom>
            </ViewMore>
          </Container>
        </Wrapper>
      ) : null}
    </>
  )
}

export default CardPartnerDetails

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.35);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  overflow: scroll;
  overflow-x: hidden;

  @media (max-width: 600px) {
    justify-content: flex-start;
    align-items: flex-start;
  }
  @media (max-height: 500px) {
    align-items: flex-start;
  }
`
const Container = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 8px 8px 30px 0 rgba(0, 0, 0, 0.07);
  padding: 36px 61px 41px 48px;
  width: 100%;
  max-width: 605px;
  position: relative;

  @media (max-width: 600px) {
    width: 339px;
    padding-top: 18px;
    padding-right: 24px;
    padding-left: 18px;
    padding-bottom: 154px;
    border-radius: 0;
  }

  @media (max-width: 340px) {
    width: 100%;
  }
`
const Close = styled.span`
  position: absolute;
  top: 26px;
  right: 26.33px;
  cursor: pointer;
  width: 18.67px;
  height: 20px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 600px) {
    top: 29px;
  }
`
const DivIMG = styled.div`
  width: 244px;
  height: 122px;
  margin-bottom: 13px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 600px) {
    margin-bottom: 12px;
  }
`

const Title = styled.h5`
  color: #101010;
  font-family: Calibre Semibold;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -0.5px;
  line-height: 34px;
  margin-bottom: 7px;
`
const Descriptions = styled.p`
  max-width: 496px;
  color: #222222;
  font-family: Calibre Regular;
  font-size: 18px;
  letter-spacing: 0;
  line-height: 24px;
  margin-bottom: 22px;

  @media (max-width: 600px) {
    max-width: 297px;
    margin-bottom: 29px;
  }
`
const ViewMore = styled.div`
  text-decoration: none;
  display: inline-block;
  :hover,
  :active,
  :focus,
  :visited {
    text-decoration: none;
  }
`
const LabelButton = styled.h6`
  color: #101010;
  font-family: Calibre Semibold;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 18px;
  text-align: center;
  padding: 0;
  margin: 0;
  padding-top: 6px;
`
