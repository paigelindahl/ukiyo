import React, {useState} from "react";
import "./styles/DateSlider.scss";

export function DateSlider(props) {
  const [selectedId, setSelectedId] = useState(null);
  const dateArray = [
    {id: 1, value: "25"},
    {id: 2, value: "26"},
    {id: 3, value: "27"},
    {id: 4, value: "28"},
    {id: 5, value: "29"},
    {id: 6, value: "30"},
    {id: 7, value: "01"},
    {id: 8, value: "02"},
    {id: 9, value: "03"},
    {id: 10, value: "04"},
    {id: 11, value: "05"},
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
