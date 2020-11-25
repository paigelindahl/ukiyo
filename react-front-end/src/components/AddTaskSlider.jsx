import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { AddTaskBtn } from './AddTaskBtn';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
// }));

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

export function AddTaskSlider() {
  const classes = useStyles();
  const [state, setState] = React.useState({
  
    bottom: false,
    
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
  console.log('are we here?')
    setState({  ...state, [anchor]: open });
  };

  const closeDrawer = (anchor, open) => {
    setState({...state, [anchor]: false})
  }

  const list = (anchor) => (
    <div
      className={clsx(classes.list.shape, {
        [classes.fullList]: anchor === 'bottom',
      })}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <h4>Create a new task</h4> 
        {<input></input>}
        <Button variant="outlined" onClick={toggleDrawer(anchor, false)}>Primary</Button>
        {/* <button >ADD</button> */}
      </List>
     
    </div>
  );
      // onClose={toggleDrawer(anchor, false)}

  return (

    <div>
      {['bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><AddTaskBtn/></Button>
          <Drawer anchor={anchor} open={state[anchor]}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
