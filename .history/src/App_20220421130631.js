import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScriptTag from 'react-script-tag';
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

        <section>
          <script type="text/javascript">(function() {var script=document.createElement("script");script.type="text/javascript";script.async =true;script.src="//telegram.im/widget-button/index.php?id=@abhi_sharma27";document.getElementsByTagName("head")[0].appendChild(script);})();</script>
          <a href="https://telegram.im/@abhi_sharma27" target="_blank" class="telegramim_button telegramim_shadow" style="font-size:26px;width:50px;background:#27a5e7;box-shadow:1px 1px 5px #27a5e7;color:#FFFFFF;border-radius:50px;" title=""><i></i></a>

        </section>

      </section>
    );
  }
}

export default App;


