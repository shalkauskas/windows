import React, { useState } from 'react';
import Search from './search.js';
import GifList from './list.js';
import './GiphyApp.css';

function GiphyApp() {
  const [gifs, setGifs] = useState([]);
  const updateParentState = (gifsToSet) => {
    setGifs(gifsToSet);
  };
  return (
    <div className="GiphyApp">
      <Search
        hideHomeLink={true}
        buttonClass="__large"
        updateParentState={updateParentState}
      />
      <GifList gifs={gifs} />
    </div>
  );
}

export default GiphyApp;
