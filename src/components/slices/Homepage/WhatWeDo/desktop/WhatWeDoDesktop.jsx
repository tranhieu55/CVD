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
        <ContainerDesktop >
          <Contentleft>
            <Image src={input.primary.background_image_what_we_do.url}></Image>
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
          </Contentleft>
          <Right>
            <UpperContent>
              <Content>{RichText.render(content)}</Content>
              <LearnMore >Learn more</LearnMore>
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
  position: relative;
  display: grid;
  grid-template-columns: 50% 50%;
  height: 100%;
  background: #2A304F;
  @media (max-width: 992px) {
    display:none;
  }
  @media(min-width: 1024px){
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
  max-width: 500px;
  height: 494px;
  position: absolute;
  top: 19%;
  left: 17%;
  @media(min-width: 992px){
    left: 6%;
  }
  @media(min-width: 1366px){
    left: 12%;
  }
  @media(min-width: 1600px){
    left: 15%;
  }
  @media(min-width: 1800px){
    left: 16%;
  }
`

const Service = styled.li`
  ::before {
    content: ${props => props.indicator ? '"•"' : '""'};
    color: white;
    padding-right: ${props => props.indicator ? '16px' : '25px'};
    font-size: 25px;
  }
  height: 48px;
  width: 100%;
  opacity: 0.6;
  color: #FFFFFF;
  font-family: Calibre Medium;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.5px;
  line-height: 48px;
  margin-bottom: 14px;
  list-style : none;
  cursor: pointer;
  :hover{
    color: white;
    opacity: 1;
    list-style : 
  }
  opacity: ${props => props.indicator ? '1' : '0.6'};
  
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
  color: #FECF09;
  font-family: Calibre Medium;
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 20px;
  &::after{
    content: "\f178";
    font-family: "Font Awesome 5 Pro Regular";
    height: 18px;
    line-height: 0px;
    font-size: 20px;
    color: #FECF09;
    padding: 0px 0.6rem;
  }
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  object-fit: none;
`
const Contentleft = styled.div`
  background: #0F1534;
`