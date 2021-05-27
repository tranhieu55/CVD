import React from "react"
import styled from "styled-components"

export default function TwoColumnText({ input }) {
  return (
    <Wrapper>
      <Row>
        <Title mrr="24">{input.primary?.text_side_left[0]?.text}</Title>
      </Row>
      <Row>
        <Title mrl="24" mrb="66">
          {input.primary?.text_side_right[0]?.text}
        </Title>
      </Row>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  max-width: 1240px;
  margin: auto;
  display: flex;
  @media (max-width: 600px) {
    display: unset;
    margin-top: 30px;
  }
  @media (min-width: 600px) {
    padding: 0 32px;
    margin-top: 30px;
  }
  @media (min-width: 768px) {
    margin: 0 20px;
    margin-top: 30px;
  }
  @media (min-width: 1200px) {
    margin: 0 100px;
    padding: 0px 15px;
    margin-top: 31px;
    margin-bottom: 90px;
  }
  @media (min-width: 1366px) {
    margin: 0 180px;
    padding: 0 15px;
    margin-top: 31px;
    margin-bottom: 90px;
  }
  @media (min-width: 1600px) {
    padding: 0 15px;
  }
`
const Title = styled.p`
  text-align: left;
  color: #222222;
  font-family: "Calibre Regular";
  font-size: 18px;
  letter-spacing: 0;
  line-height: 24px;
  font-weight: 500;
  margin-left: ${({ mrl }) => `${mrl}px`};
  margin-right: ${({ mrr }) => `${mrr}px`};
  @media (max-width: 600px) {
    margin: 0;
    padding: 0 16px;
    margin-top: 30px;
    margin-bottom: ${({ mrb }) => `${mrb}px`};
  }
`
const Row = styled.div`
  width: 50%;
  @media (max-width: 600px) {
    width: 100%;
  }
`
