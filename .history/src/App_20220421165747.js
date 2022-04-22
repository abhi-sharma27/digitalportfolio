import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { TelegramShareButton } from 'react-share';
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

  render() {
    return (
      <section>
        <div className='wind-paper'>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <div>
                        <div>
                          <div>
                            <div>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <section>
          <Router>
            <Header />
            <section className="padding-top">
              <Route to exact path="/digitalportfolio"><Home /></Route>
              <Route to exact path="/Skills"><Skills /></Route>
              <Route to exact path="/About"><About /></Route>
            </section>

          </Router>
        </section>

        <TelegramShareButton url='https://t.me/abhi_sharma27' />

      </section>
    );
  }
}

export default App;


