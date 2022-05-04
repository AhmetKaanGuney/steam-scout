import React, { useState } from 'react'
import HighlightInfo from './HighlightInfo.js'
import headerImagePlaceholder from "../../assets/images/placeholder.svg"
import {steamStoreApi} from '../../utils.js'
import './highlights.css'

export default function HighlightBox({ data }) {
  const [headerImageLoaded, setHeaderImageLoaded] = useState(false);
  const onHeaderImageLoad = () => {
    setHeaderImageLoaded(true);
  }
  return (
    <div className='highlight-box'>
      <div className="highlight-header-wrapper">
        {headerImageLoaded ? '' : <img src={headerImagePlaceholder} className='highlight-header-image' alt='placeholder' />}
        <a href={`${steamStoreApi}${data.appid}`} target='_blank' rel='noreferrer noopener'>
          <img
            src={data.headerImage}
            alt="highlights-cover"
            className='highlight-header-image'
            onLoad={onHeaderImageLoad}
            hidden={!headerImageLoaded}
          />
        </a>
      </div>
      <HighlightInfo data={data} />
    </div>
  )
}
