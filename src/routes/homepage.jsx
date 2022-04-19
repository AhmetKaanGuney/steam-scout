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
    {id: 1, name: "Old But Gold"},
    {id: 2, name: "Best Reviews"},
    {id: 3, name: "Most Recent"},
  ];


  const updateApplist = debounce(() => {
    queryIndex += batchSize;
    const query = buildQuery(selection, queryIndex);
    console.log("Index: ", query.index)
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
        "owner_count", "DESC",
        "(positive_reviews / negative_reviews)", "DESC",
        "release_date", "DESC"
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
    const applistQuery = buildQuery(options[selection], 0);
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
    const query = {
      index: index,
      limit: 10,
      coming_soon: 0,
      release_date: ["!=", "''"]
    };
    // Default order
    query.order = [
      "release_date", "DESC",
      "(positive_reviews / negative_reviews)", "DESC"
    ];
    switch (selection.name) {
      case "New & Trending":
        query.order = [
          "release_date", "DESC",
          "(positive_reviews / negative_reviews)", "DESC"
        ];
        break;
      case "Old But Gold":
        query.order = [
          "release_date", "ASC",
          "(positive_reviews / negative_reviews)", "DESC"
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
