import React from 'react'

function ListSelector({options, selection, setOption}) {
  // const options = [
  //   "New & Trending",
  //   "Old But Gold",
  //   "Best Reviews",
  //   "Most Recent"
  // ]
  
  const handleClick = (e) => {
    const id = parseInt(e.target.attributes["option-id"].value);
    setOption(id);
  }
  return (
    <ul className='list-selector container'>
    {
      options.map(({name, id}) => {
        return (
          <li className="list-selector-item" data-selected={id === selection} onClick={handleClick} key={`list-selection-${id}`} option-id={id} >
            {name}
          </li>
        )
      })
    }
    </ul>
  )
}

export default ListSelector