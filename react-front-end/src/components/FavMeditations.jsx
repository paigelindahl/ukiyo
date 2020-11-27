import React, { useState, useEffect } from "react";
import { TransitionModal } from "./TransitionModal.jsx";

export function FavMeditations(props) {
  const [favouriteMeditations, setFavouriteMeditations] = useState([]);

  const getFavouriteMeditations = async () => {
    try {
      const response = await fetch("http://localhost:8080/favmeditation");

      const jsonData = await response.json();
      setFavouriteMeditations(jsonData);
      console.log("jsonData :", jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getFavouriteMeditations();
  }, []);

  const colours = ["#93A2ED", "#FFDEA6", "#7BCDC8", "#F5A571"];
  const repeats = Math.ceil(favouriteMeditations.length / colours.length);
  const newColours = Array.apply(null, {
    length: repeats * colours.length,
  }).map(function (e, i) {
    return colours[i % colours.length];
  });

  return (
    <>
      {favouriteMeditations.map((fav, index) => (
        <div className="fav-container">
          <span className="dot" style={{backgroundColor: newColours[index]}}></span>
          <h5>{fav.title}</h5>
          <TransitionModal title={fav.title} link={fav.link} />
        </div>
      ))}
    </>
  );
}
