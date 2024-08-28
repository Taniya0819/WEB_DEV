import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import cart from './component/cart'
import { CounterContext } from './context/cart_context'

function App() {
  // const [count, setCount] = useState(0)
  const box=useContext(CartContext)

  return (
    <>
    <h1>Cart Products: {box.cart}</h1>
    <Cart/>
    </>
  )
}

export default App
