import React from 'react';
import './App.css';
import Header from "./Header";
import Greeting from "./Greeting";
import Skills from "./Skills";
import Works from "./Works";

function App() {
  return (
    <div className="App">
      <div className='portfolio'>
        <Header/>
        <Greeting/>
        <Skills/>
        <Works/>

      </div>

    </div>
  );
}

export default App;
