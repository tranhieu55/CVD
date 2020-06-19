import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { RichText } from "prismic-reactjs"

const ImageWithSideText = ({ input }) => {
  console.log("ImageWithSideText input", input)
  // const title = input.primary.title[0].text
  return (
    <Container>
      {/* <Title>{title}</Title> */}
      {/* <Content className="content">{RichText.render(content)}</Content> */}
    </Container>
  )
}

export default ImageWithSideText

ImageWithSideText.propTypes = {
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
