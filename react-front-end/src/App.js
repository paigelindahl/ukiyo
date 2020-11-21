import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { MainPage } from './components/MainPage';
import { JournalHappy } from './components/JournalHappy';
import { JournalSad } from './components/JournalSad';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = function(){


  // fetchData = () => {
  //   axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
  //   .then((response) => {
  //     // handle success
  //     console.log(response.data) // The entire response from the Rails API

  //     console.log(response.data.message) // Just the message
  //     this.setState({
  //       message: response.data.message
  //     });
  //   }) 
  // }
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={MainPage}/>
          <Route path="/journal1" component={JournalHappy}/>
          <Route path="/journal2" component={JournalSad}/>
        </div>
      </Router>

    );
}

export default App;
