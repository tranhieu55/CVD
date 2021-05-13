import React from "react"
import styled from "styled-components"

const LogosBlock = () => {
  return (
    <Container>
      <Title>Trusted by the best.</Title>
      <Body>
        <ListLogo>
          <BlockLogo />
          <BlockLogo />
          <BlockLogo />
        </ListLogo>
      </Body>
    </Container>
  )
}

export default LogosBlock

const Container = styled.div`
  background-color: #f8f8f8;
  box-sizing: border-box;
  padding-top: 48.35px;
  padding-bottom: 75px;

  @media (max-width: 600px) {
    padding-top: 35px;
    padding-bottom: 46px;
  }
`
const Title = styled.h4`
  height: 32px;
  color: #101010;
  font-family: Calibre Semibold;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.5px;
  line-height: 32px;
  text-align: center;
  margin-bottom: 36px;

  @media (max-width: 600px) {
    margin-bottom: 32px;
  }
`
const Body = styled.div`
  display: flex;
  justify-content: center;
`
const ListLogo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 88px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    grid-gap: 24px;
  }
`

const BlockLogo = styled.div`
  height: 60.86px;
  width: 227px;
  background-color: gray;
`
