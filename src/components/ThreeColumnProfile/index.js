import React from "react"
import styled from "styled-components"

const ThreeColumnProfile = ({ input }) => {
  return (
    <Container>
      <Body>
        <Profile>hello</Profile>
      </Body>
    </Container>
  )
}

export default ThreeColumnProfile

const Container = styled.div`
  background-color: #f8f8f8;
  box-sizing: border-box;
  padding-top: 48.35px;
  padding-bottom: 75px;
  @media (max-width: 600px) {
    padding-top: 35px;
    padding-bottom: 46px;
    margin-top: -41px;
  }
  @media (min-width: 600px) {
    margin-top: -81px;
  }
`

const Body = styled.div`
  display: flex;
  justify-content: center;
`
const Profile = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 88px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    grid-gap: 24px;
  }
`

const BlockLogo = styled.div`
  height: ;
  width: 227px;
`
