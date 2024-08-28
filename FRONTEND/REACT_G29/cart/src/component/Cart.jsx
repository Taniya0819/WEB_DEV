import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../context/cart_context'

function cart() {
    const box=useContext(CartContext)

  return (
    <div>
      <button onClick={()=>box.setCart(box.cart+1)}> + </button>
      <button onClick={()=>box.setCart(box.cart-1)}> - </button>
    </div>
  )
}

export default cart