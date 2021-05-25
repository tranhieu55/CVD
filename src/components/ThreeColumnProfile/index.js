import React from "react"
import styled from "styled-components"

const ThreeColumnProfile = ({ input }) => {
  return (
    <Container>
      <Body>
        <Profile>
          {input?.fields.map((element, index) => (
            <BlockProfile key={index}>
              <IMG>
                <img
                  src={element?.avatar?.url ? element?.avatar?.url : ""}
                  alt={element?.avatar?.alt ? element?.avatar?.alt : ""}
                />
              </IMG>
              <Position>
                {element?.position[0]?.text ? element?.position[0]?.text : ""}
              </Position>
              <Name>
                {element?.name[0]?.text ? element?.name[0]?.text : ""}
              </Name>
              <Description>
                {element?.description[0]?.text
                  ? element?.description[0]?.text
                  : ""}
              </Description>
            </BlockProfile>
          ))}
        </Profile>
      </Body>
    </Container>
  )
}

export default ThreeColumnProfile

const Container = styled.div`
  margin-top: 56px;

  @media (max-width: 600px) {
    margin-top: 29px;
  }
`

const Body = styled.div`
  display: flex;
  justify-content: center;
`
const Profile = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px;
  padding-bottom: 32px;
  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-gap: 30px;
    padding-bottom: 30px;
  }
`

const BlockProfile = styled.div`
  width: 30vw;
  max-width: 392px;

  @media (max-width: 992px) {
    width: 40vw;
  }

  @media (max-width: 600px) {
    width: 100%;
    max-width: 374px;
    padding: 0 12px;
  }
`

const IMG = styled.div`
  width: 100%;
  height: 508px;
  margin-bottom: 20px;
  background-color: gray;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 600px) {
    height: 485px;
    margin-bottom: 19.1px;
  }
`

const Position = styled.span`
  color: #999999;
  font-family: Calibre Semibold;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 16px;
  position: relative;
  margin-left: 80px;
  height: 16px;
  text-transform: uppercase;

  &::after {
    position: absolute;
    right: calc(100% + 16px);
    top: 35%;
    display: block;
    content: "";
    width: 64px;
    height: 2px;
    background: #fecf09;
  }
  @media (max-width: 600px) {
    &::after {
      width: 61.08px;
    }
  }
`

const Name = styled.h4`
  margin-bottom: 8px;
  margin-top: 8px;
  font-size: 32px;
  line-height: 32px;
  letter-spacing: -0.5px;
  color: #101010;
  font-family: Calibre Semibold;
  text-align: left;

  @media (max-width: 600px) {
    margin-top: 6.19px;
    margin-bottom: 6.92px;
  }
`

const Description = styled.p`
  color: #222222;
  font-family: Calibre Regular;
  font-size: 18px;
  line-height: 24px;
  margin: 0;
`
