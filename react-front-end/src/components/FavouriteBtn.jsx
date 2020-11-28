import React, {useState} from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

// const  = withStyles({
//   checked: {}
// })((props) => <Checkbox color="default" {...props} />);

export function FavouriteBtn(props) {
  // const [favTitle, setFavTitle] = useState('');
  // setFavTitle(props.title);
  const faveTitle = props.title
  const faveId = props.id
  const addFavourite = (props) => {
    if (faveTitle.includes("Yoga")) {
      addFavouriteYoga(faveId);
    } else if (faveTitle.includes("Meditation")) {
      addFavouriteMeditate(faveId);
    } else {
      // addFavoriteQuote();
      console.log('I am quotes');
    }
  };

  const addFavouriteYoga = async function (faveId) {
    try {
      await fetch(`http://localhost:8080/yoga/${faveId}`, {
        method: "PUT",
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  const addFavouriteMeditate = async function (faveId) {
    try {
      await fetch(`http://localhost:8080/meditate/${faveId}`, {
        method: "PUT",
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  // const addFavouriteQuotes = async function (props) {
  //   try {
  //     await fetch(`http://localhost:8080/quotes/${props.id}`, {
  //       method: "PUT",
  //     });
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };

  const [state, setState] = React.useState({
    checkedH: false,
  });

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
          onClick={addFavourite}
          onChange={handleChange}
          checked={state.checkedH}
        />
      }
    />
  );
}
