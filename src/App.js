import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import QuestionContainer from './components/QuestionContainer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Route exact path="/" component={Home} />
        <Route exact path="/questions" component={QuestionContainer} />
      </div>
    </BrowserRouter>
  );
};

export default App;
