
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Gallery from './Gallery';
import Contact from './Contact';
import About from './About';
import {Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className='header-menu'>
          <h1 className='logo'>Wave<span>Global</span></h1>
              <a href="Home"><button>Home</button></a>
              <a href="Gallery"><button>Gallery</button></a>
              <a href="About"><button>About</button></a>
              <a href="Contact"><button>Contact</button></a>
     </header>
      <Route path="/Home" component={Home} />
      <Route path="/Gallery" component={Gallery} />
      <Route path="/About" component={About} />
      <Route path="/Contact" component={Contact} />
    </div>
  );
}

export default App;
