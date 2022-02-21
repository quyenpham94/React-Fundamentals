import React, {useState} from "react";
import pokemonList from "./pokemonList";
import { choice, formatPokemon } from "./helpers";


// select element to choose from common pokemon.
const PokemonSelect = ({ add, pokemon = pokemonList }) => {
    const [pokeIdx, setPokeIdx] = useState(0);
    const handleChange = e => {
        setPokeIdx(e.target.value);
    };

    return (
        <div>
            <select onChange={handleChange}>
                {pokemon.map((p, idx) => (
                    <option key={idx} value={idx}>
                        {p}
                    </option>
                ))}
            </select>
            <button onClick={() => add(formatPokemon, pokemon[pokeIdx])}>
                Catch one!
            </button>
            <button onClick={() => add(formatPokemon, choice(pokemon))}>
                I'm feeling lucky
            </button>
        </div>
    )
}

export default PokemonSelect;