import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { RichText } from "prismic-reactjs"

const ImageWithSideText = props => {
  console.log(props)
  const fields = props.input.primary
  const title = fields.title[0].text
  const content = fields.text
  const image = fields.image.url
  console.log(title, content, image)

  return (
    <Container>
      <ContainerImage>
        <Img src={image}></Img>
      </ContainerImage>
      <ContainerContent>
        <Title>{title}</Title>
        <Content>{RichText.render(content)}</Content>
      </ContainerContent>
    </Container>
  )
}

export default ImageWithSideText

ImageWithSideText.propTypes = {
  input: PropTypes.object.isRequired,
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: auto;
  width: 100%;
`

const ContainerImage = styled.div`
  flex-basis: 50%;
  height: auto;
`

const Img = styled.img`
  width: 93.75%;
`

const ContainerContent = styled.div`
  flex-basis: 50%;
  height: auto;
  max-width: 450px;
  margin-left: auto;
  padding-right: 2rem;
`

const Title = styled.h2`
  font-size: 2rem;
  line-height: 2rem;
  letter-spacing: -0.5px;
  color: #101010;
  font-family: "Calibre Semibold";
  margin: 0;
`

const Content = styled.div`
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: #222;
`
