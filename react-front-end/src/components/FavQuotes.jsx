import React, {useState, useEffect} from 'react';
import { TransitionModal} from './TransitionModal';
import DeleteIcon from "@material-ui/icons/Delete";


export function FavQuotes(props) {
  const [favouriteQuotes, setFavouriteQuotes] = useState([]);
  const getFavouriteQuotes = async() => {

    try {

     const response = await fetch("http://localhost:8080/favquotes")

     const jsonData = await response.json();
     setFavouriteQuotes(jsonData);
     console.log('jsonData :', jsonData);
    } catch(err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getFavouriteQuotes();
  }, []);

  const colours = ["#93A2ED", "#FFDEA6", "#7BCDC8", "#F5A571"];
  const repeats = Math.ceil(favouriteQuotes.length / colours.length);
  const newColours = Array.apply(null, {
    length: repeats * colours.length,
  }).map(function (e, i) {
    return colours[i % colours.length];
  });

  return (
    <>
      {favouriteQuotes.map((fav, index) => (
        <div className="fav-container">
          <span className="dot" style={{backgroundColor: newColours[index]}}></span>
          <p>"{fav.content}"</p>
          <p>- {fav.author}</p>
          <span><DeleteIcon /></span>
        </div>
      ))}
    </>
  )
}
