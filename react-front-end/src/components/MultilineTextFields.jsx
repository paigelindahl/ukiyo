import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './styles/MultilineTextFields.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function MultilineTextFields(props) {
  const classes = useStyles();
  const [response, setResponse] = React.useState('');


  const handleChange = (event) => {
    setResponse(event.target.value);
  };

  

  return (
    <div className={classes.root}>
      <div className="journal-container">
        <div className="answer-textarea">
          <h6 className="question-title">{props.question}</h6>
          <TextField
            id="standard-multiline-flexible"
            multiline
            rowsMax={3}
            value={response}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
   
  )};
