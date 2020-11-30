import React, { useState, useEffect } from "react";
import { TransitionModal } from "./TransitionModal";
import DeleteIcon from "@material-ui/icons/Delete";
import "./styles/Favourites.scss";

export function FavQuotes(props) {
  const [favouriteQuotes, setFavouriteQuotes] = useState([]);
  const getFavouriteQuotes = async () => {
    try {
      const response = await fetch("/favquotes");

      const jsonData = await response.json();
      setFavouriteQuotes(jsonData);
      console.log("jsonData :", jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

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
          <div className="block">
            <span
              className="dot"
              id="individual-dot"
              style={{ backgroundColor: newColours[index] }}
            ></span>
          </div>

          <div className="quote-author">
            <p className="quote">"{fav.content}"</p>
            <p className="author">- {fav.author}</p>
          </div>
          <span className="delete-icon">
            <DeleteIcon />
          </span>
        </div>
      ))}
    </>
  );
}
