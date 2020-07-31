import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Spacer } from "./../bits"

const BigImage = props => {
  const src = props.input.primary.big_image.url

  return (
    <Container context={props.context}>
      <ImageContainer src={src}></ImageContainer>
      <Spacer marginBottom="5rem"></Spacer>
    </Container>
  )
}

export default BigImage

BigImage.propTypes = {
  input: PropTypes.object.isRequired,
}

const Container = styled.div`
  width: 100%;
  max-width: 2478px;
  margin: 0px auto;
`

const ImageContainer = styled.img`
  width: 100%;
  height: auto;
  margin: 0px auto;
`
