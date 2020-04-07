import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from './Pages/Home'
import Skills from "./Pages/Skills";
import ExperienceParallax from "./Pages/ExperienceParallax";
import Inx from './Pages/Jobs/Inx';
import Tradair from './Pages/Jobs/Tradair';
import Duda from './Pages/Jobs/Duda';
import Army from './Pages/Jobs/8200';
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About';
import './App.css';

export default function App() {
  return (
    <>
    <Navbar/>
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          
          <Route path="/skills" component={Skills} />
          <Route path="/about" component={About} />
          <Route path="/experience" component={ExperienceParallax}/>
          <Route path="/inx" component={Inx}/>
          <Route path="/tradair" component={Tradair}/>
          <Route path="/duda" component={Duda}/>
          <Route path="/8200" component={Army}/>
          <Route path="/" component={Home}/>
          </Switch>
    </Router>
    </>
  );
}

