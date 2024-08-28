import React from 'react'
import { useState, useRef } from 'react';

export default function Text_changer_g29() {

  // useState , useRef
  let [text,setText]=useState("This is my text Changer")
  let nayaText = useRef(null)


  return (
    <div>
      <h1>{text}</h1>
      <input type="text" id='text29' ref={nayaText} />
      <br />
      <button onClick={()=>setText(nayaText.current.value) }>Enter</button>
    </div>
  )
}

