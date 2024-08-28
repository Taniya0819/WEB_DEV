import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './component/Counter'
import { CounterContext } from './context/Counter_Context'

function App() {
  // const [count, setCount] = useState(0)
  const box=useContext(CounterContext)
  return (
    <>
      <h1>Its counter: {box.count}</h1>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
    </>
  )
}

export default App
