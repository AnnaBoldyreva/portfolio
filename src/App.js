import React from 'react';
import './App.css';
import Header from "./Header";
import Greeting from "./Greeting";
import Skills from "./Skills";

function App() {
  return (
    <div className="App">
      <div className='portfolio'>
        <Header/>
        <Greeting/>
        <Skills/>

      </div>

    </div>
  );
}

export default App;
