// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import DriverForm from './components/DriverForm';
import VehicleList from './components/VehicleList';
import scheduleAssignmentForm from './components/scheduleAssignmentForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/">Driver Form</Link>
            <Link to="/vehicle-list">Vehicle List</Link>
            <Link to="schedule-assignment">Schedule Assignment</Link>
          </nav>
        </header>
        <Switch>
          <Route exact path="/" component={DriverForm} />
          <Route path="/vehicle-list" component={VehicleList} />
          <Route path="/schedule-assignment" component={scheduleAssignmentForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;


