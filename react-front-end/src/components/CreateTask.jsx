import React from 'react'
import { LogoProfile } from './LogoProfile';
import './styles/JournalTitle.scss';
import { TaskInput } from './TaskInput';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


export function CreateTask(props) {
  const [task, setTask] = React.useState("");
 

  const onSubmit = async(event) => {
    event.preventDefault();
    try {
      const body = { task, completed: false, user_id: 1 };
      const response = await fetch("http://localhost:8080/tasks", {
        method: "POST", 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      })
    } catch(err) {
      console.error(err.message)
    }
    window.location("/dashboard")
  }


  return (
    <>
      <div className="title">
        <h2>Let's</h2>
        <h2>GET TASKING!</h2>
      </div>
        <form>
          <TaskInput setTask={setTask} task={task}/>
          <div className="button-container">
          <ArrowForwardIosIcon fontSize="large" className="arrow-submit" onClick={onSubmit}/>
          <span className="skip-btn">Skip</span>
        </div>
      </form>
    </>
  )
}
