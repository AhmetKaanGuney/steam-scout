import React, { useState } from 'react'
import HighlightBox from './HighlightBox.js'
import AppSnippet from './AppSnippet.js'

export default function Highlights({items}) {
  const [index, setIndex] = useState(0);
  const highlights = items.map(i => new AppSnippet(i));

  const handlePrevClick = () => {
    if (index <= 0) {
      setIndex(highlights.length - 1);
    } else {
      setIndex(prev => prev - 1)
    }
  }

  const handleNextClick = () => {
    if (index >= highlights.length - 1) {
      setIndex(0);
    } else {
      setIndex(prev => prev + 1)
    }
  } 
  return (
    <div className="highlights">
      <p id='highlights-title'>HIGHLIGHTS - INDEX: {index}</p>
      {
        <HighlightBox 
          data={highlights[index]} 
          onPrevClick={handlePrevClick}
          onNextClick={handleNextClick}
          key={"highlight-" + highlights[index].appid}
        />
      }
    </div>
  )
}
