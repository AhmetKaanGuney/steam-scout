import {React} from 'react'
import AppSnippet from './AppSnippet.js';
import ApplistItem from './ApplistItem.js';
import { enumerate } from '../utils.js';

export default function Applist({applist}) {
  return (
    <ul className='applist'>
      { 
        enumerate(applist).map((a) => {
          if (a[0] % 10 === 0) {
            return (
              <hr key={"hr-" + a[0]}/>
            )
          }
          return (
            <ApplistItem app={new AppSnippet(a[1])} key={"applist-item-" + a[1]["app_id"]}/>
          )
        })
      }
    </ul>
  )
}