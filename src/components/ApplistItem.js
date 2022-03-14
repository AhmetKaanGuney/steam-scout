import React from 'react'
import AppSnippet from './AppSnippet.js'
import calculateReviews from "../calculateReviews.js"

export default function ApplistItem({app}) {
  const platforms = {"Windows": app.windows, "Mac": app.mac, "Linux": app.linux};
  let merge = [];
  for (let i in platforms) {
    if (platforms[i]) {
      merge.push(i);
    }
  }
  const platformsText = merge.join(", ");
  return (
    <div className='applist-item'>
      <img src={app.headerImage} alt="applist-item-header" className='applist-item-header' />
      <p className='applist-item-title'>{app.name}</p>
      <p className='applist-item-tags'>
        {
          app.tags.map(t => {
            return (<a className='applist-item-tag-link' href='#' key='t.name'>{t.name}</a>)
          })
        }
      </p>
      <p className='applist-item-platforms'>{platformsText}</p>
      <p className='applist-item-reviews'>Reviews: {calculateReviews(app.positiveReviews, app.negativeReviews) + ' %'}</p>

    </div>
  )
}
