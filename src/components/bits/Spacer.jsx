import React from "react"
import styled, { css } from "styled-components"

// accepts any valid css margin bottom value, including units

export default function Spacer(props) {
  return (
    <Space
      marginBottom={props.marginBottom}
      marginBottomMobile={props.marginBottomMobile}
    ></Space>
  )
}

const Space = styled.div`
  ${props =>
    props.marginBottom &&
    props.marginBottomMobile &&
    css`
      margin-bottom: ${props.marginBottom};
      @media screen and (max-width: 768px) {
        margin-bottom: ${props.marginBottomMobile};
      }
    `}
`
