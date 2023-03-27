import React from 'react';
import Gif from './Gif';
import NoGifs from './NoGifs';

const GifList = ({ data }) => {
  return (
    <ul className="gif-list">
      {data.length ? data.map(gif => <Gif key={gif.id} url={gif.images.fixed_height.url} />) : <NoGifs />}
    </ul>
  );
}

export default GifList;
