import React from "react";
import { ToolbarFave } from "./ToolbarFave";
import { TopNav } from "./TopNav";
import "./styles/Favourites.scss";

export function Favourites(props) {
  return (
    <>
      <TopNav />
      <ToolbarFave />
     <div className="dott">
      <span className="dot"></span>
    </div> 
    </>
  );
}
