import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Howtouse from './pages/howtouse';
import Getapi from './api/getip';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/howtouse' exact component={Howtouse} />
      </Switch>
      <div>
        <Getapi />
      </div>
    </Router>
  );
}

export default App;
