import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { RichText } from "prismic-reactjs"
import { Link } from "gatsby"

const PlatformTrio = ({ input }) => {
  const title = input.primary.title[0].text
  const content = input.primary.content
  const platforms = input.fields

  console.log(platforms)
  return (
    <>
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
                <Button yellow>
                  <ButtonText black to="">
                    Learn more
                  </ButtonText>
                </Button>
              </Inner>
            </Platform>
          )
        })}
      </Platforms>
    </>
  )
}

export default PlatformTrio

PlatformTrio.propTypes = {
  input: PropTypes.object.isRequired,
}

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
const ButtonText = styled(Link)`
  color: ${props => (props.black ? "#000000" : "yellow")};
  position: relative;
  font-weight: 600;
`

const Button = styled.div`
  border-color: ${props => (props.yellow ? "#FECF09" : "black")};
  color: ${props => (props.yellow ? "#000000" : "white")};
  padding: 15px 15px;
  text-align: center;
  border-radius: 4px;
  border: solid 2px;
  border-color: ${props => (props.yellow ? "#FECF09" : "white")};
  position: relative;
  box-sizing: border-box;
  height: 48px;
  width: 148px;
  border: 2px solid #fecf09;
  border-radius: 3px;
`