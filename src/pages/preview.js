import React from "react"
import ThreeColumnProfile from "../components/ThreeColumnProfile"
import styled from "styled-components"

function Preview() {
  return (
    <>
      <ThreeColumnProfile />
    </>
  )
}

export default Preview

const Titles = styled.h4`
  font-family: "Calibre Regular";
  height: 28px;
  width: 191px;
  color: #6f6f6f;
  font-size: 24px;
  letter-spacing: 0;
  line-height: 29px;
  padding-left: 14px;
  padding-bottom: 17px;
  padding-top: 97px;
`
