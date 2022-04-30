import {React} from 'react'

export default function Menu({hidden, setVisibility}) {
  const handleClick = () => {
    setVisibility(prev => !prev);
  }
  return (
    <div className='menu-container' hidden={hidden}>
      <div className='menu-list'>
        <a className='menu-item' onClick={handleClick} href="/">Home - 🏠</a>

        <hr className='menu-item-divider'/>

        <a className='menu-item' onClick={handleClick} href="/about">About - 📖</a>

        <hr className='menu-item-divider'/>
        
        <div className='menu-footer'>
          <p>Steam and the Steam logo are trademarks of Valve Corporation. All other trademarks are property of their respective owners.</p>
          <p>Copyright © 2022 Ahmet Kaan Guney</p>
        </div>
      </div>
    </div>
  )
}
