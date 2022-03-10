import React from 'react'

export default function Reviews({positive, negative}) {
  return (
    <div className='highlight-reviews'>
      ALL REVIEWS: {positive} / {negative}
    </div>
  )
}