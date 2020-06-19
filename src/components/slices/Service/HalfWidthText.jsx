import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { RichText } from "prismic-reactjs"

const HalfWidthText = ({ input }) => {
  console.log(`HalfWidthText input`, input)
  // const fields = input.fields[0]

  return <Container>{/* <Title>{title}</Title> */}</Container>
}

export default HalfWidthText

HalfWidthText.propTypes = {
  input: PropTypes.object.isRequired,
}

const Container = styled.div``
const Title = styled.h2`
  color: #101010;
  margin: auto;
`

const TextRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: auto;
  border: 2px solid red;
`

const TextCol = styled.div`
  flex-basis: 50%;
  height: auto;
  border: 1px solid blue;
`
