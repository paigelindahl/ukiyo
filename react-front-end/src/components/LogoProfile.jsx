import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
// import logo from './logo.png';
import './styles/LogoProfile.scss';


// const useStyles = makeStyles((theme) => ({
//   anything: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     margin: theme.spacing(1),
//   },
//   profileInfo: {
//     display: 'flex',
//     alignItems: 'center',
//     margin: theme.spacing(1),
//   }
// }));

export function LogoProfile(props) {

  // const classes = useStyles();

  return (
    <>
      <div className="logo">
        <h1>UKIYO</h1>
        <div className="profile-info">
          <Avatar>P</Avatar>
          <h5 className="user-name">Paige</h5>
        </div>
      </div>
    </>
  )
}
