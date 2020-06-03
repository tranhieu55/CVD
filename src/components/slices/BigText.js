import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const BigText = ({ input }) => {
  const heading = input.primary.text[0].text

  return (
    <Container>
      <SubHeading>{heading}</SubHeading>
    </Container>
  )
}

export default BigText

BigText.propTypes = {
  input: PropTypes.object.isRequired,
}

const SubHeading = styled.h2`
  text-align: center;
  font-size: 3rem;
  width: 75%;
  margin: auto;
  height: auto;
  padding: 150px 0;
`
const Container = styled.div`
  margin-top: 150px;
`
