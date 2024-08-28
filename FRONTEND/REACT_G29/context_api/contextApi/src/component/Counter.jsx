import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../context/Counter_Context'

function Counter() {
    const box=useContext(CounterContext)

  return (
    <div>
      <button onClick={()=>box.setCount(box.count+1)} >Increment</button>
      <button onClick={()=>box.setCount(box.count-1)} >Decrement</button>
    </div>
  )
}

export default Counter
