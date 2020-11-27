import React, { useState } from "react";
import { Greeting } from "./Greeting";
import { Quotes } from "./Quotes";
import { CustomSlider } from "./CustomSlider";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Link } from "react-router-dom";

export function MainPage(props) {
  const [sliderValue, setSliderValue] = useState(50);
  console.log("sliderValue :", sliderValue);

  return (
    <>
      <Greeting />
        <Quotes />
      <CustomSlider setSliderValue={setSliderValue} />
      {sliderValue > 50 ? (
        <Link className="link" to="/journal1">
          <ArrowForwardIosIcon fontSize="large" />
        </Link>
      ) : (
        <Link className="link" to="/journal2">
          <ArrowForwardIosIcon fontSize="large" />
        </Link>
      )}
    </>
  );
}
