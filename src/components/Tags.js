import React from 'react'
import Tag from './Tag.js'

export default function Tags({tags}) {
  return (
      <ul className='highlight-tags container'>
        {tags.map(t => {
          return (
            <Tag name={t.name} id={t.id} key={t.id} />
          )
        })}
      </ul>
  )
}
