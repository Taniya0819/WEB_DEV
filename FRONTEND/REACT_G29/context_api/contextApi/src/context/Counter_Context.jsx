import { createContext, useState } from "react";

// creating context
export const CounterContext = createContext(null)

import React from 'react'

function Context_Provider ({children}) {
    const [count,setCount] = useState(4)
  return (
    <CounterContext.Provider
    value={{count,setCount}}
    >
    {children}
    </CounterContext.Provider>
  )
}

export default Context_Provider
