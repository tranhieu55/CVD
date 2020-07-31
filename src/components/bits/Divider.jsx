import React from "react"
import styled from "styled-components"

// accepts any valid css value for margin top and bottom including units, and includes a divider line

export default function Spacer(props) {
  console.log(props)
  return (
    <div
      style={{
        marginTop: props.marginTop,
        marginBottom: props.marginBottom,
        width: `100%`,
      }}
    >
      <Line></Line>
    </div>
  )
}

const Line = styled.div`
  height: 1px;
  background-color: #e4e4e4;
`
