import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Header from "./core/header/header";
import Home from "./core/pages/home/home";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route to exact path="/Home"><Home /></Route>
      </Router>

    </div>
  );
}

export default App;
