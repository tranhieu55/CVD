import React from "react"
import styled, { css } from "styled-components"

// accepts any valid css value for margin top and bottom including units, and includes a divider line

export default function Spacer(props) {
  return (
    <Container props={props}>
      <Line></Line>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  ${props =>
    props &&
    css`
      margin-top: ${props.props.marginTop};
      margin-bottom: ${props.props.marginBottom};
    `}
`

const Line = styled.div`
  height: 1px;
  background-color: #e4e4e4;
`
