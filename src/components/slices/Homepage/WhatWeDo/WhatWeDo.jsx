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

  const heading = input.primary.title[0].text

  useEffect(() => {
    setTimeout(() => {
      console.log(`You clicked imes`)
    }, 3000)
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
  :before {
    background: inherit;
    content: "";
    transform-origin: 100%;
    z-index: 1;
    height: 250px;
    width: 100%;
    transform: skewY(3.5deg);
    position: relative;
    display: block;
  }
  @media(max-width: 600px){
    height: 640px;
    width: 100%;
    background-color: #0F1534;
    :before{
      height: 74px;
      transform: skewY(5deg);
    }
  }
  @media(min-width: 600px){
    height: 640px;
    :before{
      height: 80px;
    }
  }
  @media(min-width: 1024px){
    :before{
      height: 220px;
    }
  }
`
