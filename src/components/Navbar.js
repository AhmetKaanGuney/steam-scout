import React from 'react'
import {Link} from "react-router-dom"
import navbarIcon from '../assets/icons/navbar-icon.svg'
import websiteIcon from "../assets/icons/website-logo-with-shadow.svg";

export default function Navbar({onMenuClick}) {
  const handleMenuClick = () => {
    onMenuClick(prev => !prev);
  }
  return (
    <nav>
      <div className='limit-width'>
        <img src={navbarIcon} alt='menu' className='menu-icon' onClick={handleMenuClick}/>
        <Link to='/' className='nav-link'>
          <h1 className='nav-title'>
            <span className='title-steam'>Steam</span><span className='title-scout'>Scout</span>
          </h1>
          <img src={websiteIcon} alt='steam-scout-icon' className='website-icon'/>
        </Link>
      </div>
    </nav>
  )
}
