import React, { useState } from 'react'
import HighlightInfo from './HighlightInfo.js'
import nextIconSmall from '../assests/icons/next-icon-small.svg'
import headerImagePlaceholder from "../assests/images/header-image-placeholder.svg"

export default function HighlightBox({data, onNextClick, onPrevClick}) {
  const [headerImageLoaded, setHeaderImageLoaded] = useState(false);
  const onHeaderImageLoad = () => {
    setHeaderImageLoaded(true);
  }
  return (
    <div className='highlight-box'>
      <div className="highlight-header-wrapper">
        <img className='highlight-btn' id='highlight-prev-btn' src={nextIconSmall} alt='higlight-button-previous' onClick={onPrevClick} />
        <img 
          src={headerImageLoaded ? data.headerImage: headerImagePlaceholder}
          alt="highlight-header"
          className='highlight-header-image'
          onLoad={onHeaderImageLoad}
        />
        <img className='highlight-btn' id='highlight-next-btn' src={nextIconSmall} alt='higlight-button-next' onClick={onNextClick} />
      </div>
      <HighlightInfo data={data} />
    </div>
  )
}
