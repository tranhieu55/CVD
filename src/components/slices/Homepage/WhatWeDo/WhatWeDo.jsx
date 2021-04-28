import React, { useState, useEffect } from "react"
import styled from "styled-components"
import WhatWeDoDesktop from "./desktop/WhatWeDoDesktop"
import WhatWeDoMobile from "./mobile/WhatWeDoMobile"
import { theme } from "../../../../assets/global/Theme"

export default function WhatWeDo(props) {
  const { input } = props
  const { fields } = input
  const defaultService = JSON.stringify(fields[0].service[0].text)
  const defaultContent = fields[0].content
  const defaultIndicator = 0

  useEffect(() => {
    setTimeout(() => {}, 3000)
  })

  // Declare a new state variable, which we'll call "count"
  const [service, setService] = useState(defaultService)
  const [content, setContent] = useState(defaultContent)
  const [indicator, setindicator] = useState(defaultIndicator)

  function updateSelected(i) {
    setService(fields[i].service[0].text)
    setContent(fields[i].content)
    setindicator(i)
  }

  return (
    <Skew>
      <WhatWeDoDesktop props={props} />
      <WhatWeDoMobile props={props} />
    </Skew>
  )
}

const Skew = styled.div`
  background-color: ${theme.Black};
  display: block;
  height: 808px;
  clip-path: polygon(0px 0%, 100% 81px, 100% 100%, 0% 100%);
  position: relative;
  @media(max-width: 993px){
    height: auto;
    padding-bottom: 140px;
  }
  @media(max-width: 600px){
    // height: 672px;
    height: auto;
    padding-bottom: 95px;
    width: 100%;
    background-color: #0f1534;
    clip-path: polygon(0px 0%, 100% 41px, 100% 100%, 0% 100%);
    top: -41px;
  }
  @media(min-width: 600px){
    top: -81px;
    background-color: #0f1534;
  }
  @media (min-width: 1024px) {
  }
  @media (min-width: 1366px) {
    height: 908px;
    top: -81px;
  }
`
