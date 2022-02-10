import React from 'react';
// import logo from './logo.svg';
// import {sum, multiply} from './helper.js';
// import cats from './cats';
import items from './items';
import moreItems from './moreItems';
import ShoppingCart from './ShoppingCart';
import Alert from "./Alert";
import Greeting from "./Greeting.js";
// import fakeLogo from './fakeLogo.svg';
import './App.css';


function App() {

  return (
    <div>
      
        <Alert variant="success">
          <h1>Welcome back</h1>
          <Greeting />
        </Alert>
        <Alert variant="danger">
          <h1>Oh no!</h1>
        </Alert>
        <ShoppingCart items={items} username="Carly" />
        <ShoppingCart items={moreItems} username="David" />
    </div>
    
  );
}

export default App;
