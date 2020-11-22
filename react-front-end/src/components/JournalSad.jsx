import React from 'react'
import { LogoProfile } from './LogoProfile';
import { JournalTitle } from './JournalTitle';
import MultilineTextFields from './MultilineTextFields';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';



export function JournalSad(props) {
  

  return (
    <>
      <LogoProfile/>
      <JournalTitle/>
      <h6 className="question">What is made you laugh or smile today?</h6>
      <MultilineTextFields/>
      <h6 className="question">What about today is better than yesterday?</h6>
      <MultilineTextFields/>
      <h6 className="question">What are three things your are grateful for?</h6>
      <MultilineTextFields/>
      <ArrowForwardIosIcon fontSize="large" className="arrow-submit"/>
      <span className="skip-btn">Skip</span>
    </>
  )
}
