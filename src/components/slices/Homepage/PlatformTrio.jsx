import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { RichText } from "prismic-reactjs"
import Button from "../../bits/Button"

const PlatformTrio = ({ input }) => {
  const title = input.primary.title[0].text
  const content = input.primary.content
  const platforms = input.fields
  return (
    <Container>
      <Title>{title}</Title>
      <Content className="content">{RichText.render(content)}</Content>

      <Platforms>
        {platforms.map((platform, i) => {
          const name = platform.platform[0].text
          const desc = platform.description
          const logo = platform.logo.url
          return (
            <Platform key={i}>
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
  @media (max-width: 769px) {
    display: none;
    /* hidden for mobile version */
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
`

const Platforms = styled.div`
  display: flex;
  margin:0 auto;
  justify-content: space-between;
  position: relative;
  max-width: 1240px;
  height: 299px;
`
const Platform = styled.div`
  box-sizing: border-box;
  height: 100%;
  max-width: 306px;
  position: relative;
  display: flex;
`
const Inner = styled.div`
  width: 100%;
`

const PlatformLogo = styled.img`
  height: auto;
  display: block;
  max-width: 218px;
  height: 60px;
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
`
