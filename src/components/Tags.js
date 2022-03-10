import React from 'react'
import Tag from './Tag.js'

export default function Tags({tags}) {
  return (
    <div className='higlight-tags'>
      <ul>
        {tags.map(t => {
          return (
            <Tag name={t.name} id={t.id} key={t.id} />
          )
        })}
      </ul>
    </div>
  )
}
