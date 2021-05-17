import React from "react"
import styled from "styled-components"

const ThreeColumnProfile = ({ input }) => {
  return (
    <Container>
      <Body>
        <Profile>
          <BlockProfile>
            <IMG>
              <img alt="" src="" />
            </IMG>
            <Position>Managing Director</Position>
            <Name>Andrew Waite</Name>
            <Description>
              Convert Digital are looking for a Shopify developer who has
              experience with Shopify Plus, scripts, Flow, app development,
              systems integration and has the ability to simplify complex
              problems with best practise solu
            </Description>
          </BlockProfile>
          <BlockProfile>
            <IMG>
              <img alt="" src="" />
            </IMG>
            <Position>Managing Director</Position>
            <Name>Andrew Waite</Name>
            <Description>
              Convert Digital are looking for a Shopify developer who has
              experience with Shopify Plus, scripts, Flow, app development,
              systems integration and has the ability to simplify complex
              problems with best practise solu
            </Description>
          </BlockProfile>
          <BlockProfile>
            <IMG>
              <img alt="" src="" />
            </IMG>
            <Position>Managing Director</Position>
            <Name>Andrew Waite</Name>
            <Description>
              Convert Digital are looking for a Shopify developer who has
              experience with Shopify Plus, scripts, Flow, app development,
              systems integration and has the ability to simplify complex
              problems with best practise solu
            </Description>
          </BlockProfile>
        </Profile>
      </Body>
    </Container>
  )
}

export default ThreeColumnProfile

const Container = styled.div`
  margin-top: 56px;
  @media (max-width: 600px) {
  }
  @media (min-width: 600px) {
  }
`

const Body = styled.div`
  display: flex;
  justify-content: center;
`
const Profile = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    grid-gap: 24px;
  }
`

const BlockProfile = styled.div`
  width: 30vw;
  @media (max-width: 992px) {
    width: 40vw;
  }
  @media (min-width: 1600px) {
    width: 394px;
  }
`

const IMG = styled.div`
  width: 100%;
  height: 508px;
  margin-bottom: 20px;
  background-color: gray;

  img {
    width: 100%;
    object-fit: cover;
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
    top: 41%;
    display: block;
    content: "";
    width: 64px;
    height: 2px;
    background: rgb(254, 207, 9);
  }
  @media (max-width: 600px) {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 14px;
    margin-left: 48px;
    &::after {
      width: 32px;
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
`

const Description = styled.p`
  color: #222222;
  font-family: Calibre Regular;
  font-size: 18px;
  line-height: 24px;
`
