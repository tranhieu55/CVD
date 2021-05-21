import React from "react"
import styled from "styled-components"

const ClientLogoBlock = ({ input }) => {
  return (
    <Container>
      <Body>
        <Logoes>
          {input?.fields?.map((element, index) => (
            <BlockLogo key={index}>
              <IMG>
                <img
                  src={element?.images?.url ? element?.images?.url : ""}
                  alt={element?.images?.alt ? element?.images?.alt : ""}
                />
              </IMG>
            </BlockLogo>
          ))}
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
    margin-top: 54px;
    margin-bottom: 111.5px;
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
  @media (max-width: 768px) {
    grid-column-gap: 17px;
    grid-row-gap: 14.5px;
  }
`

const BlockLogo = styled.div`
  width: 246px;

  @media (max-width: 600px) {
    width: 163px;
  }
  @media (max-width: 370px) {
    width: 44vw;
  }
`

const IMG = styled.div`
  width: 100%;
  height: 122px;
  // background-color: #e8e8e8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 600px) {
    height: 80px;
  }
`
