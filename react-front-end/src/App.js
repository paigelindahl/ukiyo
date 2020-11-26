import React from 'react';
import './App.css';
import { MainPage } from './components/MainPage';
import { JournalSad } from './components/JournalSad';
import { JournalHappy } from './components/JournalHappy';
import { CreateTask } from './components/CreateTask';
import { LogoProfile } from './components/LogoProfile';
import { Dashboard } from './components/Dashboard';
import { Yoga } from './components/Yoga';
import { Meditate } from './components/Meditate';
import { Favourites } from './components/Favourites';
import { Tasks } from './components/Tasks';
import { JournalEntries } from './components/JournalEntries';
import { 
  BrowserRouter as Router,
  Route
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
          <Route path="/yoga" component={Yoga} />
          <Route path="/favourites" component={Favourites}/>
          <Route path="/tasks" component={Tasks}/>
          <Route path="/journalentries" component={JournalEntries} />
        </div>
      </Router>

    );
}

export default App;
