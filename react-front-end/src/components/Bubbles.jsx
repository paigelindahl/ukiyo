import React from "react";
import "./styles/Dashboard.scss";
import { TransitionModal } from "./TransitionModal.jsx";
import { FavouriteBtn } from  './FavouriteBtn';

export function Bubbles(props) {
  return (
    <div className="bubble-container">
      <div className="one">
        <FavouriteBtn title={props.title1} urlSource={props.urlSource1} className="heart-icon"/>
        <div className="item-title"><h5>{props.title1}</h5></div>
        <TransitionModal item={props.item1} title={props.title1} />
      </div>
      <div className="two">
      <FavouriteBtn title={props.title2} urlSource={props.urlSourc2} className="heart-icon"/>
      <div className="item-title"><h5>{props.title2}</h5></div>
        <TransitionModal item={props.item2} title={props.title2} />
      </div>
      <div className="three">
      <FavouriteBtn title={props.title3} urlSource={props.urlSource3} className="heart-icon"/>
      <div className="item-title"><h5>{props.title3}</h5></div>
        <TransitionModal item={props.item3} title={props.title3} />
      </div>
      <div className="four">
      <FavouriteBtn title={props.title4} urlSource={props.urlSource4} className="heart-icon"/>
      <div className="item-title"><h5>{props.title4}</h5></div>
        <TransitionModal item={props.item4} title={props.title4} />
      </div>
      <div className="five">
      <FavouriteBtn title={props.title5} urlSource={props.urlSource5} className="heart-icon"/>
      <div className="item-title"><h5>{props.title5}</h5></div>
        <TransitionModal item={props.item5} title={props.title5} />
      </div>
    </div>
  );
}
