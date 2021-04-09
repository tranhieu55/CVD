import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { RichText } from "prismic-reactjs"
import { Link } from "gatsby"
import Button from "../../../../bits/Button"


export default function WhatWeDoDesktop(props) {

  const { fields } = props.props.input
  const { input } = props.props



  const defaultService = JSON.stringify(fields[0].service[0].text)
  const defaultContent = fields[0].content
  const defaultIndicator = 0

  const heading = input.primary.title[0].text


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
  }

  return (
      <ContainerDesktop>
        <Left>
          <Title>{heading}</Title>
          {fields.map((service, i) => {
            const title = service.service[0].text
            return (
              <React.Fragment key={i}>  
                <Service  onClick={() => updateSelected(i)} indicator={i == indicator}>
                  {title}
                </Service>
              </React.Fragment>
            )
          })}
        </Left>
        <Right>
          <UpperContent>
            <Content>{RichText.render(content)}</Content>
            <LearnMore>Learn more</LearnMore>
          </UpperContent>
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
  top: -250px;
  position: relative;
  display: grid;
  grid-template-columns: 50% 50%;
  height: 100%;
  @media (max-width: 768px) {
    display:none;
  }
`

const Title = styled.h2`
height: 62px;
width: 295px;
color: #FFFFFF;
font-family: Calibre Bold;
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
  max-width: 418px;
  height: 494px;
`

const Service = styled.li`
  ::before {
    content: ${props => props.indicator ? '"•"' : '""'};
    color: white;
    padding-right: ${props => props.indicator ? '16px' : '25px'};
    font-size: 25px;
  }
  height: 48px;
  width: 334px;
  opacity: 0.6;
  color: #FFFFFF;
  font-family: Calibre Medium;
  font-size: 28px;
  font-weight: 500;
  letter-spacing: -1.5px;
  line-height: 48px;
  margin-bottom: 14px;
  list-style : none;
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
  max-width: 444px;
  height: 241px;

`


const Content = styled.div`
width: 444px;
color: #FFFFFF;
font-family: Calibre Regular;
font-size: 22px;
letter-spacing: 0;
line-height: 34px;
margin-bottom: 14px;
p{
  width: 444px;
  color: #FFFFFF;
  font-family: Calibre Regular;
  font-size: 22px;
  letter-spacing: 0;
  line-height: 34px;
}
`
const LearnMore = styled.h4`
  height: 20px;
  max-width: 99px;
  color: #FECF09;
  font-family: Calibre Medium;
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 20px;
`