import React from 'react'
import { JournalTitle } from './JournalTitle';
import MultilineTextFields from './MultilineTextFields';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from 'react-router-dom';


export function JournalSad(props) {
  
  const onSubmit = async() => {

    // try {
    //   // const body = { answer_one, answer_two, answer_three };

    //  await fetch("http://localhost:8080/journal2", {
    //    method: "POST",
    //    headers: { "Content-Type": "application/json" },
    //    body: JSON.stringify(body)
    // })
    //   window.location = "/createtask";

    // } catch(err) {
    //   console.error(err.message)
    // }
  }
  

  return (
    <>
      <JournalTitle/>
      <form>
        <MultilineTextFields question="What is something that made you smile in the last little while?"/>
        <MultilineTextFields question="What is something you are looking forward to?"/>
        <MultilineTextFields question="What are three things you are grateful for?"/>
      </form>
      <ArrowForwardIosIcon onClick={onSubmit} fontSize="large" className="arrow-submit"/>
      <Link to="/dashboard" className="skip-link">
        <span className="skip-btn">Skip</span>
      </Link>
    </>
  )
}
