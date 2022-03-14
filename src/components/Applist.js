import React from 'react'
import AppSnippet from './AppSnippet.js';
import ApplistItem from './ApplistItem.js';
import mockDetails from '../mock-data/mock-details.js';

function Applist() {
  const apps = [mockDetails(), mockDetails()]
  return (
    <ul className='applist'>
      {
        apps.map((a) => {
        return (<ApplistItem app={new AppSnippet(a)} key={a.id}/>)
        })
      }
    </ul>
  )
}
export default Applist;