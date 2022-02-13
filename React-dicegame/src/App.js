import React from 'react';
import './App.css';
import Dice from "./Dice.js";

function App() {
  return (
    <div className="App">
      <Dice numDice={4} maxVal={6} title="Roll me"/>
      <Dice />

    </div>
  );
}

export default App;
