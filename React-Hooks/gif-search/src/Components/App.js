import React from 'react'
import '../App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

import SearchForm from './SearchForm';
import GifList from './GifList';
import NoGifs from './NoGifs';

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("NSFW");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=juGh2uYw5ntRsAuomggNGomtqeRbAlEn`)
      .then(response => setData(response.data.data))
      .catch(error => console.log('Error fetching and parsing data', error))
      .finally(() => setIsLoading(false));
  }, [query]);

  const performSearch = (term) => {
    setQuery(term);
  };

  return (
    <>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm onSearch={performSearch} />
        </div>
      </div>
      <div className="main-content">
        {isLoading ? <h3>Loading......</h3> : <GifList data={data} />}
      </div>
    </>
  );
}

export default App
