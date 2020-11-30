import React, {useEffect, useState} from 'react'
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

export function QuotesFavouriteBtn(props) {
  const [state, setState] = React.useState({
    checkedH: false,
  });
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');

  useEffect (() =>{  
    setAuthor(props.author);
    setText(props.text)
  
  }, [])



  const addFavouriteQuotes = async function (props) {
  
 
    const body = {author, text}
    try {
      await fetch('/favquotes', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
    } catch (error) {
      console.error(error.message);
    }
  };


  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
          name="checkedH"
          onClick={addFavouriteQuotes}
          onChange={handleChange}
          checked={state.checkedH}
        />
      }
    />
  )
}
