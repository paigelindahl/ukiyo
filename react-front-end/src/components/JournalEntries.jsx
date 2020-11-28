import React, { useState, useEffect } from "react";
import { TopNav } from "./TopNav";
import "./styles/DatePicker.scss";
import "./styles/JournalEntries.scss";
import { DateSlider } from "./DateSlider.jsx";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { LogoProfile } from './LogoProfile';

export function JournalEntries() {
  const [journalEntries, setJournalEntries] = useState([]);
  const [selectedDate, setSelectedDate] = useState(26);
 
  const getEntriesForTheDay = async (event) => {
    try {
      const response = await fetch(
        `http://localhost:8080/journalentries/${selectedDate}`
      );
      const jsonData = await response.json();
      console.log("jsonData :", jsonData);

      setJournalEntries(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getEntriesForTheDay();
  }, [selectedDate]);

  return (
    <>
      <LogoProfile/>
      <TopNav />
      <div className="icons">
        <span>
          <EditIcon />
        </span>
        <span>
          <DeleteIcon />
        </span>
      </div>
      <div className="journal-container">
        {journalEntries.map((entry) =>
          entry.result ? (
            <div className="happy-question">
              <span className="dot a"></span>
              <h5>"What is something that inspired you recently?"</h5>
              <p>{entry.answer_one}</p>
              <span className="dot b"></span>
              <h5>"This is the second question"</h5>
              <p>{entry.answer_two}</p>
              <span className="dot c"></span>
              <h5>"this is the third question?"</h5>
              <p>{entry.answer_three}</p>
            </div>
          ) : (
            <div className="sad-question">
              <span className="dot a"></span>
              <h5>Why are you sad?</h5>
              <p>{entry.answer_one}</p>
              <span className="dot b"></span>
              <h5>Why are you so sad?</h5>
              <p>{entry.answer_two}</p>
              <span className="dot c"></span>
              <h5>Why are you very sad?</h5>
              <p>{entry.answer_three}</p>
            </div>
          )
        )}
      </div>
      <DateSlider
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </>
  );
}
