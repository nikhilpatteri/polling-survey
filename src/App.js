import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <Route path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
