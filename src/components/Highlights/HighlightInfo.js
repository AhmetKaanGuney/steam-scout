import React from 'react'
import Reviews from '../Reviews.js'
import Tag from '../Tag.js'
import './highlights.css'

export default function HighlightInfo({data}) {
  const tags = data.tags ? data.tags : [];

  return (
    <div className='highlight-info'>
        <p className='highlight-reviews'>
          Reviews: <Reviews rating={data.rating}/>
        </p>
        <ul className='highlight-tags container'>
          {
            tags.map(t => {
              return (
                <li key={`app-${data.appid}-tag-${t.id}`}>
                  <Tag name={t.name} id={t.id} />
                </li>
              )
            })
          }
        </ul>
    </div>
  )
}