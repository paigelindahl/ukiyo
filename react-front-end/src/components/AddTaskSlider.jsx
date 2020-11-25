import React,{useState} from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import { AddTaskBtn } from "./AddTaskBtn";

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

     await fetch("http://localhost:8080/tasks", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify(body)
    })
      window.location = "/tasks";

    } catch(err) {
      console.error(err.message)
    }
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list.shape, {
        [classes.fullList]: anchor === "bottom",
      })}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <h4>Create a new task</h4>
        {<input value={newAddedTask} onChange={e => setNewAddedTask(e.target.value) }>

        </input>}
        <Button
          variant="outlined"
          onClick={() => {
            toggleDrawer(anchor, false);
            addNewTask();
          }}
        >
          ADD
        </Button>
        {/* <button >ADD</button> */}
      </List>
    </div>
  );
  // onClose={toggleDrawer(anchor, false)}

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
