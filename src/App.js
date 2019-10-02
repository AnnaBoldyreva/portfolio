import React from 'react';
import './App.css';
import Header from "./Header";
import Greeting from "./Greeting";
import Skills from "./Skills";
import Works from "./Works";
import Offer from "./Offer";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className='portfolio'>
        <Header/>
        <Greeting/>
        <Skills/>
        <Works/>
        <Offer/>
        <Contact/>
        <Footer/>

      </div>

    </div>
  );
}

export default App;
