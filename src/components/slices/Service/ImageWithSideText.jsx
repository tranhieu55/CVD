import React from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"
import { RichText } from "prismic-reactjs"
import { Spacer } from "../../bits"

const ImageWithSideText = props => {
  const fields = props.input.primary
  const title = fields.title[0].text
  const content = fields.text
  const image = fields.image.url
  const alignImageRight = fields.image_align_right

  return (
    <React.Fragment>
      <Container>
        <ContainerImage alignImageRight={alignImageRight}>
          <Img src={image}></Img>
        </ContainerImage>
        <ContainerContent alignImageRight={alignImageRight}>
          <Title>{title}</Title>
          <Content>{RichText.render(content)}</Content>
        </ContainerContent>
      </Container>
      <Spacer marginBottom={"6rem"}></Spacer>
    </React.Fragment>
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
  ${props =>
    props.alignImageRight &&
    css`
      order: 1;
      text-align: right;
    `}
`

const Img = styled.img`
  width: 85%;
`

const ContainerContent = styled.div`
  flex-basis: 50%;
  height: auto;
  max-width: 450px;
  margin-left: auto;
  padding-right: 2rem;
  ${props =>
    props.alignImageRight &&
    css`
      margin-right: auto;
      margin-left: 0;
      padding-right: 0;
      padding-left: 5rem;
    `}
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
