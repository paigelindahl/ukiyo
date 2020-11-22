import React from 'react'
import { LogoProfile } from './LogoProfile';
import { JournalTitle } from './JournalTitle';
import './styles/MultilineTextFields.scss';
import MultilineTextFields from './MultilineTextFields';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from 'react-router-dom';

export function JournalHappy(props) {
  

  return (
    <>
      <LogoProfile />
      <JournalTitle />
      <form>
        <MultilineTextFields question="What is something that inspired you recently?"/>
        <MultilineTextFields question="Who made a positive difference in your life recently?"/>
        <MultilineTextFields question="What are three things your are grateful for?"/>
      </form>
      <ArrowForwardIosIcon fontSize="large" className="arrow-submit"/>
      <Link to="/dashboard" className="skip-link">
        <span className="skip-btn">Skip</span>
      </Link>
    </>
  )
}
