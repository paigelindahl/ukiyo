import React, { useState, useEffect } from "react";
import { TopNav } from "./TopNav";
import "./styles/DatePicker.scss";
import "./styles/JournalEntries.scss";
import { DateSlider } from "./DateSlider.jsx";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { LogoProfile } from "./LogoProfile";
import "./styles/JournalEntries.scss";

export function JournalEntries() {
  const [journalEntries, setJournalEntries] = useState([]);
  const [selectedDate, setSelectedDate] = useState(26);

  const getEntriesForTheDay = async (event) => {
    try {
      const response = await fetch(
        `/journalentries/${selectedDate}`
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
      <LogoProfile />
      <TopNav />
      <div className="journal-container">
        {journalEntries.map((entry) =>
          entry.result ? (
            <div className="happy-question">
              <div className="cloud-question1">
              <h3>What is something that inspired you recently?</h3>
              <p>{entry.answer_one}</p>
              </div>
              <div className="cloud-question2">
              <h3>What is something you accomplished today?</h3>
              <p>{entry.answer_two}</p>
              </div>
              <div className="cloud-question3">
              <h3>What are three things you are grateful for?</h3>
              <p>{entry.answer_three}</p>
              </div>
            </div>
          ) : (
            <div className="sad-question">
              <div className="cloud-question1">
                <h3>
                  My greatest qualities are...
                </h3>
                <p>{entry.answer_one}</p>
              </div>
              <div className="cloud-question2">
                <h3>What’s something that you’re looking forward to? </h3>
                <p>{entry.answer_two}</p>
              </div>
              <div className="cloud-question3">
                <h3>What are three things you are grateful for?</h3>
                <p>{entry.answer_three}</p>
              </div>
            </div>
          )
        )}
      </div>
      <div className="date-slider">
        <DateSlider
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>
    </>
  );
}

{/* <span className="icons">
<EditIcon />
<DeleteIcon />
</span> */}