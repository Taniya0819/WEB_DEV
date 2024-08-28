import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  let {username} = useParams()
  return (
    <div>
      <h1>Current user is : {username}</h1>
    </div>
  )
}

export default User



useref 