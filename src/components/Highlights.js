import React from 'react'
import CoverImage from './CoverImage.js'
import HighlightInfo from './HighlightInfo.js'

function Highlights({highlights}) {
  return (
    <div className="highlights">
      <h2>HIGHLIGHTS</h2>
      {
        highlights.map((h) => {
          return (
            <HighlightBox data={h} />
          )
        })
      }
    </div>
  )
}

function HighlightBox({data}) {
  return (
    <div className='higlight-box'>
      <CoverImage imageLink={data.cover_image} />
      <HighlightInfo data={data} />
    </div>
  )
}

export default Highlights