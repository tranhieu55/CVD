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
          let name = platform.platform[0].text
          let desc = platform.description
          let logo = platform.logo.url
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
  :before {
    background: inherit;
    content: "";
    transform-origin: 100%;
    z-index: -1;
    height: 250px;
    width: 100%;
    transform: skewY(1.5deg);
    position: relative;
    display: block;
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
`

const Content = styled.div`
  margin: auto;
  max-width: 928px;
  color: #222222;
  font-size: 24px;
  letter-spacing: 0;
  line-height: 30px;
  text-align: center;
`

const Platforms = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  position: relative;
`
const Platform = styled.div`
  box-sizing: border-box;
  height: 408px;
  width: 400px;
  border: 1px solid #f8f8f8;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 4px 4px 24px 0 rgba(0, 0, 0, 0.08);
  margin: 25px;
  position: relative;
  display: flex;
`
const Inner = styled.div`
  width: 80%;
  margin: auto;
`

const PlatformLogo = styled.img`
  height: auto;
  display: block;
  width: 250px;
`
const PlatformTitle = styled.h4``

const PlatformDesc = styled.div`
  color: #222222;
  font-size: 20px;
  letter-spacing: 0;
  line-height: 28px;
  margin: auto;
`
