import React from 'react';
import { emphasize, withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import HomeIcon from '@material-ui/icons/Home';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#7BCDC8",
      secondary: "transparent"
    },
  },
});

const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.secondary,
    height: theme.spacing(3),
    // color: theme.palette.primary.main[800],
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.primary.main
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      // backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}



export function TopNav() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <StyledBreadcrumb component="a" href="#" label="Meditate" onClick={handleClick} />
      <StyledBreadcrumb component="a" href="#" label="Yoga" onClick={handleClick} />
      <StyledBreadcrumb component="a" href="#" label="Tasks" onClick={handleClick} />
      <StyledBreadcrumb component="a" href="#" label="Journal" onClick={handleClick} />
      <StyledBreadcrumb component="a" href="#" label="Favourites" onClick={handleClick} />
    </ThemeProvider>
    </>  
  );
}