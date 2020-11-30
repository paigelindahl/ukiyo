import React,{useState} from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import { AddTaskBtn } from "./AddTaskBtn";
import './styles/AddTaskSlider.scss';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import FilterDramaIcon from "@material-ui/icons/FilterDrama";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#7BCDC8",
    },
  },
});

export function AddTaskSlider() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    bottom: false,
  });
  const [newAddedTask, setNewAddedTask] = useState('')

  const addNewTask = async() => {

    try {
      const task = newAddedTask
      const body = { task, completed: false, user_id: 1 };

     await fetch("/tasks", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify(body)
    })
      window.location = "/tasks";

    } catch(err) {
      console.error(err.message)
    }
  }

  const cancelTask = function() {
    setState({bottom: false});
  }

  const toggleDrawer = (anchor, open) => (event) => {
    setState({[anchor]: open });
  };

  const list = (anchor) => (
    <div>
      <List>
        <input className="add-input" value={newAddedTask} onChange={e => setNewAddedTask(e.target.value) }/>
        <div className="btn-container">
          <ThemeProvider theme={theme}>
          <Button
              color="primary"
              onClick={() => {
                toggleDrawer(anchor, false);
                cancelTask();
              }}
            >
              CANCEL
            </Button>
            <Button
              variant="contained" 
              color="primary"
              onClick={() => {
                toggleDrawer(anchor, false);
                addNewTask();
              }}
            >
              ADD
            </Button>
          </ThemeProvider>
        </div>
      </List>
    </div>
  );

  return (
    <div>
      {["bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <AddTaskBtn />
          </Button>
          <Drawer anchor={anchor} open={state[anchor]}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
