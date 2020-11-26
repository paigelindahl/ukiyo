import React from "react";
import { TopNav } from "./TopNav";
import "./styles/DatePicker.scss";
import DatePicker from "react-horizontal-datepicker";

export function JournalEntries() {
  const selectedDay = (val) => {
    console.log(val);
  };
  return (
    <div >
      <TopNav/>
      <DatePicker
        className = "date-picker"
        getSelectedDay={selectedDay}
        labelFormat={"MMMM"}
        color={"#7BCDC8"}
        endDate={4}
      />
    </div>
  );
}