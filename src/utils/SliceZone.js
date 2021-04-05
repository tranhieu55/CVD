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

import ProjectTiles from "../components/ListBlog"
import CTA from "../components/slices/CTA"
import TextBackground from "../components/OurWoorkDetails/TextBackground"
import ImageSlider from "../components/OurWoorkDetails/ImageSlider"
import TextSolution from "../components/OurWoorkDetails/TextSolution"
import ContentPercent from "../components/OurWoorkDetails/ContentPercent"
import ListSlider from "../components/OurWoorkDetails/ListSlider"
import TextQoute from "../components/OurWoorkDetails/TextQoute"
import Cardwhatwedo from "../components/Whatwedo"
import OneImage from "../components/OurWoorkDetails/OneImage"
import Instagram from '../components/Instagram'

const SliceZone = (props) => {
  if (props.allSlices) {
    const slice = props.allSlices.map((s, index) => {
      switch (s.type || s.__typename) {
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
        case "ourworkitem_description":
          return (
            <>
              <TextBackground key={index} input={s} />
            </>
          )
        case "one_image": 
            return (
              <OneImage key={index} input={s}/>
            )
        case "list_image":
          return (
            <>
              <ImageSlider key={index} input={s} />
            </>
          )
        case "title_solution":
          return (
            <>
              <TextSolution key={index} input={s} />
            </>
          )
        case "statistical_ourwork_item_":
          return (
            <>
              <ContentPercent key={index} input={s} />
            </>
          )
        case "slider_image":
          return (
            <>
              <ListSlider key={index} input={s} />
            </>
          )
        case "text_quote":
          return (
            <>
              <TextQoute key={index} input={s} />
            </>
          )
        case "":
          return (
            <>
              <Instagram key={index} input={s} />
            </>
          )
        case "PRISMIC_Whatwedo_pageBodyWhat_we_do_item":
          return (
            <Cardwhatwedo key={index} input={{ ...s , total:props.allSlices.length}} index={index}/>
          )
        default:
          return (
            <>
            </>
          )
      }
    })
    //return the slice
    return slice
  } else {
    return false
  }
}

export default SliceZone
