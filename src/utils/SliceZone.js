import React from "react"
import BigText from "../components/slices/BigText"

const SliceZone = props => {
  if (props.allSlices) {
    const slice = props.allSlices.map(s => {
      switch (s.slice_type) {
        // These are the API IDs of the slices
        case "text":
          return (
            <h1 key={s.id} input={s}>
              im a text for testing
            </h1>
          )
        case "team":
          return (
            <>
              <BigText key={s.id} input={s} />
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
    return <div>{slice}</div>
  } else return false
}

export default SliceZone
