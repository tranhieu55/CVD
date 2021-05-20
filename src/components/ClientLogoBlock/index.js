import React from "react"
import styled from "styled-components"

const ClientLogoBlock = ({ input }) => {
  return (
    <Container>
      <Body>
        <Logoes>
          <BlockLogo>
            <IMG>
              <img src="" alt="" />
            </IMG>
          </BlockLogo>
          <BlockLogo>
            <IMG>
              <img src="" alt="" />
            </IMG>
          </BlockLogo>
          <BlockLogo>
            <IMG>
              <img src="" alt="" />
            </IMG>
          </BlockLogo>
          <BlockLogo>
            <IMG>
              <img src="" alt="" />
            </IMG>
          </BlockLogo>
          <BlockLogo>
            <IMG>
              <img src="" alt="" />
            </IMG>
          </BlockLogo>
          <BlockLogo>
            <IMG>
              <img src="" alt="" />
            </IMG>
          </BlockLogo>
          <BlockLogo>
            <IMG>
              <img src="" alt="" />
            </IMG>
          </BlockLogo>
          <BlockLogo>
            <IMG>
              <img src="" alt="" />
            </IMG>
          </BlockLogo>
        </Logoes>
      </Body>
    </Container>
  )
}

export default ClientLogoBlock

const Container = styled.div`
  margin-top: 60px;
  margin-bottom: 147px;

  @media (max-width: 600px) {
    margin-top: 29px;
  }
`

const Body = styled.div`
  display: flex;
  justify-content: center;
`
const Logoes = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 32px;

  @media (min-width: 1600px) {
    width: 100%;
    max-width: 1080px;
  }
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-gap: 30px;
    padding-bottom: 30px;
  }
`

const BlockLogo = styled.div`
  //   width: 100%;
  //   max-width: 246px;
  width: 246px;

  @media (max-width: 992px) {
  }

  @media (max-width: 600px) {
  }
`

const IMG = styled.div`
  width: 100%;
  height: 122px;
  margin-bottom: 20px;
  background-color: gray;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 600px) {
  }
`
