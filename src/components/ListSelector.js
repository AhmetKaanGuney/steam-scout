import React from 'react'

export default function ListSelector({options, selection, onSelectionChange}) {
  return (
    <ul className='list-selector container'>
    {
      options.map(({name, id}) => {
        return (
          <li 
            className="list-selector-item" 
            data-selected={id === selection} 
            onClick={onSelectionChange} 
            key={`list-selection-${id}`} 
            option-id={id} 
          >
            {name}
          </li>
        )
      })
    }
    </ul>
  )
}
