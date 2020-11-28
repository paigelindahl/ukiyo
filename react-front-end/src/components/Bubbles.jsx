import React from "react";
import "./styles/Dashboard.scss";
import { TransitionModal } from "./TransitionModal.jsx";
import { FavouriteBtn } from  './FavouriteBtn';


const cssClass = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]
export function Bubbles(props) {
  return (
    <div className="bubble-container">
      {props.source.map((src, index) => 
        <div className={cssClass[index]}>
          <FavouriteBtn key={src.id} id={src.id} title={src.title} className="heart-icon"/>
          <div className="item-title"><h5>{src.title}</h5></div>
          <TransitionModal link={src.link} title={src.title} />
        </div>
      )}
    </div>
  );
}
