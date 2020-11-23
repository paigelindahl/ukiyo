import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { MainPage } from './components/MainPage';
import { JournalSad } from './components/JournalSad';
import { JournalHappy } from './components/JournalHappy';
import { CreateTask } from './components/CreateTask';
import { LogoProfile } from './components/LogoProfile';
import { Dashboard } from './components/Dashboard';
import { Bubbles } from './components/Bubbles';
import { Meditate } from './components/Meditate';
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
          <LogoProfile/>
          <Route exact path="/" component={MainPage}/>
          <Route path="/journal1" component={JournalSad}/>
          <Route path="/journal2" component={JournalHappy}/>
          <Route path="/createtask" component={CreateTask} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/meditate" component={Meditate} />
        </div>
      </Router>

    );
}

export default App;
