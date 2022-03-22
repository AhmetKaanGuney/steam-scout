import React from 'react'
import Reviews from './Reviews.js'
import AppSnippet from './AppSnippet.js'
import {calculateReviews, getReviewState, formatDate, dateToString} from "../utils.js"
import winIcon from "../assests/icons/windows-white.png"
import macIcon from "../assests/icons/mac-white.png"
import linIcon from "../assests/icons/linux-white.png"

export default function ApplistItem({app}) {
  // Get tag names as comma seperated string
  const tags = (() => {
    // Check if tags has any item
    if (Object.keys(app.tags).length <= 0) {
      return ""
    }
    
    let tagList = [];
    app.tags.sort((a, b) => {
      return b.votes - a.votes;
    })
    for (let i of app.tags) {
      tagList.push(i.name);
    }
    // Check title length
    return tagList.join(", ");
  })();

  const platformIcons = {
    windows: winIcon,
    mac: macIcon,
    linux: linIcon
  }
  const releaseDate = dateToString(formatDate(app.releaseDate));

  return (
    <li className='applist-item'>
      <div className="item-left">
        <img src={app.headerImage} alt="item-header" className='item-header' />
        <p className='item-under-header'>
          <span className='item-release-date'>{releaseDate}</span>
          <Reviews classes={["item-reviews"]} positive={app.positiveReviews} negative={app.negativeReviews} />
        </p>
      </div>
      <div className="item-overflow title-wrapper">
        <p className='item-title'>{app.name}</p>
      </div>
        <div className='item-details'>
          <div className='item-platforms'>
            {
              ["windows", "mac", "linux"].map(i => {
                if (app[i]) {
                  return (<img className='item-platform-icon' src={platformIcons[i]} alt={i+"-icon"} key={parseInt(app["app_id"]) + i + "-icon"} />)
                }
              })
            }
          </div>
          <br />
          <div className="item-overflow">
            <p className='item-tags'>{tags}</p>
          </div>
          <div style={{clear: "left"}}></div>
        </div>
    </li>
  )
}
