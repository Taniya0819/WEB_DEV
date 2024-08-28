import React, { useState } from 'react'
// import { useState } from 'react'

// let color="pink";

export default function Background_changer() {

  let [color,setColor]=useState("pink")

  return (
    <div>
      <h1 style={{backgroundColor:color}}>This is my Background Changer.</h1>
      <div className="container flex flex-row justify-center gap-5 mt-5">

        <button 
        onClick={()=>(setColor("green"))}
        className="bg-green-500">Green</button>
        <button 
        onClick={()=>(setColor("yellow"))}
        className="bg-yellow-500">Yellow</button>
        <button 
        onClick={()=>(setColor("violet"))}
        className="bg-violet-500">Violet</button>
      </div>
    </div>
  )
}
