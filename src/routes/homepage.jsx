import {React, useState, useEffect} from 'react'
import { fetchApps, debounce } from '../utils.js';
import Highlights from '../components/Highlights/Highlights.js';
import ListSelector from '../components/ListSelector.js';
import Applist from "../components/Applist/Applist.js"
import AppSnippet from '../appdata/appSnippet.js';

export default function Homepage() {
  const [applist, setApplist] = useState([]);
  let queryIndex = 0;
  const [highlights, setHighlights] = useState([new AppSnippet()]);
  const [selection, setSelection] = useState(0);
  const batchSize = 10;
  const options = [
    {id: 0, name: "New & Trending"},
    {id: 1, name: "Most Recent"},
    {id: 2, name: "Best Reviews"},
    {id: 3, name: "Old But Gold"},
  ];

  const updateApplist = debounce(() => {
    queryIndex += batchSize;
    const query = buildQuery(options[selection], queryIndex);
    fetchApps(query).then(res => {
      if (res !== undefined) {
        setApplist(prevList => {
          const newList = [...prevList];
          for (let i of res) {
            newList.push(i);
          }
          return newList;
        });
      }
    });
  }, 1000);

  useEffect(() => {
    console.log("Effect!")
    const highlightsQuery = {
      order: [
        "rating", "DESC",
        "owner_count", "DESC",
      ],
      limit: 10
    };
    // Highlights
    fetchApps(highlightsQuery).then(res => {
      if (res !== undefined) {
        setHighlights(res);
      }
    });
    // Applist
    const applistQuery = buildQuery(options[selection], queryIndex);
    fetchApps(applistQuery).then(res => {
      if (res !== undefined) {
        setApplist(res);
      }
    });

    // Infinite Scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        updateApplist();
      }
    });

  }, []);

  const handleSelectionChange = (e) => {
    console.log("Handle Selection!")
    const id = parseInt(e.target.attributes["option-id"].value);
    const index = 0;
    debounce(queryApplist(buildQuery(options[id], index)));
    setSelection(id);
    queryIndex = index;
  }

  const queryApplist = (query) => {
    fetchApps(query).then(res => {
      if (res !== undefined) {
        setApplist(res);
      }
    });
  };

  const buildQuery = (selection, index) => {
    if (selection === undefined || !isNaN(selection)) {
      console.error("Selection '", selection, "'", "is valid!");
    }
    const query = {
      index: index,
      limit: 10,
      coming_soon: 0,
      release_date: ["!=", "''"]
    };
    switch (selection.name) {
      case "New & Trending":
        query.order = [
          "release_date", "DESC",
          "rating", "DESC",
        ];
        break;
      case "Most Recent":
        query.order = [
          "release_date", "ASC"
        ];
        break;
      case "Best Reviews":
        query.order = [
          "rating", "DESC"
        ];
        break;
      case "Old But Gold":
        query.order = [
          "rating", "DESC",
          "release_date", "ASC",
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
