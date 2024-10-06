import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import Explore from './components/Explore/Explore';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div>
      <Home />
      <About />
      <Contact />
      <Services />
      <Explore />
    </div>
  );
}

export default App;
