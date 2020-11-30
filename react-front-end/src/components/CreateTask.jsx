import React from "react";
import "./styles/JournalTitle.scss";
import { TaskInput } from "./TaskInput";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { LogoProfile } from './LogoProfile';
import "./styles/MainPage.scss";
import {Link} from 'react-router-dom';

export function CreateTask(props) {
  const [task, setTask] = React.useState("");

  const onSubmit = async() => {

    try {
      const body = { task, completed: false, user_id: 1 };

     await fetch("/tasks", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify(body)
    })
      window.location = "/dashboard";

    } catch(err) {
      console.error(err.message)
    }
  }

 

  return (
    <>
    <div className="background-image2">
      <LogoProfile/>
      <div className="title">
        <h2>Let's</h2>
        <h2>GET TASKING!</h2>
      </div>
      <form>
        <TaskInput setTask={setTask} task={task} />
        <div className="button-container">
          <ArrowForwardIosIcon
            fontSize="large"
            className="arrow-submit"
            onClick={onSubmit}
          />
          <Link to="/dashboard" className="skip-link">
            <span className="skip-btn">Skip</span>
          </Link>
        </div>
      </form>
      </div>
    </>
  );
}
