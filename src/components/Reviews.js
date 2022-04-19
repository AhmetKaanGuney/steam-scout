import React from 'react'
import { getReviewState } from '../utils.js'

export default function Reviews({rating, classes}) {
  const reviewState = getReviewState(rating);
  return (
    <span className={'reviews ' + classes} state={reviewState}>
      {rating === null ? "N/A" : rating + "%"}
    </span>
  )
}