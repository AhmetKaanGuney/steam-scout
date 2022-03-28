import {React, useState, useEffect} from 'react'
import { fetchApps } from '../utils.js';
import Highlights from '../components/Highlights.js';
import ListSelector from '../components/ListSelector.js';
import Applist from "../components/Applist.js"
import AppSnippet from '../components/AppSnippet.js';

export default function Homepage() {
  const [applist, setApplist] = useState([]);
  const [highlights, setHighlights] = useState([new AppSnippet()]);
  const [option, setOption] = useState(0);

  const options = [
    {id: 0, name: "New & Trending"},
    {id: 1, name: "Old But Gold"},
    {id: 2, name: "Best Reviews"},
    {id: 3, name: "Most Recent"},
  ]

  const applistQuery = (() => {
    const query = {
      index: 0,
      limit: 10,
      order: [
        "release_date", "DESC",
        "(positive_reviews / negative_reviews)", "DESC"
      ]
    }
    console.log(options[option])
    switch (options[option].name) {
      case "New & Trending":
        query.order = [
          "release_date", "DESC",
          "(positive_reviews / negative_reviews)", "DESC"
        ]
        break;
      case "Old But Gold":
        query.order = [
          "release_date", "ASC",
          "(positive_reviews / negative_reviews)", "DESC"
        ]
    }
    console.log(query)
    return query;
  })();

  const highlightsQuery = {
    order: [
      "owner_count", "DESC",
      "(positive_reviews / negative_reviews)", "DESC",
      "release_date", "DESC"
    ],
    limit: 10
  }

  useEffect(() => {
    // Highlights
    fetchApps(highlightsQuery).then(res => {
      if (res !== undefined) {
        setHighlights(res.map(i => new AppSnippet(i)))
      }
    });
    // Applist
    fetchApps(applistQuery).then(res => {
      if (res !== undefined) {
        setApplist(res);
      }
    });
  }, [])

  return (
    <main className='homepage'>
      <Highlights highlights={highlights} />
      <ListSelector selection={option} setOption={setOption} options={options} />
      <Applist applist={applist} />
    </main>
  )
}
