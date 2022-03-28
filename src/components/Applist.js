import {React, useEffect, useState} from 'react'
import AppSnippet from './AppSnippet.js';
import ApplistItem from './ApplistItem.js';

export default function Applist({applist}) {
  return (
    <ul className='applist'>
      { 
        applist.map((a) => {
          return (
            <ApplistItem app={new AppSnippet(a)} key={a["app_id"]}/>
          )
        })
      }
    </ul>
  )
}