import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
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

      // backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function handleClick(event) {
  console.log("event", event.target);
}

export function TopNav() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Link to="/meditate" style={{ textDecoration: "none" }}>
          <StyledBreadcrumb
            component="a"
            label="Meditate"
            onClick={handleClick}
          />
        </Link>
        <Link to="/yoga" style={{ textDecoration: "none" }}>
          {" "}
          <StyledBreadcrumb component="a" label="Yoga" onClick={handleClick} />
        </Link>
        <StyledBreadcrumb
          component="a"
          href="#"
          label="Tasks"
          onClick={handleClick}
        />
        <StyledBreadcrumb
          component="a"
          href="#"
          label="Journal"
          onClick={handleClick}
        />
        <Link to="/favourites" style={{ textDecoration: "none" }}>
          <StyledBreadcrumb
            component="a"
            href="#"
            label="Favourites"
            onClick={handleClick}
          />
          
        </Link>
      </ThemeProvider>
    </>
  );
}
