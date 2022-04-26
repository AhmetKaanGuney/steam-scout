import React, { useState, useEffect } from 'react'
import HighlightBox from './HighlightBox.js'
import AppSnippet from '../../appdata/appSnippet.js'
import nextIconSmall from '../../assets/icons/next-icon-small.svg'
import prevIconSmall from '../../assets/icons/prev-icon-small.svg'

import { enumerate } from '../../utils.js'
import './highlights.css'

export default function Highlights({items}) {
  const mediaIsMobile = window.matchMedia("(max-width: 900px)");
  const [index, setIndex] = useState(0);
  const [mediaQuery, setMediaQuery] = useState(null);
  const highlights = items.map(i => new AppSnippet(i));
  
  useEffect(() => {
    setMediaQuery(mediaIsMobile.matches ? "mobile": "desktop");

    window.addEventListener('resize', () => {
      if (mediaIsMobile.matches) {
        console.log("mobıle!");
        setMediaQuery("mobile");
      } else {
        console.log("desktop!");
        setMediaQuery("desktop");
      }
    });
  }, [])
  

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
      <p id='highlights-title'>HIGHLIGHTS</p>
      <div hidden={mediaQuery !== "mobile"}>
        <ul className='highlights-slider' id='highlights-slider' >
          {
            enumerate(highlights).map((i) => {
              return (
                <li key={"highlight-" + i[1].appid}>
                  <HighlightBox 
                    data={i[1]} 
                    selected={i[0] === index}
                  />
                </li>
              )
            })
          }
        </ul>
      </div>
      <div hidden={mediaQuery !== "desktop"} className='highlights-desktop-container'>
        <img className='highlight-btn' id='highlight-prev-btn' src={nextIconSmall} alt='higlight-button-previous' onClick={handlePrevClick} />
        <ul className='highlights-desktop'>
          {
            enumerate(highlights).map((i) => {
              return (
                <li key={"highlight-" + i[1].appid} className='highlights-desktop-item' id={i[0] === index ? 'highlights-selected' : ''}>
                  <HighlightBox 
                    data={i[1]} 
                  />
                </li>
              )
            })
          }
        </ul>
        <img className='highlight-btn' id='highlight-next-btn' src={prevIconSmall} alt='higlight-button-next' onClick={handleNextClick} />
      </div>

    </div>
  )
}
