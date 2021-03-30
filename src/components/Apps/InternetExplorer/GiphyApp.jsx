import React, { useState } from 'react';
import Search from './search.js';
import GifList from './GifList.jsx';
import './GiphyApp.css';

function GiphyApp() {
  const [gifs, setGifs] = useState([]);
  const updateParentState = (gifsToSet) => {
    setGifs(gifsToSet);
  };
  return (
    <div className="GiphyApp">
      {gifs.length > 1 ? (
        <GifList gifs={gifs} />
      ) : (
        <Search
          hideHomeLink={true}
          buttonClass="__large"
          updateParentState={updateParentState}
        />
      )}
    </div>
  );
}

export default GiphyApp;
