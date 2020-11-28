import React from "react";
import { emphasize, withStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
// import { Yoga } from "./Yoga";
import { Link } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#7BCDC8",
      secondary: "transparent",
    },
  },
});

const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.secondary,
    height: theme.spacing(3),
    // color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: theme.palette.primary.main,
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.primary.main, 0.12),
    },
  },
}))(Chip);

function handleClick(event) {
  // event.preventDefault();
  // console.log("event", event.target);
}

export function TopNav() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Link to="/meditate" style={{ textDecoration: "none"}}>
          <StyledBreadcrumb
            component="a"
            label="Meditate"
            onClick={handleClick}
            style={{fontFamily: "Montserrat", fontSize: "16px"}}
          />
        </Link>
        <Link to="/yoga" style={{ textDecoration: "none"}}>
          <StyledBreadcrumb component="a" label="Yoga" onClick={handleClick} style={{fontFamily: "Montserrat", fontSize: "16px"}} />
        </Link>
        <Link to="/tasks" style={{ textDecoration: "none" }}>
        <StyledBreadcrumb
          component="a"
          href="#"
          label="Tasks"
          onClick={handleClick}
          style={{fontFamily: "Montserrat", fontSize: "16px"}}
        />
        </Link>
        <Link to="/journalentries" style={{ textDecoration: "none"}}>
        <StyledBreadcrumb
          component="a"
          href="#"
          label="Journal"
          onClick={handleClick}
          style={{fontFamily: "Montserrat", fontSize: "16px"}}
        />
        </Link>
        <Link to="/favourites" style={{ textDecoration: "none"}}>
          <StyledBreadcrumb
            component="a"
            href="#"
            label="Favourites"
            onClick={handleClick}
            style={{fontFamily: "Montserrat", fontSize: "16px"}}
          />
        </Link>
      </ThemeProvider>
    </>
  );
}
