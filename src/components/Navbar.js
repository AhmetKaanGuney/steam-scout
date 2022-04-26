import React from 'react'
import {Link} from "react-router-dom"
import navbarIcon from '../assets/icons/navbar-icon.png'
import websiteIcon from "../assets/icons/website-logo-1.png";

export default function Navbar() {
  return (
    <nav>
      <div className='limit-width'>
        <img src={navbarIcon} alt='menu' className='menu-icon'/>
        <Link to='/' className='nav-title'>
          <span className='title-steam'>Steam</span><span className='title-scout'>Scout</span>
          <img src={websiteIcon} alt='website-icon' className='website-icon'/>
        </Link>
      </div>
    </nav>
  )
}
