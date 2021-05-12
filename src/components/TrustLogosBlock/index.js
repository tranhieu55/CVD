import React from "react"
import styled from "styled-components"

const LogosBlock = () => {
  return (
    <Container>
      <Title>Trusted by the best.</Title>
      <ListLogo>
        <BlockLogo />
        <BlockLogo />
        <BlockLogo />
      </ListLogo>
    </Container>
  )
}

export default LogosBlock

const Container = styled.div`
  height: 245px;
  background-color: #f8f8f8;
  box-sizing: border-box;
  padding-top: 48.35px;
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
`

const ListLogo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

const BlockLogo = styled.div`
  height: 60.86px;
  width: 227px;
  background-color: gray;
`
