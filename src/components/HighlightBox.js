import React from 'react'
import HighlightInfo from './HighlightInfo.js'
import nextIcon from '../assests/icons/next-icon.svg'

export default function HighlightBox({data, onNextClick, onPrevClick}) {
  return (
    <div className='highlight-box'>
      <img className='highlights-btn' id='highlight-prev-btn' src={nextIcon} alt='higlight-button-previous' onClick={onPrevClick} />
      <img src={data.cover_image} alt="highlight-cover" className='highlight-cover-image' />
      <img className='highlights-btn' id='highlight-next-btn' src={nextIcon} alt='higlight-button-next' onClick={onNextClick} />
      <HighlightInfo data={data} />
    </div>
  )
}
