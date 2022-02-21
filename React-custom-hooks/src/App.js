import React from 'react';
import MoodClicker from './MoodClicker';
import Counter from './Counter';
import ColorPicker from './ColorPicker';
import SignUpForm from './SignUpForm';  
import './App.css';

function App() {
  return (
    <div className="App">
      <SignUpForm />
      <ColorPicker />
      <Counter />
      <MoodClicker />
    </div>
  );
}

export default App;
