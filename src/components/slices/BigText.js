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
  max-width: 1258px;
  width: 75%;
  margin: auto;
  height: auto;
  padding: 150px 0;
  @media (max-width: 769px) {
    text-align: center;
    font-size: 2rem;
    width: 90%;
  }
`
const Container = styled.div`
  padding-top: 150px;
  @media (max-width: 769px) {
    padding-top: 0;
  }
`
