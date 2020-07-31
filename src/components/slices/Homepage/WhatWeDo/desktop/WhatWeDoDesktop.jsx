import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { RichText } from "prismic-reactjs"
import { Link } from "gatsby"
import Button from "../../../../bits/Button"


export default function WhatWeDoDesktop(props) {

  const { fields } = props.props.input
  const { input } = props.props

  console.log(fields)

  const defaultService = JSON.stringify(fields[0].service[0].text)
  const defaultContent = fields[0].content
  const defaultIndicator = 0

  const heading = input.primary.title[0].text

  console.log(props)
  useEffect(() => {
    setTimeout(() => {
      console.log(`You clicked imes`)
    }, 3000)
  })

  // Declare a new state variable, which we'll call "count"
  const [service, setService] = useState(defaultService)
  const [content, setContent] = useState(defaultContent)
  const [indicator, setindicator] = useState(defaultIndicator)


  function updateSelected(i) {
    setService(fields[i].service[0].text)
    setContent(fields[i].content)
    setindicator(i)
    console.log(i)
  }

  return (
      <ContainerDesktop>
        <Left>
          <Title>{heading}</Title>
          {fields.map((service, i) => {
            let title = service.service[0].text
            return (
              <>
                <Service key={i} onClick={() => updateSelected(i)} indicator={i == indicator}>
                  {title}
                </Service>
              </>
            )
          })}
        </Left>
        <Right>
          <UpperContent>
            <Content>{RichText.render(content)}</Content>
            <Button yellowWhite content={"Learn more"} />
          </UpperContent>
          <Blob>
            <div class="blob">
              <div class="blob__chunk"></div>
              <div class="blob__chunk"></div>
              <div class="blob__chunk"></div>
              <div class="blob__chunk"></div>
              <div class="blob__chunk"></div>
              <div class="blob__chunk"></div>
              <div class="blob__chunk"></div>
              <div class="blob__chunk"></div>
              <div class="blob__chunk"></div>
              <div class="blob__chunk"></div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
              <defs>
                <filter id="goo">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="10"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                    result="goo"
                  />
                  <feBlend in="SourceGraphic" in2="goo" />
                </filter>
              </defs>
            </svg>
          </Blob>
        </Right>
      </ContainerDesktop>
  )
}

const UpperContent = styled.div`
  position: relative;
  display: block;
  z-index: 22;
`
const ContainerDesktop = styled.div`
  z-index: 3;
  top: -200px;
  position: relative;
  display: grid;
  grid-template-columns: 50% 50%;
  @media (max-width: 768px) {
    display:none;
  }
`

const Title = styled.h2`
  color: #ffffff;
  font-size: 64px;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 62px;
`

const Left = styled.div`
  display: block;
  grid-column: 1;
  margin: auto;
  width: 60%;
`

const Service = styled.h4`
  opacity: 0.6;
  color: #ffffff;
  font-size: 32px;
  font-weight: 500;
  letter-spacing: -0.5px;
  cursor: pointer;
  :hover{
    color: white;
    opacity: 1;
  }
  opacity: ${props => props.indicator ? 1 : .6};

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
  margin: auto;

`

const Blob = styled.div`
  @media (max-width: 768px) {
    display:none;
  }
`
const Content = styled.div`
  width: 523px;
  color: #ffffff;
  font-size: 24px;
  letter-spacing: 0;
  line-height: 34px;
`
