import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const BigImage = ({ input }) => {
  const src = input.primary.big_image.url

  return (
    <Container>
      <ImageContainer src={src}></ImageContainer>
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
