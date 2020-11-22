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

export default function MultilineTextFields() {
  const classes = useStyles();
  const [questionOne, setQuestionOne] = React.useState('');
  // const [questionTwo, setQuestionTwo] = React.useState('');
  // const [questionThree, setQuestionThree] = React.useState('');

  const handleChangeOne = (event) => {
    setQuestionOne(event.target.value);
  };

  // const handleChangeTwo = (event) => {
  //   setQuestionTwo(event.target.value);
  // }

  // const handleChangeThree = (event) => {
  //   setQuestionThree(event.target.value)
  // }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className="journal-container">
        <div className="answer-textarea">
          <TextField
            id="standard-multiline-flexible"
            name="question-one"
            // label="Why do you think you're feeling this way?"
            multiline
            rowsMax={4}
            value={questionOne}
            onChange={handleChangeOne}
          />
        </div>
        {/* <div className="answer-textarea">
          <TextField
            id="standard-multiline-flexible"
            name="question"
            // label="What can you do to change that?"
            multiline
            rowsMax={4}
            value={questionTwo}
            onChange={handleChangeTwo}
          />
        </div>
        <div className="answer-textarea">
          <TextField
            id="standard-multiline-flexible"
            // label="What are three things you are grateful for?"
            multiline
            rowsMax={4}
            value={questionThree}
            onChange={handleChangeThree}
          />
        </div> */}
      </div> 
    </form>
    )};
