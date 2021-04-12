import React, { useState } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { RichText } from "prismic-reactjs"
import Button from "../../bits/Button"

const PlatformTrio = ({ input }) => {
  const title = input.primary.title[0].text
  const content = input.primary.content
  const platforms = input.fields
  const [indicator, setindicator] = useState(0);

  function updateSelected(i) {
    setindicator(i)
  }

  return (
    <Container>
      <Title>{title}</Title>
      <Content className="content">{RichText.render(content)}</Content>

      <Platforms className='md:overflow-scroll'>
        {platforms.map((platform, i) => {
          const name = platform.platform[0].text
          const desc = platform.description
          const logo = platform.logo.url
          return (
            <Platform key={i} onClick={() => updateSelected(i)} indicator={i == indicator}>
              <div className='white'></div>
              <Inner>
                <PlatformLogo src={logo} />
                {/* <PlatformTitle>{name}</PlatformTitle> */}
                <PlatformDesc className="content">
                  {RichText.render(desc)}
                </PlatformDesc>
                <Button yellowBlack content={"Learn more"} />
              </Inner>
            </Platform>
          )
        })}
      </Platforms>
    </Container>
  )
}

export default PlatformTrio

PlatformTrio.propTypes = {
  input: PropTypes.object.isRequired,
}

const Container = styled.div`
  background: #f8f8f8;
  height: 973px;
  :before {
    background: inherit;
    content: "";
    transform-origin: 100%;
    z-index: -1;
    height: 163px;
    width: 100%;
    transform: skewY(1.5deg);
    position: relative;
    display: block;
    top: -79px;
  }
  @media(min-width: 600px){
    :before{
      top: -37px;
      height: 80px;
      transform: skewY(3.7deg);
    }
  }
  @media(max-width: 600px){
    position: relative;
    margin-top: 10px;
    height: 803px;
    :before{
      top: -25px;
      height: 61px;
      transform: skewY(3.7deg);
    }
  }
  @media(min-width: 1024px){
    :before{
     height: 120px;
    }
  }
  @media(min-width: 1366px){
    :before{
      height: 163px;
      top: -79px;
    }
  }
  @media(min-width: 1600px){
    :before{
      height: 204px;
      top: -79px;
    }
  }
`
const Title = styled.h2`
  height: 144px;
  max-width: 959px;
  color: #101010;
  font-size: 80px;
  font-weight: bold;
  letter-spacing: -2px;
  line-height: 72px;
  text-align: center;
  margin: auto;
  font-family: Calibre Bold;
  position: relative;
  top: -79px;
  @media(max-width: 600px){
    font-size: 40px;
    font-weight: bold;
    letter-spacing: 0px;
    line-height: 38px;
    text-align: center;
    top: -41px;
    height: 114px;
    word-spacing: -3.1px;
  }
  @media(min-width: 601px){
    font-size: 56px;
    margin: 0px 32px;
  }
  @media(min-width: 1366px){
    font-size: 80px;
    margin: auto;
  }
`

const Content = styled.div`
  margin: auto;
  max-width: 928px;
  height: 120px;
  color: #222222;
  font-size: 24px;
  letter-spacing: 0;
  line-height: 30px;
  text-align: center;
  font-family: Calibre Regular;
  position: relative;
  top: -59px;
  @media(max-width: 600px){
    font-size: 20px;
    letter-spacing: 0;
    line-height: 24px;
    text-align: center;
    top: -35px;
    height: 192px;
    margin: 0 auto;
    p{
      width: 100%;
      margin-bottom: 23px;
      word-spacing: 1.2px;
    }
  }
`

const Platforms = styled.div`
  display: flex;
  margin:0 auto;
  justify-content: space-between;
  position: relative;
  max-width: 1240px;
  height: 299px;
  @media(max-width: 600px){
    $color: white;
    margin-top: 23px;
    padding-left: 49px;
    height: 343px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    width: 100%;
    position: relative;
    ::-webkit-scrollbar {
      height: 3px; 
      width: 50%;
    }
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px #d5d5d5; 
      border-radius: 10px;
      margin-right: 80px;
      margin-left: 90px;
    }
     
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #BBBBBB; 
      border-radius: 10px;
    }
    
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #b30000; 
    }
  }
  @media(min-width: 600px){
    $color: white;
    margin-top: 23px;
    padding-left: 49px;
    height: 343px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    width: 100%;
    position: relative;
    ::-webkit-scrollbar {
      height: 3px; 
      width: 50%;
    }
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px #d5d5d5; 
      border-radius: 10px;
      margin-right: 80px;
      margin-left: 90px;
    }
     
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #BBBBBB; 
      border-radius: 10px;
    }
    
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #b30000; 
    }
  }
`
const Platform = styled.div`
  box-sizing: border-box;
  height: 100%;
  max-width: 306px;
  position: relative;
  display: flex;
  @media(max-width: 600px){
    height: 274px;
    width: 216px;
    margin-right: ${props => props.indicator === 0  ? '0px': '64px'};
  }
  @media(min-width: 600px){
    margin-right: 16px;
  }
`
const Inner = styled.div`
  width: 100%;
`

const PlatformLogo = styled.img`
  height: auto;
  display: block;
  max-width: 218px;
  height: 60px;
  background: #f8f8f8;
  @media(max-width: 600px){
    height: 48px;
    width: 170px;
  }
`
const PlatformTitle = styled.h4``

const PlatformDesc = styled.div`
  height: 112px;
  width: 306px;
  color: #222222;
  font-family: Calibre Regular;
  font-size: 20px;
  letter-spacing: 0;
  line-height: 28px;
  margin-top: 30px;
  margin-bottom: 49px;
  p{
    margin-bottom: 0px;
    height: 112px;
    width: 306px;
    color: #222222;
    font-family: Calibre Regular;
    font-size: 20px;
    letter-spacing: 0;
    line-height: 28px;
  }
  @media(max-width: 600px){
    height: 144px;
    width: 216px;
    font-size: 18px;
    letter-spacing: 0;
    line-height: 24px;
    margin-top: 16px;
    margin-bottom: 18px;
    p{
      height: 144px;
      width: 216px;
      font-size: 18px;
      letter-spacing: 0;
      line-height: 24px;
      padding-top: 4px;
    }
  }
`
