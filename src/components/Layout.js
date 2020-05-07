import "./Layout.css"
import React from "react"
import styled from "styled-components"
// import Footer from "./required/Footer"
// import MainHeader from "./Header"
// import MobileHeader from "./MobileHeader"

// import MobileHeader from "./MobileHeader"

export default ({ children }) => {
  console.log(children)
  return (
    <>
      <Body id="layout-container" style={{ background: "white", zIndex: 1 }}>
        {children}
      </Body>
    </>
  )
}

const Body = styled.div`
  position: relative;
`
