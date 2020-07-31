import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { RichText } from "prismic-reactjs"
import { Link } from "gatsby"
import Button from "../../../../bits/Button"


export default function WhatWeDoMobile(props) {

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
      <Container>
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
      </Container>
  )
}

const UpperContent = styled.div`
  position: relative;
  display: block;
  z-index: 22;
`
const Container = styled.div`
  z-index: 3;
  top: -200px;
  position: relative;
  display: block;
  @media (min-width: 769px) {
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
