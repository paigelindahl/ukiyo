import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import FilterDramaIcon from "@material-ui/icons/FilterDrama";
import { Checkboxes } from "./Checkboxes";
import TableFooter from "@material-ui/core/TableHead";
import DoneIcon from "@material-ui/icons/Done";
import DeleteIcon from "@material-ui/icons/Delete";
import { EditModal } from "./EditModal";
import './styles/TasksPending.scss'

const useStyles = makeStyles({
  table: {
    minWidth: "300",
  },
});

// function createData(cloud, task, checkmark) {
//   return { cloud, task, checkmark };
// }

// const rows = [
//   createData("Cloud", "Clean room hello to morrow today", "checkbox"),
//   createData("Cloud", "I need to clean my room", "checkbox"),
//   createData("Cloud", "Clean room", "checkbox"),
//   createData("Cloud", "Clean room", "checkbox"),
// ];

export function TasksPending() {
  const classes = useStyles();

  const [tasks, setTasks] = useState([]);
  const [selectedId, setSelectedId] = useState([]);
  

  const getPending = async (event) => {
    try {
      // const body = { task, completed: false, user_id: 1 };
      const response = await fetch("http://localhost:8080/taskspending");
      const jsonData = await response.json();

      setTasks(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getPending();
  
  }, []);


  const deleteTask = async () => {
    try {
      await fetch(
        `http://localhost:8080/tasks/${selectedId}`,
        {
          method: "DELETE",
        }
      );
      setTasks(tasks.filter((todo) => todo.id !== selectedId));
    } catch (err) {
      console.error(err);
    }
  };

  const moveTask = async () => {
    try {
      await fetch(
        `http://localhost:8080/taskscompleted/${selectedId}`,
        {
          method: "PUT",
          // headers: { "Content-Type": "application/json" },
          // // body: JSON.stringify(body)
        }
        ) 
        setTasks(tasks.filter((todo) => todo.id !== selectedId));
    } catch (err) {
      console.error(err);
    }
  }



  const colours = ["#F5A571", "#93A2ED", "#FFDEA6", "#7BCDC8"];
  const repeats = Math.ceil(tasks.length / colours.length);
  const newColours = Array.apply(null, {
    length: repeats * colours.length,
  }).map(function (e, i) {
    return colours[i % colours.length];
  });
  // const difference = newColours.length - tasks.length;
  // newColours.splice(0, difference);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="center" style={{ fontSize: "20px", fontFamily: "Montserrat"}}>
              Tasks
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((todo, index) => (
            <TableRow key={todo.id}>
              <TableCell component="th" scope="row">
                <FilterDramaIcon style={{ color: newColours[index] }} />
              </TableCell>
              <TableCell align="center" style={{ fontSize: "15px", fontFamily: "Montserrat" }}>
                {todo.task}
              </TableCell>
              <TableCell>
                <Checkboxes setSelectedId={setSelectedId} id={todo.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell align="center"></TableCell>
            <TableCell align="center" className="icons-style">
              <DoneIcon onClick={moveTask} selectedId={selectedId} style={{ paddingRight: "15px" }} />
              <DeleteIcon onClick={deleteTask} />
              <EditModal setTasks={setTasks} selectedId={selectedId} style={{display: "inlineBlock"}}/>
            </TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

