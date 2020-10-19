import React from 'react';
import Gif from './gif';

const GifList = (props) => {
  const { gifs } = props;
  return (
    <div className="giflist">
      {gifs &&
        gifs.map((gif) => {
          return <Gif key={gif.id} gif={gif} />;
        })}
    </div>
  );
};

export default GifList;
