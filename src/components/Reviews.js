import React from 'react'
import { calculateReviews, getReviewState } from '../utils.js'

export default function Reviews({positive, negative, classes}) {
  const reviewScore = Math.floor(calculateReviews(positive, negative));
  const reviewState = getReviewState(reviewScore);
  let additionalClasses = "";
  if (classes !== undefined) {
    additionalClasses = classes.join(" ")
  }
  return (
    <span className={'reviews ' + additionalClasses} state={reviewState}>{reviewScore + "%"}</span>
  )
}