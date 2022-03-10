import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <nav>
      Navbar---
      <Link to='/'>Homepage</Link>---
      <Link to='/GetAppDetails'>GetAppDetails</Link>
    </nav>
  )
}
