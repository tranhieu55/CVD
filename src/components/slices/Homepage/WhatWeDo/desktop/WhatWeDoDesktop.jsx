import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { RichText } from "prismic-reactjs"

export default function WhatWeDoDesktop(props) {
  const { fields } = props.props.input
  const { input } = props.props

  const defaultService = JSON.stringify(fields[0]?.service[0]?.text)
  const defaultContent = fields[0]?.content
  const defaultIndicator = 0

  const heading = input
    ? input.primary?.title[0]?.text
      ? input.primary?.title[0]?.text
      : ""
    : []

  useEffect(() => {
    setTimeout(() => {}, 3000)
  })

  // Declare a new state variable, which we'll call "count"
  const [service, setService] = useState(defaultService)
  const [content, setContent] = useState(defaultContent)
  const [indicator, setindicator] = useState(defaultIndicator)

  function updateSelected(i) {
    setService(fields[i]?.service[0]?.text)
    setContent(fields[i]?.content)
    setindicator(i)
  }
  // update code

  return (
    <>
      <Image
        src={
          input
            ? input?.primary?.background_image_what_we_do?.url
              ? input?.primary?.background_image_what_we_do?.url
              : ""
            : ""
        }
      ></Image>
      <ContainerDesktop>
        <Contentleft>
          <Left>
            <Title>{heading}</Title>
            {fields ? (
              fields?.map((service, i) => {
                const title = service?.service[0]?.text
                  ? service?.service[0]?.text
                  : ""
                return (
                  <React.Fragment key={i}>
                    <Service
                      onClick={() => updateSelected(i)}
                      indicator={i === indicator}
                      className={indicator === i ? "editFont" : ""}
                    >
                      {title ? title : ""}
                    </Service>
                  </React.Fragment>
                )
              })
            ) : (
              <></>
            )}
          </Left>
        </Contentleft>
        <ConTentRight>
          <Right>
            <UpperContent>
              <Content>{RichText?.render(content)}</Content>

              <a href="#">
                <LearnMore>
                  <span>Learn more</span>
                </LearnMore>
              </a>
            </UpperContent>
          </Right>
        </ConTentRight>
      </ContainerDesktop>
    </>
  )
}

const UpperContent = styled.div`
  position: relative;
  display: block;
  z-index: 22;
  margin: auto;
  max-width: 444px;
  height: 241px;
  top: 38%;
  a,
  a:visited,
  a:active,
  a:focus,
  a:hover {
    text-decoration: none;
  }
`
const ContainerDesktop = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 50% 50%;
  height: 100%;
  background: #0f1534;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  @media (max-width: 992px) {
    display: none;
  }
  @media (min-width: 1024px) {
  }
`

const Title = styled.h2`
  height: 62px;
  width: 295px;
  color: #ffffff;
  font-family: Calibre;
  font-size: 64px;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 62px;
  margin-bottom: 64px;
`

const Left = styled.div`
  display: block;
  grid-column: 1;
  margin: auto;
  max-width: 500px;
  height: 494px;
  position: absolute;
  top: 19%;
  left: 17%;
  .editFont {
    font-family: "Calibre";
    font-weight: bold;
  }
  @media (min-width: 992px) {
    left: 6%;
  }
  @media (min-width: 1366px) {
    left: 12%;
  }
  @media (min-width: 1600px) {
    left: 15%;
    top: 248px;
  }
  @media (min-width: 1800px) {
    left: 16%;
  }
`

const Service = styled.li`
  ::before {
    content: ${props => (props.indicator ? '"•"' : '""')};
    color: white;
    padding-right: ${props => (props.indicator ? "16px" : "25px")};
    font-size: 25px;
  }
  height: 48px;
  width: 100%;
  opacity: 0.6;
  color: #ffffff;
  font-family: Calibre Medium;
  font-size: 32px;
  font-weight: 500;
  letter-spacing: -0.5px;
  line-height: 48px;
  margin-bottom: 14px;
  list-style: none;
  cursor: pointer;
  :hover {
    color: white;
    opacity: 1;
  }
  opacity: ${props => (props.indicator ? "1" : "0.6")};
`

const Right = styled.div`
  display: block;
  grid-column: 2;
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
  position: relative;
  display: block;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: #2a304f;
`

const Content = styled.div`
  width: 444px;
  color: #ffffff;
  font-family: Calibre Regular;
  font-size: 22px;
  letter-spacing: 0;
  line-height: 34px;
  margin-bottom: 14px;
  p {
    width: 444px;
    color: #ffffff;
    font-family: Calibre Regular;
    font-size: 22px;
    letter-spacing: 0;
    line-height: 34px;
  }
`
const LearnMore = styled.h4`
  span {
    height: 20px;
    color: #fecf09;
    font-family: Calibre Medium;
    font-size: 22px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 20px;
    text-decoration: underline;
    cursor: pointer;
  }

  &::after {
    content: "\f178";
    font-family: "Font Awesome 5 Pro Regular";
    height: 18px;
    line-height: 0px;
    font-size: 20px;
    color: #fecf09;
    padding: 0px 0.6rem;
  }
`
const Image = styled.img`
  width: 126%;
  height: 160%;
  position: relative;
  object-fit: cover;
  z-index: 1;
  top: -353px;
  z-index: 10;
  left: -338px;
  display: block;
  @media (max-width: 992px) {
    display: none;
  }
`
const Contentleft = styled.div`
  z-index: 999;
`
const ConTentRight = styled.div`
  background-color: #2a304f;
  display: block;
  @media (max-width: 992px) {
    display: none;
  }
`
