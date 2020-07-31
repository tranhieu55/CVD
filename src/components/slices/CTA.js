import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { theme } from "../../assets/global/Theme"
import Button from "../bits/Button"

const CTA = ({ input }) => {
  const heading = input.primary.title[0].text
  const subheading = input.primary.subtitle[0].text

  return (
    <Container>
      <Heading>{heading}</Heading>
      <SubHeading>{subheading}</SubHeading>
      <ButtonWrapper>
        <Button content={"Get in touch"} yellowWhite />
      </ButtonWrapper>
    </Container>
  )
}

export default CTA

CTA.propTypes = {
  input: PropTypes.object.isRequired,
}

const Heading = styled.h2`
  text-align: center;
  font-size: 4rem;
  width: 25%;
  line-height: 1;
  margin: auto;
  color: white;

  @media (max-width: 769px) {
    text-align: center;
    font-size: 2.25rem;
    width: 75%;
  }
`
const SubHeading = styled.p`
  text-align: center;
  width: 75%;
  font-size: 2rem;
  line-height: 1;
  margin: auto;
  color: white;

  @media (max-width: 769px) {
    text-align: center;
    font-size: 1.25rem;
    width: 90%;
  }
`
const ButtonWrapper = styled.div`
  margin: auto;
  margin-top: 15px;
  div {
    margin: auto;
  }
`

const Container = styled.div`
  margin-top: 150px;
  padding-bottom: 150px;
  background: ${theme.Black};
  :before {
    background: inherit;
    content: "";
    transform-origin: 100%;
    z-index: 1;
    height: 150px;
    width: 100%;
    transform: skewY(-2.5deg);
    position: relative;
    display: block;
    top: -100px;
  }

  @media (max-width: 769px) {
    margin-top: 50px;
    padding-bottom: 50px;

    :before {
      background: inherit;
      content: "";
      transform-origin: 100%;
      z-index: 1;
      height: 50px;
      width: 100%;
      transform: skewY(-2.5deg);
      position: relative;
      display: block;
      top: -20px;
    }
  }
`
