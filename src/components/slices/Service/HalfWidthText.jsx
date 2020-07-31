import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { RichText } from "prismic-reactjs"

const HalfWidthText = ({ input }) => {
  const fields = input.primary
  const titleLeft = fields.title_left[0].text
  const titleRight = fields.title_right[0].text
  const textLeft = fields.text_left
  const textRight = fields.text_right

  return (
    <Container>
      <TextRow>
        <TextCol>
          <Title>{titleLeft}</Title>
          <Text className="content">{RichText.render(textLeft)}</Text>
        </TextCol>
        <TextCol>
          <Title>{titleRight}</Title>
          <Text className="content">{RichText.render(textRight)}</Text>
        </TextCol>
      </TextRow>
    </Container>
  )
}

export default HalfWidthText

HalfWidthText.propTypes = {
  input: PropTypes.object.isRequired,
}

const Container = styled.div``

const TextRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: auto;
`

const TextCol = styled.div`
  flex-basis: 50%;
  height: auto;
`

const Title = styled.h2`
  color: #101010;
  margin: auto;
`

const Text = styled.div``
