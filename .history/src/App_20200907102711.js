import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Header from "./core/header/header";

function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
