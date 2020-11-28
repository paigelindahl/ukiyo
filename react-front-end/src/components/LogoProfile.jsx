import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import './styles/LogoProfile.scss';
import { Link } from 'react-router-dom';
import { requirePropFactory } from '@material-ui/core';
// import logo from '../public/images/logo.svg'


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
        <Link to="/dashboard" className="logo-link">
          <h1>UKIYO</h1>
        </Link>
        <div className="profile-info">
        <Avatar alt="Remy Sharp" 
        src="../public/images/avatar/puppy.jpeg"
        />
          <h5 className="user-name">Paige</h5>
        </div>
      </div>
    </>
  )
}
