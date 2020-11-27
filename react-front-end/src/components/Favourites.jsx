import React, {useState, useEffect} from "react";
import { ToolbarFave } from "./ToolbarFave";
import { TopNav } from "./TopNav";
import "./styles/Favourites.scss";


const colours = ["#93A2ED", "#7BCDC8", "#F5A571", "#FFDEA6"];
// const repeats = Math.ceil(dataFav.length / colours.length);
// const newColours = Array.apply(null, {length: repeats * colours.length})
//   .map(function(e, i) {return colours[i % colours.length]});
// const difference = newColours.length - dataFav.length;
// newColours.splice(0, difference);

export function Favourites() {


  return (
    <>
      <TopNav />
      <ToolbarFave />
  
    </>
  );
}

// style={{backgroundColor: newColours[index]}}
