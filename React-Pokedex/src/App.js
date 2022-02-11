
import React from "react";
import Pokedex from "./Pokedex";
import pokemons from './pokemon';

function App() {
  return (
   <div>
     <Pokedex pokemon={pokemons}/>
   </div>
  );
}

export default App;
