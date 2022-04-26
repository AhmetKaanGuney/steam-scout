import React from 'react'
import loadingIcon from "../../assests/icons/loading-icon.svg"

export default function LoadingIcon() {
  return (
    <div className='loading-icon-wrapper'>
      <img className='loading-icon' src={loadingIcon} alt='loading-icon' />
    </div>
  )
}
