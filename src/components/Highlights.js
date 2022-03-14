import React, { useState } from 'react'
import HighlightBox from './HighlightBox.js'

export default function Highlights({highlights}) {
  const [index, setIndex] = useState(0);

  const handlePrevClick = e => {
    if (index <= 0) {
      setIndex(highlights.length - 1);
    } else {
      setIndex(prev => prev - 1)
    }
  }

  const handleNextClick = e => {
    if (index >= highlights.length - 1) {
      setIndex(0);
    } else {
      setIndex(prev => prev + 1)
    }
  }

  return (
    <div className="highlights">
      <p id='highlights-title'>HIGHLIGHTS - INDEX: {index}</p>
      <HighlightBox data={highlights[index]} onPrevClick={handlePrevClick} onNextClick={handleNextClick} />
    </div>
  )
}