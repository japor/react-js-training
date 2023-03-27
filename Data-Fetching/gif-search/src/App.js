import React, { useState, useEffect } from "react";
import SearchForm from './Components/SearchForm';
import GifList from "./Components/GifList";

function App() {

  const [gifs, setGifs] = useState([]);
  const [query, setQuery] = useState("NSFW");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let isFetchActive = true;

    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=juGh2uYw5ntRsAuomggNGomtqeRbAlEn&rating=pg`)
      .then(response => response.json())
      .then(result => {
        if (isFetchActive) {
          setGifs(result.data)
          setLoading(false);
        }
      })
      .catch(error => console.log('error', error));

    return () => isFetchActive = false;
  }, [query]);

  const handleChangeQuery = (query) => {
    setQuery(query);
  };

  return (
    <div>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm changeQuery={handleChangeQuery} />
        </div>
      </div>
      <div className="main-content">
        {(loading) ? 'Loading............' : <GifList data={gifs} />}
      </div>
    </div>
  );
}

export default App;
