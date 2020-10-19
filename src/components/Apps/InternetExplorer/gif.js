import React from 'react'
import './gif.css'

const Gif = props => {
  const {gif} = props
  return (
    <div className="gif">
      <img src={gif.images.fixed_height.url} alt=""/>
      <div className="meta">
        <div className="meta-item">
          Rating: {gif.rating}
        </div>
        <div className="meta-item">
          <a href={gif.url}>link</a>
        </div>
      </div>
    </div>
  )
}

export default Gif
