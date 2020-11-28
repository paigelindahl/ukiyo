import React, {useState} from 'react'
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

export function QuotesFavouriteBtn(props) {
  console.log('this is upper quote text', typeof props.text);
  console.log('this is  upper author',typeof props.author);
  const quoteAuthor = props.author
  const quoteText = props.text
  const [state, setState] = React.useState({
    checkedH: false,
  });


  const addFavouriteQuotes = async function (quoteText, quoteAuthor) {
  
  console.log('this is quote text', quoteText);
  console.log('this is author', quoteAuthor);

    const body = {quoteAuthor, quoteText}
    try {
      await fetch('http://localhost:8080/favquotes', {
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
