import React, { useReducer } from "react"

export const OurWorkStateContext = React.createContext()
export const OurWorkDispatchContext = React.createContext()

const initialState = {
  listSelected: "all",
}

function reducer(state, action) {
  switch (action.type) {
    case "ADD_FILTER_ITEM":
      console.log({ action })
      return {
        ...state,
        listSelected: action.value,
      }

    case "RESET_FILTER":
      return {
        ...state,
        listSelected: "all",
      }
    default:
      return { ...state }
  }
}

function OurWorkContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <OurWorkStateContext.Provider value={state}>
      <OurWorkDispatchContext.Provider value={dispatch}>
        {children}
      </OurWorkDispatchContext.Provider>
    </OurWorkStateContext.Provider>
  )
}

export default OurWorkContextProvider
