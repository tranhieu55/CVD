import React from "react"
import styled, { css } from "styled-components"

// accepts any valid css margin bottom value, including units

export default function Spacer(props) {
  return <Space marginBottom={props.marginBottom}></Space>
}

const Space = styled.div`
  ${props =>
    props.marginBottom &&
    css`
      margin-bottom: ${props.marginBottom};
    `}
`
