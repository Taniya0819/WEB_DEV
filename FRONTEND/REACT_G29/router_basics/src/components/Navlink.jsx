import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function Navlink() {
  return (
    <div className='navigation'>
      <nav>
        <Link to = "/Home">Home</Link>
        <Link to = "/Products">Products</Link>
        <Link to = "/Services">Services</Link>
        <Link to = "/User">User</Link>
      </nav>
      </div>
  )
}

export default Navlink