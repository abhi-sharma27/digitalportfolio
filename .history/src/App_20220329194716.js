import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Header from "./core/header/header";
import Home from "./core/pages/home/home";
import Skills from "./core/pages/skills/skills";
import About from "./core/pages/about/about";

class App extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  render () {
    return (
      <div>
        
        <Router>
          <Header />
          <div className="padding-top">
          <Route to exact path="/"><Home /></Route>
          <Route to exact path="/Skills"><Skills /></Route>
          <Route to exact path="/About"><About /></Route>
          </div>
          <button>Download Apk</button>
        </Router>

      </div>
    );
  }
}

export default App;
