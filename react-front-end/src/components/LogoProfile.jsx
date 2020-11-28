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
          <h1>
            <img width="100" src="https://raw.githubusercontent.com/saadxislam/ukiyo/8268406e96bcef9c8a81db510d0b082260ce9209/react-front-end/public/images/logo.svg" alt="logo"/>
          </h1>
        </Link>
        <div className="profile-info">
        <Avatar alt="Remy Sharp" 
        src="https://images.unsplash.com/photo-1593134257782-e89567b7718a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80"
        />
          <h5 className="user-name">Paige</h5>
        </div>
      </div>
    </>
  )
}
