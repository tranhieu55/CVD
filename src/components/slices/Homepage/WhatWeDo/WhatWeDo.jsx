import React, { useState, useEffect } from "react"
import styled from "styled-components"
import WhatWeDoDesktop from "./desktop/WhatWeDoDesktop"
import WhatWeDoMobile from "./mobile/WhatWeDoMobile"

export default function WhatWeDo(props) {
  console.log(props)

  const { input } = props
  const { fields } = input
  const defaultService = JSON.stringify(fields[0].service[0].text)
  const defaultContent = fields[0].content
  const defaultIndicator = 0

  const heading = input.primary.title[0].text
  console.log(props)
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
    console.log(i)
  }

  return (
    <Skew>
      <WhatWeDoDesktop props={props}/>
      <WhatWeDoMobile props={props}/>
    </Skew>
  )
}

const Skew = styled.div`
  margin-top: 200px;
  background-color: #101010;
  display: block;
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
`