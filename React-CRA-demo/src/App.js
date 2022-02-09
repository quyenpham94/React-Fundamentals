import React from 'react';
// import logo from './logo.svg';
// import {sum, multiply} from './helper.js';
// import cats from './cats';
import items from './items';
import moreItems from './moreItems';
import ShoppingCart from './ShoppingCart';
import './App.css';


function App() {

  return (
    <div>
        <ShoppingCart items={items} username="Carly" />
        <ShoppingCart items={moreItems} username="David" />
    </div>
    
  );
}

export default App;
