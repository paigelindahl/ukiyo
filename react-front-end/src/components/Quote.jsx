import React from 'react';
import './styles/Quote.scss';
import { FavouriteBtn } from  './FavouriteBtn';

export function Quote(props) {
  

  return (
    <>
      <div className="quote-container">
        <div className="text-heart">
          <h5>Quote of the Day</h5>
          <FavouriteBtn/>
        </div>
        <p className="quote-text">"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur adipisicing elit"</p>
      </div>
    </>
  )
}


