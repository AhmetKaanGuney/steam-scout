import React from 'react'
import Highlights from '../components/Highlights.js';
import ListSelector from '../components/ListSelector.js';
import Applist from "../components/Applist.js"
import mockDetails from '../mock-data/mock-details.js';

export default function Homepage() {
  const appdata = mockDetails();
  let highlights_obj1 = {
    cover_image: appdata.header_image,
    reviews: {
      positive: appdata.positive_reviews,
      negative: appdata.negative_reviews
    },
    tags: appdata.tags
  }
  const highlights = [highlights_obj1, highlights_obj1, highlights_obj1, highlights_obj1]
  return (
    <main className='homepage'>
      <Highlights highlights={highlights} />
      <ListSelector />
      <Applist />
    </main>
  )
}
