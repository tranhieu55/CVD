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
  margin: 0px auto;
  height: auto;
  padding-top: 134px;
  padding-bottom: 140px;
  font-family: Calibre Semibold;
  line-height: 52px;
  color: #101010;
  @media(max-width: 600px){
    padding-top: 10px;
    padding-bottom: 56px;
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 29px;
    text-align: center;
    margin: 0px 24px;
    word-spacing: -1.5px;
  }
  @media (min-width: 600px) {
    padding-top: 34px;
    padding-bottom: 56px;
  }
  @media(min-width: 1024px){
    padding-top: 134px;
    padding-bottom: 140px;
  }
`
const Container = styled.div`
  @media (min-width: 600px) {
    margin: 0px 16px;
  }
`
