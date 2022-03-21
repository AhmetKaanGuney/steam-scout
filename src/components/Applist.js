import React from 'react'
import AppSnippet from './AppSnippet.js';
import ApplistItem from './ApplistItem.js';
import mockDetails from '../mock-data/mock-details.js';

function Applist() {
  const apps = [mockDetails(0), mockDetails(1)]
  return (
    <ul className='applist'>
      {
        apps.map((a) => {
        return (
          <ApplistItem app={new AppSnippet(a)} key={a["app_id"]}/>
          )
        })
      }
    </ul>
  )
}
export default Applist;