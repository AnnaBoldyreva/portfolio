import React from 'react';
import './App.css';
import Header from "./Header";
import Greeting from "./Greeting";
import Skills from "./Skills";

import Offer from "./Offer";
import Contact from "./Contact";
import Footer from "./Footer";
import Projects from "./Projects";

function App(props) {
  return (
    <div className="App">
      <div className='portfolio'>
        <Header/>
        <Greeting/>
        <Skills skill={props.state.skill}/>
        <Projects project={props.state.projects}/>
        <Offer/>
        <Contact/>
        <Footer/>

      </div>

    </div>
  );
}

export default App;
