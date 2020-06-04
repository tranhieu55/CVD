import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export default function Button(props) {
  console.log(props)
  return (
    <Container black={props.yellowBlack}>
      <ButtonText yellow={props.yellowBlack} white={props.yellowWhite} to="">
        {props.content}
      </ButtonText>
    </Container>
  )
}

const ButtonText = styled(Link)`
  color: ${props => (props.yellow ? "#000000" : "yellow")};
  color: ${props => (props.white ? "white" : "")};
  position: relative;
  font-weight: 600;
`
const Container = styled.div`
  border-color: ${props => (props.yellow ? "#FECF09" : "black")};
  padding: 15px 15px;
  text-align: center;
  border-radius: 4px;
  border: solid 2px;
  position: relative;
  box-sizing: border-box;
  height: 48px;
  width: 148px;
  border: 2px solid #fecf09;
  border-radius: 3px;
`
