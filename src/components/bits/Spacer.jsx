import React from "react"
import styled from "styled-components"

// accepts any valid css margin bottom value, including units

export default function Spacer(props) {
  console.log(props)
  return <div style={{ marginBottom: `${props.props}` }}></div>
}
