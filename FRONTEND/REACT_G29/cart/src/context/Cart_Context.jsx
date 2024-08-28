import { createContext, useState } from "react";

export const CartContext = createContext(null)

import React from 'react'

function cart_context({children}) {
    const [cart,setCart] = useState(4)

  return (
    <CartContext.Provider
    value={{cart,setCart}}
    >
    {children}
    </CartContext.Provider>
  )
}

export default cart_context