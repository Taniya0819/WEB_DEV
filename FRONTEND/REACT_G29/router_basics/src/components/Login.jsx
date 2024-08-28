import React, { useRef, useState } from 'react'

function Login() {
    let ref = useRef(null)
    let [new_name, setUsername] = useState("")

    let login = () => {
        setUsername(ref.current.value)
    }

  return (
    <div>
    
    </div>
  )

export default Login 
