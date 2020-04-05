import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home'
import { bubble as Menu } from 'react-burger-menu'
import Skills from "./Pages/Skills";
import ExperienceParallax from "./Pages/ExperienceParalax/ExperienceParallax";
import Inx from './Pages/Jobs/Inx';
import Tradair from './Pages/Jobs/Tradair';

export default function App() {
  return (
    <Router>
    <div>
        <Menu >
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="skills" className="menu-item" href="/skills">Skills</a>
        <a id="experience" className="menu-item" href="/experience">Experience</a>
      </Menu>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/experience">
            <ExperienceParallax />
          </Route>
          <Route path="/inx">
            <Inx />
          </Route>
          <Route path="/tradair">
            <Tradair />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </div>
    </Router>
  );
}

