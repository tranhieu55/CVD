import React from "react"
import styled from "styled-components"
import imagePlus from "../../images/pluscopy@2x.png"
import imageMinus from "../../images/minus@2x.png"
import { useState } from "react"
import { RichText } from "prismic-reactjs"
import { useStaticQuery } from "gatsby"

export default function Accordion({input}) {
  console.log({input});
  const [checkToggle, setCheckToggle] = useState(false)
  const handelClick = () => {
    setCheckToggle(!checkToggle)
  }
  const data = input.fields.map(item => item);
  return (
    <Container>
      {data.map((item, index) => (
        <Content key={index}>
          <SubTitle>{item.sub_title.map(item => item.text)}</SubTitle>
          <Title>{item.title.map(item => item.text)}</Title>
          {checkToggle === true ? (
            <ContentSub>
              <Text>
                Convert Digital are looking for a Shopify developer who has
                experience with Shopify Plus, scripts, Flow, app development,
                systems integration and has the ability to simplify complex
                problems with best practise solutions.
                <br></br>Why work at Convert Digital:
              </Text>
              {item.text_li.map((item , index) => (
                <TextLi key={index}>
                  {item.text}
                </TextLi>
              ))}
            </ContentSub>
          ) : (
            <></>
          )}

          <DivImg onClick={handelClick} checkToggle={checkToggle}>
            <img
              src={checkToggle === true ? imageMinus : imagePlus}
              className={checkToggle === true ? "minus" : " plus"}
            />
          </DivImg>
        </Content>
      ))}
    </Container>
  )
}
const Container = styled.div`
  @media (max-width: 600px) {
    margin: 0 16px;
    height: auto;
  }
  @media (min-width: 600px) {
    margin: 0 32px;
    height: auto;
  }
  @media (min-width: 768px) {
    margin: 0 48px;
  }
  @media (min-width: 992px) {
    width: 900px;
    margin: 0 auto;
    height: auto;
  }
`
const DivImg = styled.div`
  position: absolute;
  img {
    width: 21px;
  }
  .plus {
    transition: all 0.5s ease-in-out;
    transform: rotate(-90deg);
    height: 21px;
  }
  .minus {
    transition: all 0.5s ease-in-out;
    transform: rotate(0deg);
  }
  right: 0;
  margin-right: 9px;
  top: 10px;
`
const Content = styled.div`
  width: 100%;
  height: auto;
  border-bottom: 1px solid #e4e4e4;
  margin-bottom: 100px;
  position: relative;
`
const SubTitle = styled.p`
  color: #999999;
  font-family: Calibre Semibold;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 16px;
  margin-bottom: 10px;
  position: relative;
  margin-left: 80px;
  &::after {
    position: absolute;
    right: calc(100% + 16px);
    top: 31%;
    display: block;
    content: "";
    width: 64px;
    height: 2px;
    background: rgb(254, 207, 9);
  }
`
const Title = styled.h1`
  color: #101010;
  font-family: Calibre Semibold;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.5px;
  line-height: 32px;
  margin-bottom: 30px;
  @media (max-width: 600px) {
    font-size: 24px;
    line-height: 24px;
    width: 99%;
  }
`
const ContentSub = styled.div`
  margin-bottom: 55px;
  transition: all 0.4s ease-in;
`
const Text = styled.p`
  color: #222222;
  font-family: Calibre Regular;
  font-size: 18px;
  letter-spacing: 0;
  line-height: 24px;
`
const TextLi = styled.li`
  color: #222222;
  font-family: Calibre Regular;
  font-size: 18px;
  letter-spacing: 0;
  line-height: 24px;
  margin-left: 10px;
  margin-bottom: 4px;
  @media (max-width: 600px) {
    margin-bottom: 8px;
  }
`
