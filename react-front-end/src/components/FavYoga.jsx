import React, {useState, useEffect} from 'react'
import {TransitionModal} from './TransitionModal.jsx'

export function FavYoga(props) {
  const [favouriteYoga, setFavouriteYoga] = useState([]);
  
  const getFavouriteYoga = async() => {

    try {

     const response = await fetch("http://localhost:8080/favyoga")

     const jsonData = await response.json();
     setFavouriteYoga(jsonData);
     console.log('jsonData :', jsonData);
    } catch(err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getFavouriteYoga();
  }, []);

  const colours = ["#93A2ED", "#FFDEA6", "#7BCDC8", "#F5A571"];
  const repeats = Math.ceil(favouriteYoga.length / colours.length);
  const newColours = Array.apply(null, {
    length: repeats * colours.length,
  }).map(function (e, i) {
    return colours[i % colours.length];
  });

  return (
    <>
      {favouriteYoga.map((fav, index) => (
        <div className="fav-container">
          <div className="block">
          <span className="dot" style={{backgroundColor: newColours[index]}}></span>
          </div>

          <p className="quote-author">{fav.title}</p>
          <span className="play-modal">
          <TransitionModal title={fav.title} link={fav.link} />
          </span>
        </div>
      ))}
    </>
  )
}
