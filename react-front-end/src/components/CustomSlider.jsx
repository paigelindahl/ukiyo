import React, {useState} from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import { ThemeProvider } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import { createMuiTheme } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import "./styles/CustomSlider.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 200 + theme.spacing(3) * 2,
    marginTop: "150px",
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#F5A571",
    },
  },
});

function ValueLabelComponent(props) {
  const { children, open, value } = props;
  // props.setSliderValue(value);
  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
  
};



export function CustomSlider(props) {
  const classes = useStyles();
  // console.log('this is value', value);
  return (
    <>
      <Grid container justify="center">
        <div className={classes.root}>
          <ThemeProvider theme={theme}>
            <Slider
              defaultValue={50}
              ValueLabelComponent={ValueLabelComponent}
              onChange={(event, value) => props.setSliderValue(value)}
              aria-label="custom thumb label"
            />
          </ThemeProvider>
          <div className="emotion-icons">
            <SentimentVeryDissatisfiedIcon />
            <SentimentSatisfiedIcon />
            <SentimentVerySatisfiedIcon />
          </div>
        </div>
      </Grid>
    </>
  );
}
