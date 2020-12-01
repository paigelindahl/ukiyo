import React, {useState} from "react";
import "./styles/DateSlider.scss";

export function DateSlider(props) {
  const [selectedId, setSelectedId] = useState(5);
  const dateArray = [
    {id: 1, value: "29"},
    {id: 2, value: "30"},
    {id: 3, value: "1"},
    {id: 4, value: "2"},
    {id: 5, value: "3"},
    {id: 6, value: "4"},
    {id: 7, value: "5"},
    {id: 8, value: "6"},
    {id: 9, value: "7"},
    {id: 10, value: "8"},
    {id: 11, value: "9"},
  ];

  

  const getDate = function(e) {
    const grabId = e.target.innerHTML; 
    // console.log('grabId :',typeof parseInt(grabId));
    props.setSelectedDate(grabId)
  }

  const dateClicked = function(dateId) {
     setSelectedId(dateId);
  }


  return (
    <>
      <div className="date-container">
        <div className="scroll-date">
          {dateArray.map((date, index) => (
           <span key={date.id} className={date.id===selectedId ? "selected-date" : "not-selected"} onClick={ (e) => {dateClicked(date.id); getDate(e)}} data-active={date.id} id={date.id}>{date.value}</span>
          ))}
        </div>
      </div>
    </>
  );
}
