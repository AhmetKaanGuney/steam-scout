import React from 'react'
import { calculateReviews, getReviewState } from '../utils.js'

export default function Reviews({positive, negative, classes}) {
  const reviewScore = Math.floor(calculateReviews(positive, negative));
  const reviewState = getReviewState(reviewScore);
  return (
    <span className={'reviews ' + classes} state={reviewState}>
      {isNaN(reviewScore) ? "N/A" : reviewScore + "%"}
    </span>
  )
}