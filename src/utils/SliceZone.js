import React from "react"
import BigText from "../components/slices/BigText"
import PlatformTrio from "../components/slices/Homepage/PlatformTrio"
import ClientLogos from "../components/slices/Homepage/ClientLogos"
import WhatWeDo from "../components/slices/Homepage/WhatWeDo/WhatWeDo"
import BigImage from "../components/slices/BigImage"
import {
  TextWithBulletList,
  HalfWidthText,
  ImageWithSideText,
} from "../components/slices/Service"

import { Directions } from "../components/slices/Contact"

import ProjectTiles from "../components/slices/projects/list/ProjectTiles"
import CTA from "../components/slices/CTA"
const SliceZone = props => {
  if (props.allSlices) {
    const slice = props.allSlices.map((s, index) => {
      switch (s.type) {
        // These are the API IDs of the slices
        case "text":
          return (
            <h1 key={index} input={s}>
              im a text for testing
            </h1>
          )
        case "big_text":
          return (
            <>
              <BigText key={index} input={s} />
            </>
          )
        case "platform_trio":
          return (
            <>
              <PlatformTrio key={index} input={s} />
            </>
          )
        case "client_logos":
          return (
            <>
              <ClientLogos key={index} input={s} />
            </>
          )
        case "what_we_do":
          return (
            <>
              <WhatWeDo key={index} input={s} />
            </>
          )
        case "big_image":
          return (
            <>
              <BigImage
                key={index}
                input={s}
                context={props.context ? props.context : null}
              />
            </>
          )
        case "text_with_bullet_list":
          return (
            <>
              <TextWithBulletList
                key={index}
                input={s}
                context={props.context ? props.context : null}
              />
            </>
          )
        case "half_width_text":
          return (
            <>
              <HalfWidthText
                key={index}
                input={s}
                context={props.context ? props.context : null}
              />
            </>
          )
        case "image_with_side_text":
          return (
            <>
              <ImageWithSideText
                key={index}
                input={s}
                context={props.context ? props.context : null}
              />
            </>
          )
        case "project_tilesq":
          return (
            <>
              <ProjectTiles key={index} input={s} />
            </>
          )
        case "cta":
          return (
            <>
              <CTA key={index} input={s} />
            </>
          )
        case "directions":
          return (
            <>
              <Directions key={index} input={s} />
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
