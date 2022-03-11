import React from 'react'
import HighlightBox from './HighlightBox.js'

export default function Highlights({highlights}) {
  return (
    <div className="highlights">
      <p id='highlights-title'>HIGHLIGHTS</p>
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