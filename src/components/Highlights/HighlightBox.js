import React, { useState } from 'react'
import HighlightInfo from './HighlightInfo.js'
import headerImagePlaceholder from "../../assets/images/header-image-placeholder.svg"
import './highlights.css'

export default function HighlightBox({ data }) {
  const [headerImageLoaded, setHeaderImageLoaded] = useState(false);
  const onHeaderImageLoad = () => {
    setHeaderImageLoaded(true);
  }
  return (
    <div className='highlight-box'>
      <div className="highlight-header-wrapper">
        {headerImageLoaded ? '' : <img src={headerImagePlaceholder} className='header-image-placeholder'/>}
        <img
          src={data.headerImage}
          alt="highlight-header"
          className='highlight-header-image'
          onLoad={onHeaderImageLoad}
        />
      </div>
      <HighlightInfo data={data} />
    </div>
  )
}
