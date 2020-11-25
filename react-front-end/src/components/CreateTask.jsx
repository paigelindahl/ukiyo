import React from "react";
import "./styles/JournalTitle.scss";
import { TaskInput } from "./TaskInput";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export function CreateTask(props) {
  const [task, setTask] = React.useState("");

  const onSubmit = async(event) => {

    try {
      const body = { task, completed: false, user_id: 1 };

     await fetch("http://localhost:8080/tasks", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify(body)
    })
      window.location = "/dashboard";

    } catch(err) {
      console.error(err.message)
    }
  }

  // const onSubmit = (event) => {
  //   const body = { task, completed: false, user_id: 1 };
  //   fetch("http://localhost:8080/tasks", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(body),
  //   }).then(() => {
  //     console.log('sanity check')
  //   })
  //   .catch((err) => {
  //     console.log('error', err);
  //   })
  // };

  return (
    <>
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
          <span className="skip-btn">Skip</span>
        </div>
      </form>
    </>
  );
}
