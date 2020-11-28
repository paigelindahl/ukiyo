import React, {useState} from 'react'
import { JournalTitle } from './JournalTitle';
import './styles/MultilineTextFields.scss';
import MultilineTextFields from './MultilineTextFields';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from 'react-router-dom';
import { LogoProfile } from './LogoProfile';

export function JournalHappy() {
  const [answerOne, setAnswerOne] = useState('');
  const [answerTwo, setAnswerTwo] = useState('');
  const [answerThree, setAnswerThree] = useState('');
  
  const settingAnswerOne = (value) => {
    setAnswerOne(value)
  }

  const settingAnswerTwo = (value) => {
    setAnswerTwo(value)
  }

  const settingAnswerThree = (value) => {
    setAnswerThree(value)
  }
  
  const onSubmit = async(event) => {
    try {
      const body = { answerOne, answerTwo, answerThree };
     await fetch("http://localhost:8080/journal2", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify(body)
    })
      window.location = "/createtask";

    } catch(err) {
      console.error(err.message)
    }
  }


  return (
    <>
     <div className="background-image2">
      <LogoProfile/>
      <JournalTitle />
      <form>
        <MultilineTextFields setAnswers={settingAnswerOne}  question="What is something that inspired you recently?"/>
        <MultilineTextFields setAnswers={settingAnswerTwo}  question="What is your second question?"/>
        <MultilineTextFields setAnswers={settingAnswerThree}  question="Question three?"/>
      </form>
      <ArrowForwardIosIcon onClick={onSubmit} fontSize="large" className="arrow-submit"/>
      <Link to="/dashboard" className="skip-link">
        <span className="skip-btn">Skip</span>
      </Link>
      </div>
    </>
  )
}


// onChange={e => setAnswerOne(e.target.value)}