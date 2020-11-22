import React from 'react'
import { LogoProfile } from './LogoProfile';
import './styles/JournalTitle.scss';
import { TaskInput } from './TaskInput';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export function CreateTask(props) {
  

  return (
    <>
      <LogoProfile/>
      <div className="title">
        <h2>Let's</h2>
        <h2>GET TASKING!</h2>
      </div>
      <TaskInput/>
      <div className="button-container">
        <ArrowForwardIosIcon fontSize="large" className="arrow-submit"/>
        <span className="skip-btn">Skip</span>
      </div>
      
     
    
    </>
  )
}
