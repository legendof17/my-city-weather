import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages';
import Weather from './pages/weather';


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/weather' exact component={Weather} />
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default App;
