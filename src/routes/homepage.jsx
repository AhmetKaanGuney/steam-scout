import {React, useState, useEffect} from 'react'
import { getApplist } from '../utils.js';
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

  const [applist, setApplist] = useState([]);

  let query = {
    tags: [],
    genres: [],
    categories: [],
    index: 0,
    order: ["owner_count", "DESC"],
    limit: 20
  }
  useEffect(() => {
    getApplist(query).then(apps => {
      if (apps !== undefined) {
        console.log("Response:", apps);
        setApplist(apps);
      }
    });
  }, [])

  return (
    <main className='homepage'>
      <Highlights highlights={highlights} />
      <ListSelector />
      <Applist applist={applist} />
    </main>
  )
}
