import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

export function AddTaskBtn() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab
        style={{ backgroundColor: "#7BCDC8", color: "#FFDEA6", marginTop: "50px" }}
        aria-label="add"
      >
        <AddIcon />
      </Fab>
    </div>
  );
}
