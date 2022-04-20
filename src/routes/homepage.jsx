import {React, useState, useEffect} from 'react'
import { debounce, fetchAndUpdate } from '../utils.js';
import Highlights from '../components/Highlights/Highlights.js';
import ListSelector from '../components/ListSelector.js';
import Applist from "../components/Applist/Applist.js"
import AppSnippet from '../appdata/appSnippet.js';

// These are set here for sychronus state
let queryIndex = 0;
let selection = 0;
let queryCache = {};

export default function Homepage() {
  const BATCH_SIZE = 10;
  const [highlights, setHighlights] = useState([new AppSnippet()]);
  const [applist, setApplist] = useState([]);
  const options = [
    {id: 0, name: "New & Trending"},
    {id: 1, name: "Most Recent"},
    {id: 2, name: "Best Reviews"},
    {id: 3, name: "Old But Gold"},
  ];
  const highlightsQuery = {
    index: 0,
    limit: 10,
    coming_soon: 0,
    rating: ["IS NOT", "NULL"],
    release_date: ["IS NOT", "NULL"],
    order: [
      "rating", "DESC",
      "owner_count", "DESC",
    ],
  };

  useEffect(() => {
    // Set Highlights
    fetchAndUpdate(highlightsQuery, setHighlights, queryCache);
    
    // Set Applist
    const applistQuery = buildQuery(options[selection], queryIndex);
    fetchAndUpdate(applistQuery, setApplist, queryCache);

    // Set Infinite Scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        appendToApplist();
      }
    });
  }, []);

  const handleSelectionChange = (e) => {
    const id = parseInt(e.target.attributes["option-id"].value);
    queryIndex = 0;
    const query = buildQuery(options[id], queryIndex);
    fetchAndUpdate(query, setApplist, queryCache);
    selection = id;
  }

  const appendToApplist = debounce(() => {
    queryIndex += BATCH_SIZE;
    const query = buildQuery(options[selection], queryIndex);
    fetchAndUpdate(query, (res) => {
      setApplist(prevlist => {
        const newlist = [...prevlist];
        for (let i of res) {
          newlist.push(i);
        }
        return newlist;
      });
    }, queryCache);
  }, 100);

  const buildQuery = (selection, index) => {
    console.log(index, selection);

    if (selection === undefined || !isNaN(selection)) {
      console.error("Selection '", selection, "'", "is valid!");
    }
    const query = {
      index: index,
      limit: 10,
      coming_soon: 0,
      rating: ["IS NOT", "NULL"],
      release_date: ["IS NOT", "NULL"],
    };
    switch (selection.name) {
      case "New & Trending":
        query.order = [
          "rating", "DESC",
          "release_date", "DESC",
          "name", "ASC"
        ];
        break;
      case "Most Recent":
        query.order = [
          "release_date", "ASC",
          "name", "ASC"
        ];
        break;
      case "Best Reviews":
        query.order = [
          "positive_reviews", "DESC",
          "rating", "DESC",
          "name", "ASC"
        ];
        break;
      case "Old But Gold":
        query.order = [
          "rating", "DESC",
          "release_date", "ASC",
          "name", "ASC"
        ];
        break;
    }
    return query;
  };

  return (
    <main className='homepage'>
      <Highlights items={highlights} />
      <ListSelector 
        selection={selection} 
        onSelectionChange={handleSelectionChange} 
        options={options} 
      />
      <Applist applist={applist} />
    </main>
  )
}
