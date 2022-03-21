import React from 'react'
import AppSnippet from './AppSnippet.js'
import {calculateReviews, getReviewState, formatDate, dateToString} from "../utils.js"
import winIcon from "../assests/icons/windows-white.png"
import macIcon from "../assests/icons/mac-white.png"
import linIcon from "../assests/icons/linux-white.png"

export default function ApplistItem({app}) {
  let tagsMerge = [];
  if (Object.keys(app.tags).length > 0) {
    app.tags.sort((a, b) => {
      return b.votes - a.votes;
    })
    for (let i of app.tags) {
      tagsMerge.push(i.name);
    }
  }
  const platformIcons = {
    windows: winIcon,
    mac: macIcon,
    linux: linIcon
  }
  const tagsText = tagsMerge.join(", ")
  const releaseDate = dateToString(formatDate(app.releaseDate));
  const reviewScore = Math.floor(calculateReviews(app.positiveReviews, app.negativeReviews));
  const reviewState = getReviewState(reviewScore);

  return (
    <li className='applist-item'>
      <div className="item-left">
        <img src={app.headerImage} alt="item-header" className='item-header' />
        <p className='item-under-header'>
          <span className='item-release-date'>{releaseDate}</span>
          <span className='item-reviews' state={reviewState} >{reviewScore + '%'}</span>
        </p>
      </div>
      <p className='item-title'>{app.name}</p>
      <div className='item-details'>
        <div className='item-platforms'>
          {
            ["windows", "mac", "linux"].map(i => {
              if (app[i]) {
                return (
                  <img 
                    className='item-platform-icon' 
                    src={platformIcons[i]} alt={i+"-icon"} 
                    key={parseInt(app["app_id"]) + i + "-icon"}   
                  />
                )
              }
            })
          }
        </div>
        <br />
        <p className='item-tags'>{tagsText}</p>
        <div style={{clear: "left"}}></div>
      </div>
    </li>
  )
}
