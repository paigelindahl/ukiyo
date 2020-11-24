import React from "react";
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
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  table: {
    minWidth: "300",
  },
});

function createData(cloud, task, checkmark) {
  return { cloud, task, checkmark };
}

const rows = [
  createData("Cloud", "Clean room hello to morrow today", "checkbox"),
  createData("Cloud", "I need to clean my room", "checkbox"),
  createData("Cloud", "Clean room", "checkbox"),
  createData("Cloud", "Clean room", "checkbox"),
];

export function TasksPending() {
  const classes = useStyles();

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
          {rows.map((row) => (
            <TableRow key={row.cloud}>
              <TableCell component="th" scope="row">
                <FilterDramaIcon style={{ color: "#93A2ED" }} />
              </TableCell>
              <TableCell
                align="center"
                style={{ fontSize: "12px", width: "100%" }}
              >
                {row.task}
              </TableCell>
              <TableCell style={{ width: "5px" }}>
                <Checkboxes />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell align="center"></TableCell>
            <TableCell align="center">
              <DoneIcon style={{paddingRight: "15px"}}/>
              <DeleteIcon/>
              <EditIcon style={{paddingLeft: "15px"}} />
            </TableCell>
            <TableCell align="center" ></TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

{
  /* <FilterDramaIcon style={{color: "#F5A571"}} />
<FilterDramaIcon style={{color: "#FFDEA6"}} />
<FilterDramaIcon style={{color: "#7BCDC8"}} /> */
}
