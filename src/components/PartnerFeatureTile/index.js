import React from "react"
import styled from "styled-components"

function PartnerFeatureTile({ input }) {
  return (
    <Container>
      <Body>
        {input?.fields?.map((element, index) => (
          <Grid key={index}>
            <IMG>
              <img
                src={element?.logo?.url ? element?.logo?.url : ""}
                alt={element?.logo?.alt ? element?.logo?.alt : ""}
              />
            </IMG>
            <BlockText>
              <Title>
                {element?.subtitle[0]?.text ? element?.subtitle[0]?.text : ""}
              </Title>
              <Description>
                {element?.text[0]?.text ? element?.text[0]?.text : ""}
              </Description>

              <ReadMore href="#">View Shopify Portfolio</ReadMore>
            </BlockText>
          </Grid>
        ))}
      </Body>
    </Container>
  )
}

export default PartnerFeatureTile

const Container = styled.div`
  padding-top: 84px;
  padding-bottom: 84px;
  background-color: #f8f8f8;

  @media (max-width: 992px) {
    padding-top: 68px;
    padding-bottom: 58px;
  }
`

const Body = styled.div`
  display: flex;
  justify-content: center;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 1600px) {
    grid-gap: 70px;
  }
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    grid-gap: 24px;
  }
`

const IMG = styled.div`
  margin-top: 91.5px;
  width: 100%;
  max-width: 324px;
  height: 67px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 992px) {
    height: 51px;
    max-width: 256px;
    margin-top: 0;
  }
`

const BlockText = styled.div`
  width: 100%;
  max-width: 446px;

  @media (max-width: 600px) {
    max-width: 343px;
  }
`

const Title = styled.h4`
  margin-bottom: 6px;
  font-size: 32px;
  line-height: 32px;
  letter-spacing: -0.5px;
  color: #101010;
  font-family: Calibre Semibold;
  text-align: left;

  @media (max-width: 992px) {
    margin-bottom: 8px;
    max-width: 235px;
  }
`

const Description = styled.p`
  color: #222222;
  font-family: Calibre Regular;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0;
  margin-bottom: 9px;

  @media (max-width: 992px) {
    margin-bottom: 8px;
  }
  @media (max-width: 600px) {
    max-width: 327px;
  }
  @media (max-width: 370px) {
    max-width: 298px;
  }
`

const ReadMore = styled.a`
  color: #101010;
  font-family: Calibre Medium;
  font-size: 20px;
  line-height: 20px;
  margin: 0;
  font-weight: 500;
  letter-spacing: 0;
  position: relative;

  &:active,
  &:hover,
  &:visited {
    color: #101010;
    text-decoration: none;
  }

  &::after {
    content: "\f178";
    color: #101010;
    font-family: "Font Awesome 5 Pro Regular";
    font-size: 20px;
    letter-spacing: 0;
    line-height: 21px;
    text-align: center;
    position: absolute;
    top: -2px;
    left: calc(100% + 6px);
  }
`
