import React from 'react'
import './highlights.css'

export default function CoverImage({imageLink}) {
  console.log("Cover image link:", imageLink);
  return (
    <div className='highlight-cover-image'>
      <img src={imageLink} alt="highlight-cover" />
    </div>
  )
}
