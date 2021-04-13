import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { RichText } from "prismic-reactjs"
import { Link } from "gatsby"
import Button from "../../../../bits/Button"
import {Collapse} from 'reactstrap';


export default function WhatWeDoMobile(props) {

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
    console.log(i);
    setService(fields[i].service[0].text)
    setContent(fields[i].content)
    setindicator(i)
    if(isOpen === i) {
      setIsOpen(null);
    } else {
      setIsOpen(i)
    }
  }
  const [isOpen, setIsOpen] = useState(null);
  const [status, setStatus] = useState('Closed');
  const onExited = () => setStatus('Closed');

console.log({fields});
  
  return (
      <Container>
          <Title>{heading}</Title>
          {fields.map((service, i) => {
            let title = service.service[0].text
            return (
              <React.Fragment key={i}>
                {isOpen === i ? <Service className={`accordion-title ${isOpen === i ? "open" : ""}`} onClick={() => updateSelected(i)} indicator={i === indicator}>
                  {title}
                </Service>: 
                  <Services className={`accordion-title ${isOpen === i ? "open" : ""}`} onClick={() => updateSelected(i)} indicator={i === indicator}>
                  {title}
                </Services>
                }
                
                <Collapse isOpen={isOpen === i} onExited={onExited}>
                    <UpperContent>  
                      <Content>{RichText.render(content)}</Content>
                      <Lern>
                        <LearnMore>Learn more</LearnMore>
                      </Lern>
                    </UpperContent>
                  </Collapse>
              </React.Fragment>
            )
          })}
      </Container>
  )
}

const UpperContent = styled.div`
  position: relative;
  display: block;
  z-index: 22;
  top: -5px;
`
const Container = styled.div`
  z-index: 3;
  position: relative;
  display: block;
  @media (min-width: 993px) {
    display:none;
  }
  @media(min-width: 600px){
    top: 125px;
  }
  margin-left: 32px;
  height: 496px;
  @media(max-width: 600px){
    top: 74px;
  }
`

const Title = styled.h2`
  color: #ffffff;
  font-size: 32px;
  font-weight: bold;
  letter-spacing: -0.5px;
  line-height: 30px;
  height: 30px;
  width: 148px;
  font-family: Calibre Bold;
  margin-bottom: 20px;
`

const Service = styled.h4`
    height: 22px;
    opacity: 0.6;
    color: #FFFFFF;
    font-family: Calibre;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: -0.5px;
    line-height: 26px;
    margin-bottom: 24px;
    :hover{
      color: white;
      opacity: 1;
    }
    &::after {
      content: "\f078";
      font-family: "Font Awesome 5 Pro Regular";
      height: 18px;
      width: 16px;
      font-size: 18px;
      font-weight: 300;
      letter-spacing: 0;
      line-height: 24px;
      text-align: right;
      color: #FFFFFF;
      margin-left: 24px;
      opacity: 0.6;
  }
    opacity: ${props => props.indicator ? 1 : .6};
    .accordion-title {
      font-weight: 600;
      cursor: pointer;
      color: #666;
      padding: 0.5em 1.5em;
      border: solid 1px #ccc;
      border-radius: 1.5em;
      display: flex;
      justify-content: space-between;
      align-items: center;
    
      &::after {
        content: "";
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid currentColor;
      }
    
      &:hover,
      &.open {
        color: black;
      }
    
      &.open {
        &::after {
          content: "";
          border-top: 0;
          border-bottom: 5px solid;
        }
      }
    }
`
const Services  = styled.h4`
height: 22px;
opacity: 0.6;
color: #FFFFFF;
font-family: Calibre;
font-size: 22px;
font-weight: 700;
letter-spacing: -0.5px;
line-height: 26px;
margin-bottom: 24px;
:hover{
  color: white;
  opacity: 1;
}
&::after {
  content: "\f077";
  font-family: "Font Awesome 5 Pro Regular";
  height: 18px;
  width: 16px;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 24px;
  text-align: right;
  color: #FFFFFF;
  margin-left: 24px;
  opacity: 0.6;
}
opacity: ${props => props.indicator ? 1 : .6};
.accordion-title {
  font-weight: 600;
  cursor: pointer;
  color: #666;
  padding: 0.5em 1.5em;
  border: solid 1px #ccc;
  border-radius: 1.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &::after {
    content: "";
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid currentColor;
  }

  &:hover,
  &.open {
    color: black;
  }

  &.open {
    &::after {
      content: "";
      border-top: 0;
      border-bottom: 5px solid;
    }
  }
}
`
const Content = styled.div`
  width: 311px;
  color: #FFFFFF;
  font-family: Calibre Regular;
  font-size: 20px;
  letter-spacing: 0;
  line-height: 28px;
  p{
    width: 311px;
    color: #FFFFFF;
    font-family: Calibre Regular;
    font-size: 18px;
    letter-spacing: 0;
    line-height: 28px;
    margin-bottom: 10px;
  }
`
const LearnMore = styled.h4`
  height: 20px;
  width: 90px;
  color: #FECF09;
  font-family: Calibre Medium;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 20px;
  border-bottom: 1px solid #FECF09;
  margin-bottom: 17px;
 
`
const Lern = styled.div`
  display: flex;
   &::after{
    content: "\f178";
    font-family: "Font Awesome 5 Pro Regular";
    height: 18px;
    line-height: 16px;
    font-size: 18px;
    color: #FECF09;
    padding: 0px 0.6rem;
  }
`