import React from "react"
import styled from "styled-components"

const BannerLogo = ({ input }) => {
  const data = input ? input : []

  console.log({ DataLogoBanner: data })
  return (
    <Container>
      <FlexContent>
        <LogoFirst></LogoFirst>
        <LogoLast>
          <LogoLastImg></LogoLastImg>
          <LogoLastContent>
            <TitleName></TitleName>
            <ViewMore></ViewMore>
          </LogoLastContent>
        </LogoLast>
      </FlexContent>
    </Container>
  )
}

export default BannerLogo

const Container = styled.div`
  padding: 244px 180px 40px 180px;
  background-color: #f8f8f8;
`
const FlexContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 70px;
`
const LogoFirst = styled.div`
  background-color: gray;
  width: 96px;
  height: 100%;
`
const LogoLast = styled.div`
  background-color: gray;
  width: 254px;
  height: 53px;
  display: grid;
  grid-tempalte-column: 46px auto;
  grid-gap: 16px;
`
const LogoLastImg = styled.div`
  width: 46px;
  height: 100%;
`
const LogoLastContent = styled.div``
const TitleName = styled.p`
  color: #101010;
  font-family: Calibre Medium;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.5px;
  line-height: 20px;
`
const ViewMore = styled.p`
  color: #222222;
  font-family: Calibre Regular;
  font-size: 18px;
  letter-spacing: 0;
  line-height: 24px;
`
const IMG = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`
