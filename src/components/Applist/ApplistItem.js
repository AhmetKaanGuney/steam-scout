import React from 'react'
import Reviews from '../Reviews.js'
import {dateToString, steamStoreApi} from "../../utils.js"
import winIcon from "../../assets/icons/windows-white.png"
import macIcon from "../../assets/icons/mac-white.png"
import linIcon from "../../assets/icons/linux-white.png"
import headerImagePlaceholder from "../../assets/images/placeholder.svg"
import "./applist.css"

export default function ApplistItem({app}) {
  if (app.rating === null || app.rating === undefined) {
    console.warn(app.appid, "-", app.name, " | ", app.rating);
  }
  // Get tag names as comma seperated string
  const tags = (() => {
    // Check if tags has any item
    if (!app.tags) {
      return "";
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
  const releaseDate = dateToString(app.releaseDate);
  return (
    <a href={`${steamStoreApi}${app.appid}`} target='_blank' rel='noreferrer noopener' className='applist-link'>
      <li className='applist-item'>
        <div className="item-left">
          <img 
            src={app.headerImage} alt="app-cover" 
            className='item-image' 
            onError={({currentTarget}) => {
              currentTarget.onerror = null;
              currentTarget.src = {headerImagePlaceholder};
            }}
          />
        <p className='item-under-image'>
          <span className='item-release-date'>{releaseDate}</span>
          <Reviews classes="item-reviews" rating={app.rating} />
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
                } else {
                  return '';
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
    </a>
  )
}
