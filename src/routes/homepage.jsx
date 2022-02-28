import React from 'react'
import Highlights from '../components/Highlights.js';
import ListSelector from '../components/ListSelector.js';
import Applist from "../components/Applist.js"

export default function Homepage() {
  return (
    <main className='homepage'>
      <Highlights />
      <ListSelector />
      <Applist />
    </main>
  )
}
