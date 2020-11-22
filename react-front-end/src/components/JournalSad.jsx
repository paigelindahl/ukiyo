import React from 'react'
import { LogoProfile } from './LogoProfile';
import { JournalTitle } from './JournalTitle';
import MultilineTextFields from './MultilineTextFields';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from 'react-router-dom';


export function JournalSad(props) {
  

  return (
    <>
      <JournalTitle/>
      <form>
        <MultilineTextFields question="What is something that made you smile in the last little while?"/>
        <MultilineTextFields question="What is something you are looking forward to?"/>
        <MultilineTextFields question="What are three things you are grateful for?"/>
      </form>
      <ArrowForwardIosIcon fontSize="large" className="arrow-submit"/>
      <Link to="/dashboard" className="skip-link">
        <span className="skip-btn">Skip</span>
      </Link>
    </>
  )
}
