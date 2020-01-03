import React from "react"

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

const initialState = {
  auth: {
    currentUser: null
  }
}

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_CURRENT_USER": {
      return {
        ...state,
        auth: {
          ...state.auth,
          currentUser: action.payload,
        },
      }
    }
    default:
      throw new Error("Bad Action Type")
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <GlobalStateContext.Provider value= { state } >
    <GlobalDispatchContext.Provider value={ dispatch }>
      { children }
      < /GlobalDispatchContext.Provider>
      < /GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider