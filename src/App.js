import React from 'react';
import './App.css';
import Main from './components/Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/router-components/Home';
import About from './components/router-components/About';
import Skills from './components/router-components/Skills';
import Experience from './components/router-components/Experience';
import Projects from './components/router-components/Projects';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Main child={<Home />} />
          </Route>
          <Route path="/About">
            <Main child={<About/>} />
          </Route>
          <Route path="/Skills">
            <Main child={<Skills/>} />
          </Route>
          <Route path="/Experience">
            <Main child={<Experience/>} />
          </Route>
          <Route path="/Projects">
            <Main child={<Projects/>} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
