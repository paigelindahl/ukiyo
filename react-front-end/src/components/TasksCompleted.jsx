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
// import { Checkboxes } from "./Checkboxes";
// import TableFooter from "@material-ui/core/TableHead";
// import DoneIcon from "@material-ui/icons/Done";
// import DeleteIcon from "@material-ui/icons/Delete";
// import { EditModal } from "./EditModal";
import './styles/TasksPending.scss'
import CheckBoxIcon from '@material-ui/icons/CheckBox';

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

export function TasksCompleted() {
  const classes = useStyles();

  const [tasksCompleted, setTasksCompleted] = useState([]);
  // const [selectedId, setSelectedId] = useState([]);
  

  const getCompleted = async (event) => {
    try {
      // const body = { task, completed: false, user_id: 1 };
      const response = await fetch("http://localhost:8080/taskscompleted");
      const jsonData = await response.json();
      console.log('jsonData :', jsonData);

      setTasksCompleted(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  

  useEffect(() => {
    getCompleted();
  }, []);


  const colours = ["#F5A571", "#93A2ED", "#FFDEA6", "#7BCDC8"];
  const repeats = Math.ceil(tasksCompleted.length / colours.length);
  const newColours = Array.apply(null, {
    length: repeats * colours.length,
  }).map(function (e, i) {
    return colours[i % colours.length];
  });

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="center" style={{ fontSize: "18px" }}>
              Tasks
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasksCompleted.map((todo, index) => (
            <TableRow key={todo.id}>
              <TableCell component="th" scope="row">
                <FilterDramaIcon style={{ color: newColours[index] }} />
              </TableCell>
              <TableCell align="center" style={{ fontSize: "12px" }}>
                {todo.task}
              </TableCell>
              <TableCell>
                <CheckBoxIcon style={{color:"#7BCDC8"}}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}