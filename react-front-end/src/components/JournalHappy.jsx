import React from 'react'
import { LogoProfile } from './LogoProfile';
import { JournalTitle } from './JournalTitle';
import './styles/MultilineTextFields.scss';
import MultilineTextFields from './MultilineTextFields';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export function JournalHappy(props) {
  

  return (
    <>
      <LogoProfile />
      <JournalTitle />
      <h6 className="question">What is something that inspired you recently?</h6>
      <MultilineTextFields/>
      <h6 className="question">Who made a positive difference in your life recently?</h6>
      <MultilineTextFields/>
      <h6 className="question">What are three things your are grateful for?</h6>
      <MultilineTextFields/>
      <ArrowForwardIosIcon fontSize="large" className="arrow-submit"/>
      <span className="skip-btn">Skip</span>
    </>
  )
}
