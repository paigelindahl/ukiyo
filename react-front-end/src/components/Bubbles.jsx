import React from "react";
import "./styles/Dashboard.scss";
import { TransitionModal } from "./TransitionModal.jsx";

export function Bubbles(props) {
  return (
    <div className="bubble-container">
      <div className="one">
        <div className="item-title"><h5>{props.title1}</h5></div>
        <TransitionModal item={props.item1} title={props.title1} />
      </div>
      <div className="two">
      <div className="item-title"><h5>{props.title1}</h5></div>
        <TransitionModal item={props.item2} title={props.title2} />
      </div>
      <div className="three">
      <div className="item-title"><h5>{props.title1}</h5></div>
        <TransitionModal item={props.item3} title={props.title3} />
      </div>
      <div className="four">
      <div className="item-title"><h5>{props.title1}</h5></div>
        <TransitionModal item={props.item4} title={props.title4} />
      </div>
      <div className="five">
      <div className="item-title"><h5>{props.title1}</h5></div>
        <TransitionModal item={props.item5} title={props.title5} />
      </div>
    </div>
  );
}
