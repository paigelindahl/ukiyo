import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import EditIcon from "@material-ui/icons/Edit";
import "./styles/TasksPending.scss";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export function EditModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [editContent, setEditContent] = useState("");

  useEffect(() => {
    onEditClick();
  }, []);

  const onEditClick = async () => {
    try {
      const editTask = await fetch(
        `/tasks/${props.selectedId}`
      );
      const jsonData = await editTask.json();
      setEditContent(jsonData.task);
    } catch (err) {
      console.error(err);
    }
  };

  const putEdit = async () => {
    const task = editContent;
    const body = { task };
    try {
      await fetch(`tasks/${props.selectedId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (err) {
      console.error(err.message);
    }
    props.setTasks((prev) => {
      const newArray = [...prev];
      const updatedTask = newArray.find((task) => (task.id = props.selectedId));
      if (updatedTask) {
        updatedTask.task = editContent;
      }
      return newArray;
    });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = function (event) {
    setEditContent(event.target.value);
  };

  return (
    <div>
      {/* <button type="button" onClick={handleOpen}> */}
      <EditIcon
        style={{ paddingLeft: "15px" }}
        onClick={() => {
          handleOpen();
          onEditClick();
        }}
      ></EditIcon>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Edit task</h2>
            <input className="edit-task-input" type="text" value={editContent} onChange={handleChange} />
            <button
              onClick={(e) => {
                putEdit(e);
                handleClose();
              }}
            >
              OK
            </button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
