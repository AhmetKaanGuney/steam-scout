import {React, useState, useEffect} from 'react'
import { debounce, fetchAndUpdate, buildQuery } from '../utils.js';
import Highlights from '../components/Highlights/Highlights.js';
import ListSelector from '../components/ListSelector.js';
import Applist from "../components/Applist/Applist.js"
import AppSnippet from '../appdata/appSnippet.js';
import LoadingIcon from '../components/Applist/LoadingIcon.js';

// These are set here for sychronus state
const BATCH_SIZE = 10;
let queryIndex = 0;
let selection = 0;
let queryCache = {};

const options = [
  {id: 0, name: "New & Trending"},
  {id: 1, name: "Most Recent"},
  {id: 2, name: "Best Reviews"},
  {id: 3, name: "Old But Gold"},
];

export default function Homepage() {
  const [highlights, setHighlights] = useState([new AppSnippet()]);
  const [applist, setApplist] = useState([]);

  useEffect(() => {
    document.title = "SteamScout - Discover Hidden Gems";
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
    // Set Highlights
    fetchAndUpdate(highlightsQuery, setHighlights, queryCache);
    
    // Set Applist
    const applistQuery = buildQuery(options[selection], queryIndex);
    fetchAndUpdate(applistQuery, setApplist, queryCache);

    // Set Infinite Scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 1) {
        appendToApplist();
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  return (
    <main>
      <Highlights items={highlights} />
      <ListSelector 
        selection={selection} 
        onSelectionChange={handleSelectionChange} 
        options={options} 
      />
      <Applist applist={applist}/>
      <LoadingIcon />
    </main>
  )
}
