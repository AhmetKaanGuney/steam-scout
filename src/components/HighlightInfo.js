import React from 'react'
import Reviews from './Reviews.js'
import Tags from './Tags.js'

export default function HighlightInfo({data}) {
  return (
    <div className='highlight-info'>
      <Reviews
        positive={data.reviews.positive}
        negative={data.reviews.negative}
      />
      <Tags tags={data.tags}/>
    </div>
  )
}