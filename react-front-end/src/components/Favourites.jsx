import React from "react";
import { ToolbarFave } from "./ToolbarFave";
import { TopNav } from "./TopNav";
import "./styles/Favourites.scss";

const dataFav = [ {
  id: 1,
  name: "10min Yoga video", 
  link: "www.whatever.com"
}, 
{
  id: 2,
  name: "20min Vinyasa",
  link: "www.yoga.com"

},
{
  id: 3,
  name: "10min breathwork",
  link: "www.yoga.com"
},  {
  id: 4,
  name: "10min Yoga video", 
  link: "www.whatever.com"
}, 
{
  id: 5,
  name: "20min Vinyasa",
  link: "www.yoga.com"

},
{
  id: 6,
  name: "10min breathwork",
  link: "www.yoga.com"
},  {
  id: 7,
  name: "10min Yoga video", 
  link: "www.whatever.com"
}, 
{
  id: 8,
  name: "20min Vinyasa",
  link: "www.yoga.com"

},
{
  id: 9,
  name: "10min breathwork",
  link: "www.yoga.com"
}]

const colours = ["#7BCDC8", "#EBF6F5", "#FBE3E8", "#5CBDB9"];
const repeats = Math.ceil(dataFav.length / colours.length);
const newColours = Array.apply(null, {length: repeats * colours.length})
  .map(function(e, i) {return colours[i % colours.length]});
const difference = newColours.length - dataFav.length;
newColours.splice(0, difference);



export function Favourites(props) {
  return (
    <>
      <TopNav />
      <ToolbarFave />
     <div className="dott">
      
    </div> 
    {dataFav.map((item, index) => (
     <div>
      <span className="dot" style={{backgroundColor: newColours[index]}}></span>
      <p>{item.name}</p>
    </div>
    ))}
    </>
  );
}
