import React from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"
import { RichText } from "prismic-reactjs"
import { Spacer } from "../../bits"

const HalfWidthText = props => {
  const fields = props.input.primary
  const titleLeft = fields.title_left[0]?.text
  const titleRight = fields.title_right[0]?.text
  const textLeft = fields.text_left
  const textRight = fields.text_right

  return (
    <Container context={props.context}>
      <TextRow>
        <TextCol>
          <Title>{titleLeft}</Title>
          <Text>{RichText.render(textLeft)}</Text>
        </TextCol>
        <Spacer marginBottom={"0rem"} marginBottomMobile={"1.5rem"}></Spacer>
        <TextCol>
          <Title>{titleRight}</Title>
          <Text>{RichText.render(textRight)}</Text>
        </TextCol>
      </TextRow>
      <Spacer marginBottom={"6rem"} marginBottomMobile={"1.5rem"}></Spacer>
    </Container>
  )
}

export default HalfWidthText

HalfWidthText.propTypes = {
  input: PropTypes.object.isRequired,
}

const Container = styled.div`
  ${props =>
    props.context === "service" &&
    css`
      padding: 0 3rem;
      @media screen and (max-width: 768px) {
        padding: 0;
      }
    `}
`

const TextRow = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0;
  }
`

const TextCol = styled.div`
  flex-basis: 50%;
  height: auto;
  padding: 0 1rem;
  @media screen and (max-width: 768px) {
    flex-basis: 100%;
    padding: 0;
  }
`

const Title = styled.h2`
  color: #101010;
  margin: auto;
  font-family: "Calibre Semibold";
  font-size: 2rem;
  line-height: 2rem;
  letter-spacing: -0.5px;
`

const Text = styled.div`
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: #222;
`
