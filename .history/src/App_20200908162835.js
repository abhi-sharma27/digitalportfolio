import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Header from "./core/header/header";
import Home from "./core/pages/home/home";
import Skills from "./core/pages/skills/skills";
import About from "./core/pages/about/about";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route to exact path="/"><Home /></Route>
        <Route to exact path="/Skills"><Skills /></Route>
        <Route to exact path="/About"><About /></Route>
        console.log({window.location.href});
      </Router>

    </div>
  );
}

export default App;
