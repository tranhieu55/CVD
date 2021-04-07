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
  font-size: 48px;
  max-width: 1258px;
  margin: auto;
  height: auto;
  padding-top: 134px;
  padding-bottom: 140px;
  font-family: Calibre Semibold;
  line-height: 52px;
  color: #101010;
  @media (max-width: 769px) {
    text-align: center;
    font-size: 2rem;
    width: 90%;
  }
  @media(max-width: 600px){
    padding-top: 30px;
    padding-bottom: 56px;
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 29px;
    text-align: center;
    width: 327px;
  }
`
const Container = styled.div`
  @media (max-width: 769px) {
    padding-top: 0;
  }
`
