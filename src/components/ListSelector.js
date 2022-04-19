import React from 'react'

export default function ListSelector({options, selection, onSelectionChange}) {
  return (
    <div className='list-selector-wrapper'>
      <ul className='list-selector'>
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
    </div>
  )
}
