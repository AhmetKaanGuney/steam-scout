import React from 'react'
import HighlightInfo from './HighlightInfo.js'

export default function HighlightBox({data}) {
  return (
    <div className='highlight-box'>
      <img src={data.cover_image} alt="highlight-cover" className='highlight-cover-image' />
      <HighlightInfo data={data} />
    </div>
  )
}
