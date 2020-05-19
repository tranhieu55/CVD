import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const BigText = ({ input }) => {
  console.log("input", input)

  const heading = input.primary.text[0].text

  return (
    <>
      <div>
        <SubHeading>{heading}</SubHeading>
      </div>
    </>
  )
}

export default BigText

BigText.propTypes = {
  input: PropTypes.object.isRequired,
}

const SubHeading = styled.h2`
  text-align: center;
`
