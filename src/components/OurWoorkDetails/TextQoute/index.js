import React from 'react'
import styled from 'styled-components'

export default function TextQoute(props) {
  return (
    <Container>
      {props ?
        <Qoute
          data-sal="slide-down"
          data-sal-delay="5000"
          data-sal-easing="ease"
          data-sal-duration="1000"
        >
          <TypeAliquam>
          “{props.input.primary.title_quote[0]?.text}”
          </TypeAliquam>
          <TypeAliquams>
            {props.input.primary.author_of_quote[0]?.text}
          </TypeAliquams>
    
        </Qoute>
        : <></>
      }
    </Container>
  )
}
const Qoute = styled.div`
    text-align: center;
  @media only screen and (max-width: 600px) {
      margin-bottom: 56px;
      margin-top: 45px;
  }
  @media (min-width: 600px) {
    margin-bottom:56px;
  }
  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
  @media (min-width: 1200px) {
    margin-bottom:116px;
    padding-top: 0px;
  }
  @media (min-width: 1600px) {
      max-width: 804px;
      max-height: 110px;
      margin-left: 221px;
      margin-bottom: 116px;
  }

`
const TypeAliquam = styled.h1`
  font-weight: "bold";
  font-family: "Calibre Semibold"; 
  @media only screen and (max-width: 600px){
    max-width: 570px;
    color: #222222;
    font-family: "Calibre Semibold";
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 28px;
    text-align: center;
    margin-bottom: 5px;
  }
  @media (min-width: 1600px){
    font-family: "Calibre Semibold";
    font-size: 32px;
    color: rgb(34, 34, 34);
    letter-spacing: 0px;
    line-height: 37px;
    text-align: center;
    margin-bottom: 8px;
    font-weight: 600 !important;
    padding-top: 5px;
    padding-left: 6px;
  }
`
const TypeAliquams = styled.h5`
  color: #262626;
  @media only screen and (max-width: 600px){
    letter-spacing: 0px;
    font-size: 18px;
    line-height: 24px;
    font-family: 'Calibre Regular';
    padding-top: 2px;
    margin-bottom: -2px;
    padding-right: 15px;
  }
  @media (min-width: 1600px){
    font-family: "Calibre Regular";
    font-size: 18px;
    margin-bottom: 0px;
    font-weight: 400;
    line-height: 33px;
    color: #262626;
    padding-right: 18px;
  }
`

const Container = styled.div`
max-width: 1240px;
margin: 0 auto;
@media only screen and (max-width: 600px) {
  margin-left: 16px;
  margin-right: 16px;
}
@media (min-width: 601px) {
  .wrap-header {
    width: 100vw;
  }
  max-width: 585px;
}
@media (min-width: 992px) {
  max-width: 780px;
}
@media (min-width: 1024px) {
  max-width: 900px;
}
@media (min-width: 1200px) {
  max-width: 1024px;
}

@media (min-width: 1400px) {
  max-width: 1151px;
}

@media (min-width: 1600px) {
  max-width: 1240px;
}

@media (min-width: 1800px) {
  max-width: 1380px;
}
`