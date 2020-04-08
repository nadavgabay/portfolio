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
import About from './Pages/About';
import './App.css';
import Navbar from './Components/Navbar/Navbar';

export default function App() {
  return (
    <>
    <Navbar/>
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
    </>
  );
}

