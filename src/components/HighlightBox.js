import React from 'react'
import CoverImage from './CoverImage.js'
import AppInfo from './AppInfo.js'

export default function HighlightBox({imageLink, appInfo}) {
  return (
    <div className='higlight-box'>
      HighlightBox
      <CoverImage imageLink={imageLink} />
      <AppInfo data={appInfo} />
    </div>
  )
}
