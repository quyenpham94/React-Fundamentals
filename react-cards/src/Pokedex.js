import React from "react";
import useAxios from "./hooks/useAxios";    
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./Pokedex.css";

const Pokedex = () => {
    const [pokemon, addPokemon, clearPokemon] = useAxios(
        "pokemon",
        "https://pokeapi.co/api/v2/pokemon/"
    );

    return (
        <div className="Pokedex">
            <div className="Pokedex-buttons">
                <h3>Please select your pokemon:</h3>
                <PokemonSelect add={addPokemon} />
                <button onClick={clearPokemon}>Delete the pokemon!</button>
            </div>
            <div className="Pokedex-card-area">
                {pokemon.map(card => (
                    <PokemonCard key={card.id} {...card} />
                ))}
            </div>
        </div>
    )
}

export default Pokedex;