import React from "react"
import styled from "styled-components"

function Launches({ input }) {
  // get data heading
  const dataHeading = input?.title[0].text

  // get data for list images
  const dataListPost = input.body[0].fields
  return (
    <>
      <Container>
        <SubTitle>EXPERIENCE</SubTitle>
        <Title>{dataHeading}</Title>
      </Container>
      <ListPost>
        {dataListPost?.map((element, index) => (
          <Img
            key={index}
            src={element?.image_item.url}
            alt={element?.image_item.alt}
          ></Img>
        ))}
      </ListPost>
      <LinkCustom href="#">
        <ButtonCustom>Load more launches</ButtonCustom>
      </LinkCustom>
    </>
  )
}

export default Launches

const Container = styled.div`
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 158px;
  background-color: #f8f8f8;

  @media (max-width: 600px) {
    padding-top: 85px;
    padding-right: 17px;
    padding-left: 17px;
  }
`

const SubTitle = styled.h4`
  position: relative;
  height: 16px;
  width: 155px;
  color: #999999;
  font-family: Calibre Semibold;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 16px;
  margin-left: 228px;
  margin-bottom: 0;
  &::after {
    position: absolute;
    right: calc(100% + 17px);
    top: 41%;
    display: block;
    content: "";
    width: 63px;
    height: 2px;
    background: #fecf09;
  }
  @media (max-width: 1440px) {
    margin-left: 142px;
  }
  @media (max-width: 992px) {
    margin-left: 82px;
  }
  @media (max-width: 600px) {
    height: 14px;
    width: 135px;
    color: #999999;
    font-family: Calibre Semibold;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 14px;
    margin-left: 50px;
    &::after {
      width: 32px;
    }
  }
`

const Title = styled.h1`
  box-sizing: border-box;
  color: #101010;
  font-family: Calibre Bold;
  font-size: 64px;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 56px;
  padding-bottom: 30px;
  padding-top: 32px;
  padding-left: 228px;
  margin: 0;
  @media (max-width: 1440px) {
    padding-left: 142px;
  }
  @media (max-width: 992px) {
    padding-left: 0;
  }
  @media (max-width: 600px) {
    font-size: 40px;
    font-weight: bold;
    letter-spacing: -1px;
    line-height: 38px;
    padding-top: 20px;
    padding-bottom: 14px;
  }
`

const ListPost = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 32px;
  background-color: #ffffff;
  padding: 32px;

  @media (max-width: 992px) {
    grid-gap: 24px;
    padding: 24px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
    padding: 16px;
  }
`
const Img = styled.img`
  width: 100%;
  object-fit: cover;

  @media (width: 1600px) {
    width: 360px;
    height: 360px;
  }
`
const ButtonCustom = styled.button`
  font-family: Calibre Medium;
  width: 176px;
  border: 2px solid #fecf09;
  border-radius: 3px;
  background-color: transparent;
  display: block;
  margin: 0 auto;
  font-size: 16px;
  padding-left: 22.5px;
  padding-right: 22.5px;
  padding-top: 16.5px;
  padding-bottom: 8.5px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 19px;
  text-align: center;
  margin-bottom: 72px;
  color: #101010;

  :focus {
    outline: none;
  }
  :hover {
    transition: all 0.6s ease;
    background-color: #ffd700;
    color: #101010;
  }

  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 24px;
  }
`

const LinkCustom = styled.a`
  text-decoration: none;
  :hover {
    text-decoration: none;
  }

  @media (max-width: 600px) {
    display: block;
    width: 100%;
    padding: 0 16px;
  }
`
