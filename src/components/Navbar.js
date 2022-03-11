import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <nav>
      <Link to='/' className='nav-item'>SteamNiche</Link>
      <Link to='/GetAppDetails' className='nav-item'>GetAppDetails</Link>
    </nav>
  )
}
