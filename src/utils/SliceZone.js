import React from "react"
import BigText from "../components/slices/BigText"
import PlatformTrio from "../components/slices/Homepage/PlatformTrio"
import ClientLogos from "../components/slices/Homepage/ClientLogos"
import WhatWeDo from "../components/slices/Homepage/WhatWeDo/WhatWeDo"
import ProjectTiles from "../components/slices/projects/list/ProjectTiles"
const SliceZone = props => {
  if (props.allSlices) {
    const slice = props.allSlices.map(s => {
      switch (s.type) {
        // These are the API IDs of the slices
        case "text":
          return (
            <h1 key={s.id} input={s}>
              im a text for testing
            </h1>
          )
        case "big_text":
          return (
            <>
              <BigText key={s.id} input={s} />
            </>
          )
        case "platform_trio":
          return (
            <>
              <PlatformTrio key={s.id} input={s} />
            </>
          )
        case "client_logos":
          return (
            <>
              <ClientLogos key={s.id} input={s} />
            </>
          )
        case "what_we_do":
          return (
            <>
              <WhatWeDo key={s.id} input={s} />
            </>
          )

        case "project_tilesq":
          return (
            <>
              <ProjectTiles key={s.id} input={s} />
            </>
          )
        default:
          return (
            <>
              <h1>I'm not sure what i am:( </h1>
              <p>Unsupported slice detected.</p>
            </>
          )
      }
    })
    //return the slice
    return slice
  } else return false
}

export default SliceZone
