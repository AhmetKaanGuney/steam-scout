import {React, useState, useEffect} from 'react'
import { debounce, fetchAndUpdate } from '../utils.js';
import Highlights from '../components/Highlights/Highlights.js';
import ListSelector from '../components/ListSelector.js';
import Applist from "../components/Applist/Applist.js"
import AppSnippet from '../appdata/appSnippet.js';

let queryIndex = 0;
let selection = 0;

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
    order: [
      "rating", "DESC",
      "owner_count", "DESC",
    ],
    limit: 10
  };

  useEffect(() => {
    // Set Highlights
    fetchAndUpdate(highlightsQuery, setHighlights);
    
    // Set Applist
    const applistQuery = buildQuery(options[selection], queryIndex);
    fetchAndUpdate(applistQuery, setApplist);

    // Set Infinite Scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        appendToList();
      }
    });
  }, []);

  const handleSelectionChange = (e) => {
    const id = parseInt(e.target.attributes["option-id"].value);
    queryIndex = 0;
    const query = buildQuery(options[id], queryIndex);
    fetchAndUpdate(query, setApplist);
    selection = id;
  }

  const appendToList = debounce(() => {
    queryIndex += BATCH_SIZE;
    const query = buildQuery(options[selection], queryIndex);
    fetchAndUpdate(query, (res) => {
      setApplist(prevList => {
        const newList = [...prevList];
        for (let i of res) {
          newList.push(i);
        }
        return newList;
      });
    });
  }, 100);

  const buildQuery = (selection, index) => {
    console.log("INDEX:", index);
    console.log(selection);

    if (selection === undefined || !isNaN(selection)) {
      console.error("Selection '", selection, "'", "is valid!");
    }
    const query = {
      index: index,
      limit: 10,
      coming_soon: 0,
      release_date: ["IS NOT", "NULL"],
      rating: ["IS NOT", "NULL"],
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
