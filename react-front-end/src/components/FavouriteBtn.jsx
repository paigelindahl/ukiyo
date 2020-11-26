import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

// const  = withStyles({
//   checked: {}
// })((props) => <Checkbox color="default" {...props} />);

export function FavouriteBtn(props) {
  const addFavourite = async function () {
    const title = props.title;
    const urlSource = props.urlSource;
     const body = { title, urlSource };
    try {
      await fetch("http://localhost:8080/yoga", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  // const addFavouriteMeditate = async function () {
  //   const title = props.title;
  //   const urlSource = props.urlSource;
  //    const body = { title, urlSource };
  //   try {
  //     await fetch("http://localhost:8080/meditate", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(body)
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
